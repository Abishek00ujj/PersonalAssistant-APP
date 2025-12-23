import React, { useState, useEffect } from "react";

// GlassCard Component
function GlassCard({ children }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
      {children}
    </div>
  );
}

export default function Dashboard() {
  const [listening, setListening] = useState(false);
  const [caption, setCaption] = useState("");
  const [finalText, setFinalText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.maxAlternatives = 1;
      
      setRecognition(recognitionInstance);
    } else {
      setIsSupported(false);
      setError("Speech Recognition not supported. Please use Chrome, Edge, or Safari.");
    }
  }, []);

  const startListening = () => {
    if (!recognition) {
      setError("Speech Recognition not available");
      return;
    }

    setCaption("");
    setFinalText("");
    setResponse("");
    setError("");

    try {
      try {
        recognition.abort();
      } catch (e) {}

      setTimeout(() => {
        try {
          recognition.start();
          setListening(true);
        } catch (e) {
          if (e.name === 'InvalidStateError') {
            recognition.stop();
            setTimeout(() => {
              recognition.start();
              setListening(true);
            }, 100);
          } else {
            setError(`Failed to start: ${e.message}`);
            setListening(false);
          }
        }
      }, 100);

      recognition.onstart = () => {
        setListening(true);
        setError("");
      };

      recognition.onresult = (event) => {
        let interim = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interim += transcript;
          }
        }

        if (interim) {
          setCaption(interim);
        }

        if (finalTranscript) {
          setFinalText(finalTranscript);
          setCaption("");
          handleAIResponse(finalTranscript);
        }
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onerror = (event) => {
        setListening(false);
        
        if (event.error === "not-allowed") {
          setError("🚫 Microphone access denied. Please allow microphone in browser settings.");
        } else if (event.error === "no-speech") {
          setError("🔇 No speech detected. Please try again.");
        } else if (event.error === "network") {
          setError("🌐 Network error. Check your connection and try refreshing the page.");
        } else if (event.error !== "aborted") {
          setError(`⚠️ Error: ${event.error}`);
        }
      };

    } catch (err) {
      setError(`Failed to start: ${err.message}`);
      setListening(false);
    }
  };

  const stopListening = () => {
    if (recognition && listening) {
      recognition.stop();
      setListening(false);
    }
  };

  const handleAIResponse = async (userText) => {
    setIsThinking(true);
    
    try {
      // Build conversation history
      const messages = [
        ...conversationHistory,
        { role: "user", content: userText }
      ];

      // Call Claude API
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: messages,
          system: "You are a helpful, friendly voice assistant. Keep your responses concise and conversational (2-3 sentences max) since they will be spoken aloud. Be warm and engaging."
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.content[0].text;

      setResponse(aiResponse);
      
      // Update conversation history
      setConversationHistory([
        ...messages,
        { role: "assistant", content: aiResponse }
      ]);

      // Speak the response
      speak(aiResponse);
      
    } catch (error) {
      console.error("AI Error:", error);
      const fallback = "I'm having trouble connecting right now. Please try again.";
      setResponse(fallback);
      speak(fallback);
    } finally {
      setIsThinking(false);
    }
  };

  const speak = (text) => {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  const clearConversation = () => {
    setConversationHistory([]);
    setFinalText("");
    setResponse("");
    setCaption("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex justify-center items-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <GlassCard>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">
                🎤 AI Voice Assistant
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Powered by Claude AI
              </p>
            </div>
            {conversationHistory.length > 0 && (
              <button
                onClick={clearConversation}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all"
              >
                Clear Chat
              </button>
            )}
          </div>

          {/* Main Action Button */}
          <button
            onClick={listening ? stopListening : startListening}
            disabled={!isSupported || isThinking}
            className={`w-full py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
              listening
                ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
                : isThinking
                ? "bg-blue-600 text-white"
                : "bg-violet-600 hover:bg-violet-700 text-white"
            }`}
          >
            {listening ? "🎧 Listening... (Click to Stop)" : 
             isThinking ? "🤔 AI is thinking..." : 
             "🎙 Start Speaking"}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-6 bg-red-500/30 border border-red-500/50 text-white p-4 rounded-xl">
              <strong>⚠️ Error:</strong>
              <div className="mt-2 text-sm">{error}</div>
            </div>
          )}

          {/* Live Caption */}
          {listening && caption && (
            <div className="mt-6 bg-blue-500/30 border border-blue-500/50 text-white p-4 rounded-xl animate-pulse">
              <strong>🎤 You're saying:</strong> <span className="text-blue-200">{caption}</span>
            </div>
          )}

          {/* Conversation Display */}
          {(finalText || response) && (
            <div className="mt-6 space-y-3">
              {finalText && (
                <div className="bg-white/10 border border-white/20 text-white p-4 rounded-xl">
                  <strong>👤 You:</strong>
                  <p className="mt-1">{finalText}</p>
                </div>
              )}

              {isThinking && (
                <div className="bg-violet-500/20 border border-violet-500/50 text-white p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <span className="ml-2">AI is thinking...</span>
                  </div>
                </div>
              )}

              {response && !isThinking && (
                <div className="bg-violet-500/30 border border-violet-500/50 text-white p-4 rounded-xl">
                  <strong>🤖 Claude:</strong>
                  <p className="mt-1">{response}</p>
                </div>
              )}
            </div>
          )}

          {/* Conversation History */}
          {conversationHistory.length > 2 && (
            <div className="mt-6 bg-white/5 border border-white/10 text-white/70 p-4 rounded-xl max-h-60 overflow-y-auto">
              <strong className="text-white">💬 Conversation History:</strong>
              <div className="mt-3 space-y-2 text-sm">
                {conversationHistory.slice(0, -2).map((msg, idx) => (
                  <div key={idx} className="pb-2 border-b border-white/10 last:border-0">
                    <strong>{msg.role === 'user' ? '👤 You:' : '🤖 Claude:'}</strong>
                    <p className="mt-1 text-white/60">{msg.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-6 bg-white/5 border border-white/10 text-white/60 p-4 rounded-xl text-sm">
            <strong>💡 Try asking:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• "What's the weather like today?"</li>
              <li>• "Tell me a joke"</li>
              <li>• "What can you help me with?"</li>
              <li>• "Explain quantum physics simply"</li>
              <li>• Have a natural conversation!</li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}