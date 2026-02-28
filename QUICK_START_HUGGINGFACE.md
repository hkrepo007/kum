# 🚀 Quick Start with Hugging Face (FREE!)

## ✨ Good News!
This project now uses **Hugging Face API** which is **100% FREE** - no credit card needed!

---

## 📋 What You Need (5 Minutes)

1. ✅ Python 3.8+ installed
2. ✅ Node.js 18+ installed  
3. ✅ Free Hugging Face account (we'll create this)

---

## Step 1: Get FREE Hugging Face API Key (2 minutes)

### 1.1 Create Account
Go to: **https://huggingface.co/join**

- Click "Sign up"
- Enter your email
- Create password
- Verify email
- **No credit card required!**

### 1.2 Generate API Token
Go to: **https://huggingface.co/settings/tokens**

1. Click "New token"
2. Name: `kerala-schemes`
3. Role: Select "read"
4. Click "Generate a token"
5. **Copy the token** (looks like: `hf_abc123...`)

✅ **Done!** You now have a FREE API key!

---

## Step 2: Install Dependencies (2 minutes)

### Backend Dependencies
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4\backend
pip install -r requirements.txt
```

This installs:
- Flask
- Hugging Face Hub
- BeautifulSoup4
- Other required packages

### Frontend Dependencies
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4\frontend-nextjs
npm install
```

---

## Step 3: Add API Key (1 minute)

### Create .env file
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4\backend
notepad .env
```

### Add this line:
```
HUGGINGFACE_API_KEY=hf_your_token_here
```

Replace `hf_your_token_here` with your actual token from Step 1.

**Save and close** the file.

---

## Step 4: Run the Project (30 seconds)

### Terminal 1: Start Backend
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4\backend
python app.py
```

**Wait for:**
```
✓ Running on http://localhost:5000
```

### Terminal 2: Start Frontend
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4\frontend-nextjs
npm run dev
```

**Wait for:**
```
✓ Local: http://localhost:3000
```

---

## Step 5: Use the App! 🎉

Open browser: **http://localhost:3000**

1. Fill in the registration form
2. Click "Find My Schemes"
3. See eligible Kerala government schemes!
4. Click scheme cards for details

---

## ✅ Verify It Works

### Test 1: Backend Health
Open: http://localhost:5000/health

Should see:
```json
{"status": "healthy", "message": "Backend is running"}
```

### Test 2: Full Test
```bash
cd C:\Users\vahar\OneDrive\Desktop\pr\ksum4
python test-connection.py
```

All tests should pass ✓

---

## 🎯 Complete Checklist

- [ ] Created Hugging Face account (free)
- [ ] Got API token from settings
- [ ] Installed backend dependencies (`pip install -r requirements.txt`)
- [ ] Installed frontend dependencies (`npm install`)
- [ ] Created `backend/.env` file
- [ ] Added `HUGGINGFACE_API_KEY=hf_...` to .env
- [ ] Started backend (`python app.py`)
- [ ] Started frontend (`npm run dev`)
- [ ] Opened http://localhost:3000
- [ ] Tested the app

---

## 💡 Why Hugging Face?

| Feature | Hugging Face | OpenAI |
|---------|--------------|--------|
| Cost | **FREE** | Paid ($$$) |
| Credit Card | **Not needed** | Required |
| Setup Time | 2 minutes | 5+ minutes |
| Quality | Very Good | Excellent |
| Rate Limits | 1000/hour free | Pay per use |

---

## 🆘 Common Issues

### "HUGGINGFACE_API_KEY not found"
**Fix:** 
- Make sure `.env` file is in `backend/` folder
- Check the key starts with `hf_`
- No spaces around `=`

### "Model is loading" (first request)
**Fix:** 
- Wait 20-30 seconds
- Model needs to "wake up" on first use
- Next requests will be faster

### "pip is not recognized"
**Fix:**
```bash
python -m pip install -r requirements.txt
```

### "npm is not recognized"
**Fix:** Install Node.js from https://nodejs.org/

---

## 📚 More Help

- **Hugging Face Setup:** [HUGGINGFACE_SETUP.md](HUGGINGFACE_SETUP.md)
- **Migration Guide:** [MIGRATION_TO_HUGGINGFACE.md](MIGRATION_TO_HUGGINGFACE.md)
- **Troubleshooting:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Full Docs:** [README.md](README.md)

---

## 🎉 You're Ready!

Your FREE AI-powered Kerala Schemes Finder is ready to use!

**Get your token:** https://huggingface.co/settings/tokens

**Questions?** Check the documentation files above.

---

**Happy coding!** 🚀
