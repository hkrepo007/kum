# Quick Deployment Checklist ✅

Follow these steps in order to deploy your Kerala SchemeAI application.

---

## Prerequisites
- [ ] GitHub account (you have this ✓)
- [ ] Hugging Face account with API key
- [ ] 30 minutes of time

---

## Step 1: Get Hugging Face API Key (5 minutes)

1. [ ] Go to https://huggingface.co/
2. [ ] Sign up or log in
3. [ ] Go to Settings → Access Tokens
4. [ ] Click "New token"
5. [ ] Name it "Kerala SchemeAI"
6. [ ] Copy the token (starts with `hf_...`)
7. [ ] Save it somewhere safe (you'll need it soon)

---

## Step 2: Deploy Backend to Render (10 minutes)

1. [ ] Go to https://render.com/
2. [ ] Click "Get Started for Free"
3. [ ] Sign up with GitHub
4. [ ] Click "New +" → "Web Service"
5. [ ] Find and select your repository: `hkrepo007/kum`
6. [ ] Fill in these settings:
   - Name: `kerala-scheme-backend`
   - Region: `Singapore` (closest to India)
   - Branch: `main`
   - Root Directory: `backend`
   - Runtime: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python app.py`
   - Instance Type: `Free`

7. [ ] Scroll down to "Environment Variables"
8. [ ] Click "Add Environment Variable"
9. [ ] Add:
   - Key: `HUGGINGFACE_API_KEY`
   - Value: (paste your Hugging Face token from Step 1)

10. [ ] Click "Create Web Service"
11. [ ] Wait 5-10 minutes for deployment
12. [ ] Once deployed, copy your backend URL (looks like: `https://kerala-scheme-backend.onrender.com`)
13. [ ] Test it by visiting: `https://your-backend-url.onrender.com/health`
14. [ ] You should see: `{"status": "healthy", "message": "Backend is running"}`

**✅ Backend is live!**

---

## Step 3: Deploy Frontend to Vercel (10 minutes)

1. [ ] Go to https://vercel.com/
2. [ ] Click "Start Deploying"
3. [ ] Sign up with GitHub
4. [ ] Click "Add New..." → "Project"
5. [ ] Find and import: `hkrepo007/kum`
6. [ ] Configure project:
   - Framework Preset: `Next.js` (auto-detected)
   - Root Directory: `frontend-nextjs`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

7. [ ] Click "Environment Variables" dropdown
8. [ ] Add variable:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: (paste your Render backend URL from Step 2)
   - Example: `https://kerala-scheme-backend.onrender.com`

9. [ ] Click "Deploy"
10. [ ] Wait 2-3 minutes for deployment
11. [ ] Once deployed, click "Visit" to see your live site!

**✅ Frontend is live!**

---

## Step 4: Test Your Live Application (5 minutes)

1. [ ] Visit your Vercel URL (e.g., `https://kum.vercel.app`)
2. [ ] Fill in the registration form with test data:
   - Name: Test User
   - Age: 25
   - Gender: Male
   - Income: 50000
   - District: Thiruvananthapuram
   - Education: Graduate
   - Employment: Unemployed

3. [ ] Click "Find My Schemes"
4. [ ] Wait 10-20 seconds (first request to Render takes time)
5. [ ] You should see eligible schemes!
6. [ ] Click "View Roadmap" on any scheme
7. [ ] Navigate to "Schemes" page and test search
8. [ ] Test category filters

**✅ Everything works!**

---

## Step 5: Share Your Application 🎉

Your application is now live at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://kerala-scheme-backend.onrender.com`

Share the frontend URL with anyone!

---

## Important Notes

### Free Tier Limitations

**Render (Backend)**:
- Sleeps after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- 750 hours/month free (enough for testing)

**Vercel (Frontend)**:
- Always fast, no sleep
- 100GB bandwidth/month
- Unlimited projects

**Hugging Face API**:
- Rate limited (slower responses)
- Free tier available

### Upgrading (Optional)

If you need better performance:
- **Render**: $7/month for always-on backend
- **Vercel**: Free tier is usually enough
- **Hugging Face**: Paid tiers for faster API

---

## Troubleshooting

### Backend not responding
- Wait 60 seconds (it's waking up from sleep)
- Check Render logs for errors
- Verify HUGGINGFACE_API_KEY is set

### Frontend can't connect to backend
- Check NEXT_PUBLIC_API_URL is set correctly in Vercel
- Verify backend /health endpoint works
- Check browser console for CORS errors

### Schemes not loading
- Backend might be sleeping (wait 60 seconds)
- Check Hugging Face API key is valid
- Check Render logs for errors

---

## Next Steps

1. [ ] Add custom domain (optional)
2. [ ] Set up monitoring
3. [ ] Add more schemes to the database
4. [ ] Improve AI prompts for better results
5. [ ] Add user authentication (optional)

---

## Need Help?

- Check `DEPLOYMENT_GUIDE.md` for detailed instructions
- Render Support: https://render.com/docs
- Vercel Support: https://vercel.com/docs
- GitHub Issues: Create an issue in your repo

---

**Congratulations! Your Kerala SchemeAI is now live! 🚀**
