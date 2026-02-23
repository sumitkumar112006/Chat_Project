# Chat Project - AI Chatbot

A full-stack chat application using React and the Gemini API, with a secure backend server.

## ✨ Features
- 🤖 AI-powered responses using Google Gemini
- 🔒 Secure API key handling (backend only)
- 💬 Real-time chat interface
- 🎨 Tailwind CSS styling
- 🌐 Easy cloud deployment

## 📋 Prerequisites
- Node.js 16+ installed
- Git account
- Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Railway account (free at [railway.app](https://railway.app))

---

## 💻 Local Development

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd Chat_Project
npm install
```

### 2. Setup Environment Variables
Create `.env` file in root directory:
```
GEMINI_API_KEY=your_actual_api_key_here
VITE_API_BASE_URL=http://localhost:3001
```

### 3. Run Locally
**Option A: Both servers together (recommended)**
```bash
npm run dev:both
```

**Option B: Run separately in different terminals**
```bash
# Terminal 1 - Frontend (port 5173)
npm run dev

# Terminal 2 - Backend (port 3001)  
npm run dev:server
```

Visit `http://localhost:5173` in browser

---

## 🚀 Deploy to Cloud (Railway - 2 minutes)

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial chat project"
git remote add origin https://github.com/YOUR_USERNAME/Chat_Project.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Railway
1. Go to [railway.app](https://railway.app)
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your `Chat_Project` repo
4. Railway auto-detects Node.js

### Step 3: Add API Key
1. In Railway dashboard → Your Project
2. Click **Variables** tab
3. Add: `GEMINI_API_KEY=your_actual_api_key`
4. Railway auto-builds and deploys

### Step 4: Get Your Public URL
Once deployment completes, Railway shows your URL like:
```
https://chat-project-app.railway.app
```

**Share this URL with friends!** 🎉

---

## 📁 Project Structure
```
├── src/
│   ├── App.jsx
│   ├── constants.js
│   ├── components/
│   └── App.css
├── server.js          (Backend server)
├── package.json       (Dependencies)
├── .env              (Your API keys - don't commit)
└── .env.example      (Template)
```

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Server running on port 3001" error | Make sure port 3001 is free, or change PORT in server.js |
| API key not working | Verify key is valid at [makersuite.google.com](https://makersuite.google.com/app/apikey) |
| Friends can't access deployed URL | Check Railway dashboard - app should say "running" with green status |
| "Make sure server is running" | Backend needs to be running; use `npm run dev:both` locally |

---

## 🌍 Other Deployment Options
- **Render.com** - Free tier, auto-deploy from GitHub
- **Fly.io** - Great for Node.js apps
- **Vercel** (frontend) + **Railway** (backend) - Separate deployment

---

## 📝 Environment Variables Needed

**Production (Railway):**
- `GEMINI_API_KEY` - Your Google API key
- `NODE_ENV=production` (optional, Railway sets this)

**Local Development:**
- `GEMINI_API_KEY` - Your Google API key
- `VITE_API_BASE_URL` - Should be `http://localhost:3001`

---

## 🎯 Next Steps
1. Test locally with `npm run dev:both`
2. Push to GitHub
3. Deploy on Railway
4. Share the public URL with friends!

---

**Need help?**
- Railway docs: https://docs.railway.app
- React guide: https://react.dev
- Express guide: https://expressjs.com
