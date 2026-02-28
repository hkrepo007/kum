# Troubleshooting Guide

## Common Issues and Solutions

### 1. Backend Won't Start

#### Error: "OPENAI_API_KEY not found"
**Solution:**
1. Create a `.env` file in the `backend/` directory
2. Add your OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```
3. Get your API key from: https://platform.openai.com/api-keys

#### Error: "ModuleNotFoundError"
**Solution:**
```bash
cd backend
pip install -r requirements.txt
```

#### Error: "Port 5000 already in use"
**Solution:**
- Windows: `netstat -ano | findstr :5000` then `taskkill /PID <PID> /F`
- Change port in `backend/app.py`: `app.run(debug=True, port=5001)`

### 2. Frontend Won't Start

#### Error: "Cannot find module"
**Solution:**
```bash
cd frontend-nextjs
npm install
```

#### Error: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
# Windows: netstat -ano | findstr :3000
# Then: taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### 3. CORS Errors

#### Error: "Access-Control-Allow-Origin"
**Solution:**
1. Ensure backend is running on port 5000
2. Check CORS configuration in `backend/app.py`
3. Verify frontend is accessing `http://localhost:5000` (not 127.0.0.1)

### 4. API Connection Failed

#### Error: "Failed to connect to server"
**Checklist:**
- [ ] Backend is running (`http://localhost:5000/health` should return `{"status": "healthy"}`)
- [ ] No firewall blocking port 5000
- [ ] OPENAI_API_KEY is set correctly
- [ ] Check browser console for detailed error messages

**Test backend manually:**
```bash
# Test health endpoint
curl http://localhost:5000/health

# Test registration endpoint
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","age":25,"gender":"Male","income":300000,"district":"Ernakulam"}'
```

### 5. OpenAI API Errors

#### Error: "Rate limit exceeded"
**Solution:**
- Wait a few minutes before retrying
- Check your OpenAI usage limits
- Consider upgrading your OpenAI plan

#### Error: "Invalid API key"
**Solution:**
1. Verify your API key at https://platform.openai.com/api-keys
2. Ensure no extra spaces in `.env` file
3. Restart the backend server after updating `.env`

### 6. Scheme Details Not Loading

#### Issue: Clicking scheme card doesn't show details
**Possible causes:**
1. Web scraping blocked by Kerala government site
2. Network connectivity issues
3. Site structure changed

**Solution:**
- The app will fall back to AI-generated details
- Check browser console for errors
- Verify internet connection

### 7. TypeScript Errors in Frontend

#### Error: "Cannot find module '@/...'"
**Solution:**
```bash
cd frontend-nextjs
npm install
# Restart the dev server
```

#### Error: Type errors
**Solution:**
- Check `tsconfig.json` is present
- Run `npm run build` to see all type errors
- Ensure all imports are correct

## Testing the Setup

### 1. Test Backend
```bash
cd backend
python app.py
```
Expected output:
```
Starting Flask server on http://localhost:5000
Make sure OPENAI_API_KEY is set in .env file
 * Running on http://0.0.0.0:5000
```

### 2. Test Frontend
```bash
cd frontend-nextjs
npm run dev
```
Expected output:
```
- ready started server on 0.0.0.0:3000
- Local: http://localhost:3000
```

### 3. Test API Connection
Open browser console (F12) and check for:
- No CORS errors
- Successful API calls to `http://localhost:5000`
- Response data in Network tab

## Environment Variables

### Backend (.env)
```
OPENAI_API_KEY=sk-your-key-here
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Getting Help

If issues persist:
1. Check browser console (F12 → Console tab)
2. Check backend terminal for error messages
3. Verify all dependencies are installed
4. Ensure Python 3.8+ and Node.js 18+ are installed
5. Try restarting both servers

## Quick Reset

If everything is broken:
```bash
# Backend
cd backend
rm -rf venv
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt

# Frontend
cd frontend-nextjs
rm -rf node_modules .next
npm install
```
