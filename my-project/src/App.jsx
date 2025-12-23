import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Mic, MessageSquare, Clock, Zap, Shield, Brain, Star } from "lucide-react";

// Dashboard Component (placeholder for when signed in)
function Dashboard() {
  return (
    <div className="flex justify-center px-4 mt-12">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white text-center">
          🎤 Your AI Voice Assistant is Ready!
        </h2>
        <p className="text-white/70 text-center mt-2">
          Start speaking to interact with your personal AI assistant
        </p>
        <button className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl text-lg font-semibold transition-all">
          🎙 Start Voice Session
        </button>
      </div>
    </div>
  );
}

// Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <Mic className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-3">
            Personal Assistant
          </h1>
          <p className="text-gray-600 text-center text-lg mb-8">
            Your AI-powered voice companion. Anytime, anywhere.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <MessageSquare className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm">Natural conversations</span>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <Brain className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm">Smart AI responses</span>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-yellow-300 to-amber-400 rounded-2xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <Clock className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm">24/7 availability</span>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
              <Zap className="w-6 h-6 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm">Lightning fast</span>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="mb-8">
            <SignInButton mode="modal">
              <button className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-all hover:shadow-lg group">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-semibold text-lg">Continue with Google</span>
              </button>
            </SignInButton>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <Shield className="w-4 h-4" />
              Secure & Private
            </div>
            <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <Star className="w-4 h-4" />
              AI-Powered
            </div>
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              Real-time
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms & Privacy
            </a>
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className="text-white/60 text-center mt-6 text-sm">
          Powered by Claude AI • Built for seamless voice interaction
        </p>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      {/* Header - Only show when signed in */}
      <SignedIn>
        <header className="flex justify-between items-center px-6 py-4 bg-white/5 backdrop-blur-sm border-b border-white/10">
          <h1 className="text-white text-xl font-bold flex items-center gap-2">
            <Mic className="w-6 h-6" />
            Personal Assistant
          </h1>
          <UserButton afterSignOutUrl="/" />
        </header>
      </SignedIn>

      {/* Main Content */}
      <SignedOut>
        <LandingPage />
      </SignedOut>

      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}