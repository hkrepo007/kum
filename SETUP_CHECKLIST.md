# Setup Checklist

Use this checklist to ensure everything is configured correctly.

## Prerequisites

- [ ] Python 3.8 or higher installed
  - Check: `python --version` or `python3 --version`
- [ ] Node.js 18 or higher installed
  - Check: `node --version`
- [ ] npm installed
  - Check: `npm --version`
- [ ] OpenAI API account created
  - Sign up at: https://platform.openai.com/

## Backend Setup

- [ ] Navigate to `backend/` directory
- [ ] Create virtual environment
  - Windows: `python -m venv venv`
  - Linux/Mac: `python3 -m venv venv`
- [ ] Activate virtual environment
  - Windows: `venv\Scripts\activate`
  - Linux/Mac: `source venv/bin/activate`
- [ ] Install Python dependencies
  - Run: `pip install -r requirements.txt`
- [ ] Create `.env` file from `.env.example`
  - Run: `cp .env.example .env` (or copy manually)
- [ ] Add OpenAI API key to `.env`
  - Format: `OPENAI_API_KEY=sk-your-key-here`
- [ ] Test backend starts without errors
  - Run: `python app.py`
  - Should see: "Starting Flask server on http://localhost:5000"

## Frontend Setup

- [ ] Navigate to `frontend-nextjs/` directory
- [ ] Install Node.js dependencies
  - Run: `npm install`
- [ ] (Optional) Create `.env.local` if using custom API URL
  - Run: `cp .env.local.example .env.local`
- [ ] Test frontend starts without errors
  - Run: `npm run dev`
  - Should see: "Local: http://localhost:3000"

## Verification

- [ ] Backend health check works
  - Open: http://localhost:5000/health
  - Should return: `{"status": "healthy", "message": "Backend is running"}`
- [ ] Frontend loads in browser
  - Open: http://localhost:3000
  - Should see registration form
- [ ] Run connection test
  - Run: `python test-connection.py`
  - All tests should pass ✓
- [ ] Test registration flow
  - Fill form on http://localhost:3000
  - Click "Find My Schemes"
  - Should see eligible schemes
- [ ] Test scheme details
  - Click on a scheme card
  - Should see detailed information

## Common Issues

### Backend Issues

- [ ] If "OPENAI_API_KEY not found":
  - Verify `.env` file exists in `backend/` directory
  - Check API key format (should start with `sk-`)
  - Restart backend server after adding key

- [ ] If "ModuleNotFoundError":
  - Ensure virtual environment is activated
  - Run `pip install -r requirements.txt` again

- [ ] If "Port 5000 already in use":
  - Kill process using port 5000
  - Or change port in `app.py`

### Frontend Issues

- [ ] If "Cannot find module":
  - Delete `node_modules/` and `.next/`
  - Run `npm install` again

- [ ] If "Port 3000 already in use":
  - Kill process using port 3000
  - Or run: `npm run dev -- -p 3001`

### Connection Issues

- [ ] If "Failed to connect to server":
  - Verify backend is running on port 5000
  - Check firewall settings
  - Try accessing http://localhost:5000/health directly

- [ ] If CORS errors in browser console:
  - Ensure using `localhost` not `127.0.0.1`
  - Check CORS configuration in `backend/app.py`
  - Restart both servers

## Production Checklist (Optional)

- [ ] Update CORS origins in `backend/app.py`
- [ ] Set `NEXT_PUBLIC_API_URL` in frontend
- [ ] Use production WSGI server (Gunicorn)
- [ ] Enable HTTPS
- [ ] Set up environment variables securely
- [ ] Configure rate limiting
- [ ] Set up monitoring and logging
- [ ] Test on production domain

## Quick Commands Reference

### Backend
```bash
# Start backend
cd backend
python app.py

# With virtual environment
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
python app.py
```

### Frontend
```bash
# Start frontend
cd frontend-nextjs
npm run dev

# Build for production
npm run build
npm start
```

### Testing
```bash
# Test connection
python test-connection.py

# Test health endpoint
curl http://localhost:5000/health
```

## Need Help?

- [ ] Check [QUICKSTART.md](QUICKSTART.md) for step-by-step guide
- [ ] Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for solutions
- [ ] Check [README.md](README.md) for full documentation
- [ ] Check browser console (F12) for frontend errors
- [ ] Check backend terminal for server errors

## Success Criteria

✓ Backend running on port 5000
✓ Frontend running on port 3000
✓ Health endpoint returns success
✓ Can submit registration form
✓ AI returns eligible schemes
✓ Can view scheme details
✓ No errors in browser console
✓ No errors in backend terminal

---

**Status**: [ ] Setup Complete | [ ] In Progress | [ ] Not Started

**Date**: _______________

**Notes**: 
_______________________________________________________________________
_______________________________________________________________________
_______________________________________________________________________
