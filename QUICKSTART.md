# Quick Start Guide

Get the Kerala Schemes Finder running in 5 minutes!

## Step 1: Get an OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

## Step 2: Setup (Choose your method)

### Method A: Automated Setup (Recommended)

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### Method B: Manual Setup

**Backend:**
```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
```

**Frontend:**
```bash
cd frontend-nextjs
npm install
```

## Step 3: Configure API Key

Edit `backend/.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-key-here
```

## Step 4: Start the Servers

**Terminal 1 - Backend:**
```bash
cd backend
python app.py
```

Wait for: `Running on http://0.0.0.0:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend-nextjs
npm run dev
```

Wait for: `Local: http://localhost:3000`

## Step 5: Test It!

1. Open http://localhost:3000 in your browser
2. Fill in the registration form
3. Click "Find My Schemes"
4. View your eligible schemes!

## Verify Everything Works

Run the test script:
```bash
python test-connection.py
```

All tests should pass ✓

## Troubleshooting

### Backend won't start?
- Check if Python 3.8+ is installed: `python --version`
- Verify OpenAI API key is in `backend/.env`
- Check if port 5000 is available

### Frontend won't start?
- Check if Node.js 18+ is installed: `node --version`
- Run `npm install` in `frontend-nextjs/`
- Check if port 3000 is available

### Can't connect?
- Ensure both servers are running
- Check http://localhost:5000/health returns `{"status": "healthy"}`
- Check browser console (F12) for errors

### Still stuck?
See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions.

## What's Next?

- Customize the schemes in `backend/agent.py`
- Modify the UI in `frontend-nextjs/components/`
- Add more Kerala districts or categories
- Deploy to production (Vercel for frontend, Railway/Render for backend)

## Project Structure

```
kerala-schemes-finder/
├── backend/              # Flask API + AI Agent
│   ├── app.py           # API endpoints
│   ├── agent.py         # AI logic
│   └── .env             # Your API key here
├── frontend-nextjs/     # Next.js UI
│   ├── app/             # Pages
│   ├── components/      # React components
│   └── lib/             # API utilities
└── README.md            # Full documentation
```

## Quick Commands

```bash
# Start backend
cd backend && python app.py

# Start frontend
cd frontend-nextjs && npm run dev

# Test connection
python test-connection.py

# Build for production
cd frontend-nextjs && npm run build
```

Happy coding! 🚀
