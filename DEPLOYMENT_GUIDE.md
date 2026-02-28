# Deployment Guide - Kerala SchemeAI

This guide will help you deploy your application to production for free.

## Architecture
- **Frontend**: Vercel (Next.js)
- **Backend**: Render (Flask + Python)

---

## Part 1: Deploy Backend to Render

### Step 1: Create Render Account
1. Go to https://render.com/
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### Step 2: Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `hkrepo007/kum`
3. Configure the service:
   - **Name**: `kerala-scheme-backend`
   - **Region**: Choose closest to you (Singapore for India)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Instance Type**: `Free`

### Step 3: Add Environment Variables
In the "Environment" section, add:
- **Key**: `HUGGINGFACE_API_KEY`
- **Value**: Your Hugging Face API key (get from https://huggingface.co/settings/tokens)

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait 5-10 minutes for deployment
3. Copy your backend URL (e.g., `https://kerala-scheme-backend.onrender.com`)

**Note**: Free tier sleeps after 15 minutes of inactivity. First request may take 30-60 seconds.

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Create Vercel Account
1. Go to https://vercel.com/
2. Sign up with your GitHub account
3. Authorize Vercel to access your repositories

### Step 2: Import Project
1. Click "Add New..." → "Project"
2. Import `hkrepo007/kum` repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend-nextjs`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variable
In "Environment Variables" section, add:
- **Key**: `NEXT_PUBLIC_API_URL`
- **Value**: Your Render backend URL (e.g., `https://kerala-scheme-backend.onrender.com`)

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for deployment
3. Your site will be live at `https://your-project.vercel.app`

---

## Part 3: Update Frontend API Configuration

After deployment, you need to update the API URL in your frontend code.

### Update `frontend-nextjs/lib/api.ts`:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
```

This will automatically use the production backend URL when deployed.

---

## Part 4: Update CORS in Backend

The backend is already configured to accept requests from Vercel domains:

```python
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "https://*.vercel.app"],
        ...
    }
})
```

---

## Testing Your Deployment

### Test Backend
Visit: `https://your-backend-url.onrender.com/health`

Should return:
```json
{
  "status": "healthy",
  "message": "Backend is running"
}
```

### Test Frontend
Visit: `https://your-project.vercel.app`

The application should load and work fully!

---

## Troubleshooting

### Backend Issues

**Problem**: Backend not starting
- Check Render logs for errors
- Verify `HUGGINGFACE_API_KEY` is set correctly
- Ensure `requirements.txt` has all dependencies

**Problem**: CORS errors
- Add your Vercel domain to CORS origins in `backend/app.py`
- Redeploy backend

### Frontend Issues

**Problem**: API calls failing
- Verify `NEXT_PUBLIC_API_URL` environment variable is set
- Check backend is running (visit `/health` endpoint)
- Check browser console for errors

**Problem**: Build failing
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no errors

---

## Cost Breakdown

- **Vercel**: Free (100GB bandwidth, unlimited projects)
- **Render**: Free (750 hours/month, sleeps after inactivity)
- **Hugging Face API**: Free (rate limited)

**Total Cost**: $0/month 🎉

---

## Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Render
1. Go to Service Settings → Custom Domain
2. Add your domain
3. Update DNS records

---

## Monitoring

### Vercel Analytics
- Automatically enabled
- View at: Project → Analytics

### Render Logs
- View at: Service → Logs
- Monitor errors and requests

---

## Updating Your Deployment

When you make changes:

```bash
git add .
git commit -m "Your changes"
git push
```

Both Vercel and Render will automatically redeploy! 🚀

---

## Alternative Deployment Options

### Backend Alternatives
- **Railway**: Similar to Render, free tier available
- **PythonAnywhere**: Free tier with limitations
- **Heroku**: No longer has free tier

### Frontend Alternatives
- **Netlify**: Similar to Vercel
- **GitHub Pages**: Static only (won't work for Next.js)
- **Cloudflare Pages**: Good alternative

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- Next.js Docs: https://nextjs.org/docs
- Flask Docs: https://flask.palletsprojects.com/

---

**Your application is now live and accessible worldwide!** 🌍
