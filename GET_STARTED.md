# 🚀 Get Started with Kerala Schemes Finder

Welcome! This guide will help you get the application running quickly.

## 📋 What You Need

1. **Python 3.8+** - [Download](https://www.python.org/downloads/)
2. **Node.js 18+** - [Download](https://nodejs.org/)
3. **OpenAI API Key** - [Get one](https://platform.openai.com/api-keys)

## ⚡ Quick Setup (5 minutes)

### Step 1: Get the Code
You already have it! You're in the project directory.

### Step 2: Run Setup Script

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

This will:
- Install all Python dependencies
- Install all Node.js dependencies
- Create configuration files

### Step 3: Add Your API Key

1. Open `backend/.env` in a text editor
2. Replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-proj-abc123...
   ```
3. Save the file

### Step 4: Start the Application

**Open TWO terminal windows:**

**Terminal 1 - Backend:**
```bash
cd backend
python app.py
```
Wait for: `✓ Running on http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend-nextjs
npm run dev
```
Wait for: `✓ Local: http://localhost:3000`

### Step 5: Open in Browser

Go to: **http://localhost:3000**

You should see the registration form! 🎉

## 🧪 Test It Works

1. Fill in the form with test data:
   - Name: Test User
   - Age: 25
   - Gender: Male
   - Income: 300000
   - District: Ernakulam

2. Click "Find My Schemes"

3. You should see a list of eligible schemes

4. Click on any scheme to see details

## ✅ Verify Everything

Run the test script:
```bash
python test-connection.py
```

All three tests should pass:
- ✓ Health Check: PASS
- ✓ Registration: PASS
- ✓ Scheme Details: PASS

## 📚 Next Steps

### Learn More
- Read [README.md](README.md) for full documentation
- Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for architecture details

### Customize
- Modify AI prompts in `backend/agent.py`
- Update UI components in `frontend-nextjs/components/`
- Add more districts or categories

### Deploy
- Frontend: Deploy to [Vercel](https://vercel.com)
- Backend: Deploy to [Railway](https://railway.app) or [Render](https://render.com)

## 🆘 Something Wrong?

### Backend won't start?
```bash
# Check Python version
python --version

# Should be 3.8 or higher
# If not, install Python 3.8+

# Reinstall dependencies
cd backend
pip install -r requirements.txt
```

### Frontend won't start?
```bash
# Check Node version
node --version

# Should be 18 or higher
# If not, install Node.js 18+

# Reinstall dependencies
cd frontend-nextjs
rm -rf node_modules
npm install
```

### Can't connect?
1. Check backend is running: http://localhost:5000/health
2. Check frontend is running: http://localhost:3000
3. Look for errors in terminal windows
4. Check browser console (F12)

### Still stuck?
See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions.

## 🎯 Project Structure

```
kerala-schemes-finder/
│
├── 📁 backend/              ← Flask API + AI Agent
│   ├── app.py              ← API endpoints
│   ├── agent.py            ← AI logic
│   └── .env                ← Your API key here!
│
├── 📁 frontend-nextjs/      ← Next.js UI
│   ├── app/                ← Pages
│   ├── components/         ← React components
│   └── lib/                ← API utilities
│
├── 📄 README.md            ← Full documentation
├── 📄 QUICKSTART.md        ← Quick start guide
├── 📄 TROUBLESHOOTING.md   ← Problem solving
└── 📄 setup.bat/sh         ← Setup scripts
```

## 💡 Tips

1. **Keep both terminals open** - You need both backend and frontend running
2. **Check the logs** - Errors will show in the terminal windows
3. **Use the test script** - Run `python test-connection.py` to verify setup
4. **Read the docs** - Check README.md for detailed information

## 🎓 How It Works

1. **User fills form** → Registration data collected
2. **Frontend sends to backend** → API call to Flask server
3. **AI analyzes data** → OpenAI GPT-4 identifies schemes
4. **Web scraping** → Fetches details from Kerala portal
5. **Results displayed** → User sees eligible schemes

## 🔑 Important Files

- `backend/.env` - Your OpenAI API key (REQUIRED)
- `backend/app.py` - API server
- `backend/agent.py` - AI logic
- `frontend-nextjs/app/page.tsx` - Main page
- `frontend-nextjs/components/` - UI components

## 📞 Support

- **Setup issues**: Check [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)
- **Errors**: Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Architecture**: Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## ✨ Features

- 🤖 AI-powered scheme matching
- 🔍 Automatic eligibility analysis
- 📊 Detailed scheme information
- 🌐 Real-time web scraping
- 💻 Modern, responsive UI
- 🔒 Secure API key handling

---

**Ready to start?** Run the setup script and follow the steps above!

**Questions?** Check the documentation files listed above.

**Happy coding!** 🚀
