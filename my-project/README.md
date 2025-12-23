# 🎤 Personal Assistant App

A modern, AI-powered voice assistant application built with React and Claude AI. Speak naturally and get intelligent, context-aware responses in real-time.

![Personal Assistant App](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38bdf8)
![Clerk Auth](https://img.shields.io/badge/Clerk-5.59.2-6c47ff)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)

## ✨ Features

- 🎙️ **Voice Recognition** - Natural speech-to-text using Web Speech API
- 🤖 **AI-Powered Responses** - Intelligent conversations powered by Claude AI
- 💬 **Conversation Memory** - Maintains context throughout your chat
- 🔊 **Text-to-Speech** - AI responses are spoken back to you
- 🎨 **Beautiful UI** - Modern, glassmorphic design with smooth animations
- 🔐 **Secure Authentication** - Google sign-in powered by Clerk
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ⚡ **Real-time Processing** - Instant responses with live captions

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Authentication:** Clerk 5.59.2
- **Icons:** Lucide React 0.562.0
- **Animations:** Framer Motion 12.23.26
- **HTTP Client:** Axios 1.13.2
- **AI Model:** Claude Sonnet 4 (Anthropic API)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Clerk Account** - [Sign up here](https://clerk.com)
- **Modern Browser** - Chrome, Edge, or Safari (for Speech API support)

## 🚀 Installation

1. **Clone the repository**
```bash
   git clone <your-repo-url>
   cd my-project
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

   Get your Clerk keys from: https://dashboard.clerk.com

4. **Run the development server**
```bash
   npm run dev
```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for authentication | ✅ Yes |

### How to get Clerk Keys:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application or select existing one
3. Go to **API Keys** section
4. Copy your **Publishable Key**
5. Paste it in your `.env` file

## 📁 Project Structure
```
my-project/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── AgentSelector.jsx
│   │   ├── GlassCard.jsx
│   │   └── VoiceWave.jsx
│   ├── pages/             # Page components
│   │   └── Dashboard.jsx
│   ├── App.jsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── .env                   # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Usage

1. **Sign In**
   - Click "Continue with Google"
   - Authorize the application

2. **Start Voice Interaction**
   - Click "Start Speaking" button
   - Allow microphone access when prompted
   - Speak your question or command

3. **Live Captions**
   - See real-time transcription as you speak
   - Watch AI generate intelligent responses

4. **Voice Output**
   - Listen to AI responses spoken back to you
   - Adjust your browser's volume as needed

## 🎤 Supported Commands

The AI assistant can help with:

- ✅ General questions and conversations
- ✅ Math calculations
- ✅ Information lookup
- ✅ Creative writing
- ✅ Code explanations
- ✅ Jokes and entertainment
- ✅ Current time/date
- ✅ And much more!

## 🌐 Browser Compatibility

| Feature | Chrome | Edge | Safari | Firefox |
|---------|--------|------|--------|---------|
| Voice Recognition | ✅ | ✅ | ✅ | ❌ |
| Text-to-Speech | ✅ | ✅ | ✅ | ✅ |
| UI/UX | ✅ | ✅ | ✅ | ✅ |

**Note:** Voice recognition works best in Chrome, Edge, and Safari.

## 🐛 Troubleshooting

### Microphone Not Working
- Check browser permissions
- Ensure microphone is connected
- Try refreshing the page

### Network Errors
- Check internet connection
- Disable VPN/Proxy temporarily
- Wait 30 seconds between attempts

### Authentication Issues
- Verify `.env` file exists
- Check Clerk keys are correct
- Clear browser cache

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Anthropic](https://anthropic.com) - Claude AI API
- [Clerk](https://clerk.com) - Authentication
- [Lucide](https://lucide.dev) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vite](https://vitejs.dev) - Build tool

## 📧 Contact

For questions or support, please open an issue or contact the maintainer.

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] Voice customization (pitch, rate, voice selection)
- [ ] Export conversation history
- [ ] Mobile app version
- [ ] Offline mode
- [ ] Custom wake word
- [ ] Integration with calendar/reminders
- [ ] Plugin system for extended functionality

---

**Built with ❤️ using React and Claude AI**