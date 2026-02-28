# 🚀 Vercel Setup Guide - Step by Step

This guide will walk you through deploying your frontend to Vercel.

---

## Prerequisites

Before starting, make sure you have:
- ✅ Your GitHub repository: https://github.com/hkrepo007/kum
- ✅ Your Render backend URL (from previous step)
  - Example: `https://kerala-scheme-backend.onrender.com`

---

## Step 1: Create Vercel Account

### 1.1 Go to Vercel
- Open your browser
- Visit: **https://vercel.com/**

### 1.2 Sign Up
- Click **"Start Deploying"** or **"Sign Up"** button
- Click **"Continue with GitHub"**
- This automatically connects your repositories

### 1.3 Authorize Vercel
- GitHub will ask you to authorize Vercel
- Click **"Authorize Vercel"**
- You may need to enter your GitHub password

✅ **You're now logged into Vercel!**

---

## Step 2: Import Your Project

### 2.1 Start New Project
- You'll see the Vercel Dashboard
- Click **"Add New..."** button (top right)
- Select **"Project"** from the dropdown

### 2.2 Import Repository
You'll see a list of your GitHub repositories.

**Option A: If you see your repository**
- Find **"hkrepo007/kum"** in the list
- Click **"Import"** button next to it

**Option B: If you don't see it**
- Click **"Adjust GitHub App Permissions"** link
- Select which repositories Vercel can access
- Choose "All repositories" or select "hkrepo007/kum"
- Click **"Save"**
- Go back and you should see it now

---

## Step 3: Configure Your Project

Now you'll see a configuration screen.

### 3.1 Project Settings

**Project Name:**
```
kum
```
(Vercel auto-generates this from your repo name)

You can change it to:
```
kerala-scheme-ai
```
(This will be part of your URL)

**Framework Preset:**
```
Next.js
```
✅ Should be **auto-detected** - don't change it!

### 3.2 Root Directory

**IMPORTANT**: Click **"Edit"** next to Root Directory

Set it to:
```
frontend-nextjs
```

⚠️ **CRITICAL**: This tells Vercel where your Next.js app is!

### 3.3 Build Settings (Usually Auto-Detected)

These should be automatically filled:

**Build Command:**
```
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```
npm install
```

✅ **Don't change these unless you know what you're doing!**

---

## Step 4: Add Environment Variables

This is crucial for connecting to your backend!

### 4.1 Expand Environment Variables Section

Click on **"Environment Variables"** to expand it

### 4.2 Add Backend URL

**Variable 1: Backend API URL**

- **Key (Name):** `NEXT_PUBLIC_API_URL`
- **Value:** Your Render backend URL

Example:
```
Key: NEXT_PUBLIC_API_URL
Value: https://kerala-scheme-backend.onrender.com
```

⚠️ **IMPORTANT**: 
- Use YOUR actual Render URL (from previous step)
- NO trailing slash at the end
- Must start with `https://`

### 4.3 Select Environment

Make sure it's available for:
- ✅ Production
- ✅ Preview
- ✅ Development

(All three should be checked)

---

## Step 5: Deploy!

### 5.1 Start Deployment
- Double-check all settings:
  - Root Directory: `frontend-nextjs` ✓
  - Environment Variable: `NEXT_PUBLIC_API_URL` ✓
- Click the big **"Deploy"** button

### 5.2 Watch the Build
You'll see a build log with animated graphics:

```
Building...
▲ Vercel
⠋ Installing dependencies...
⠋ Building application...
⠋ Optimizing production build...
✓ Build completed!
```

This takes **2-5 minutes**.

### 5.3 Deployment Complete
When you see:
```
🎉 Congratulations! Your project has been deployed!
```

✅ **Your frontend is live!**

---

## Step 6: Visit Your Live Site

### 6.1 Get Your URL
Vercel will show you:
```
https://kum.vercel.app
```

Or something like:
```
https://kerala-scheme-ai.vercel.app
```

### 6.2 Click "Visit"
- Click the **"Visit"** button
- Or click on the URL
- Your site will open in a new tab!

---

## Step 7: Test Your Application

### 7.1 Test Homepage
- You should see the Kerala SchemeAI homepage
- Green government-style design
- Registration form

### 7.2 Test Registration
Fill in the form:
- **Name:** Test User
- **Age:** 25
- **Gender:** Male
- **Income:** 50000
- **District:** Thiruvananthapuram
- **Education:** Graduate
- **Employment:** Unemployed

Click **"Find My Schemes"**

### 7.3 Wait for Results
⚠️ **First request takes 30-60 seconds** (backend waking up from sleep)

You should see:
- List of eligible schemes
- Scheme cards with details
- "View Roadmap" buttons

### 7.4 Test Other Pages
- Click **"Schemes"** in navigation
- Test search functionality
- Try category filters
- Click "View Roadmap" on any scheme

✅ **If everything works, you're done!**

---

## Step 8: Get Your URLs

### 8.1 Your Live URLs

**Frontend (Share this!):**
```
https://your-project.vercel.app
```

**Backend (For reference):**
```
https://kerala-scheme-backend.onrender.com
```

### 8.2 Share Your App
Send the frontend URL to anyone!
- Friends
- Colleagues
- Portfolio
- Social media

---

## Common Issues & Solutions

### Issue 1: "Failed to compile"
**Solution:**
- Check that Root Directory is `frontend-nextjs`
- View build logs for specific error
- Make sure all dependencies are in package.json

### Issue 2: "API calls failing"
**Solution:**
- Check NEXT_PUBLIC_API_URL is set correctly
- Verify backend is running (visit /health endpoint)
- Check browser console for errors
- Make sure backend URL has no trailing slash

### Issue 3: "Environment variable not found"
**Solution:**
- Go to Project Settings → Environment Variables
- Add NEXT_PUBLIC_API_URL
- Redeploy (Settings → Deployments → Redeploy)

### Issue 4: "Backend not responding"
**Solution:**
- Wait 60 seconds (backend waking from sleep)
- Check backend URL is correct
- Test backend /health endpoint directly

### Issue 5: Build succeeds but site shows errors
**Solution:**
- Check browser console (F12)
- Verify NEXT_PUBLIC_API_URL is correct
- Check CORS settings in backend

---

## Vercel Dashboard Features

### Useful Tabs:
- **Deployments**: See all deployments
- **Analytics**: View site traffic (free!)
- **Logs**: View runtime logs
- **Settings**: Change configuration
- **Domains**: Add custom domain

### Free Tier Features:
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Preview deployments
- ✅ Analytics

---

## Updating Your Frontend

When you make changes:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update frontend"
   git push
   ```

2. Vercel automatically redeploys! 🎉

You'll get a notification and can see the deployment in your dashboard.

---

## Preview Deployments

Every time you push to GitHub:
- Vercel creates a preview deployment
- You get a unique URL to test
- Production stays unchanged until you approve

This is great for testing changes!

---

## Custom Domain (Optional)

### Add Your Own Domain

1. Go to Project Settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `kerala-schemes.com`)
4. Follow DNS instructions
5. Wait for verification (5-10 minutes)

Vercel provides free SSL certificates!

---

## Performance Tips

### Your site is already optimized with:
- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ Global CDN
- ✅ Compression
- ✅ Caching

### To improve further:
- Use Next.js Image component
- Implement lazy loading
- Optimize images before upload
- Use static generation where possible

---

## Monitoring

### Built-in Analytics (Free!)
- Go to Analytics tab
- See page views
- Track performance
- View top pages

### Real User Monitoring
- Vercel Speed Insights (free)
- Shows actual user experience
- Identifies slow pages

---

## Upgrading (Optional)

**Pro Plan: $20/month**
- More bandwidth
- Advanced analytics
- Team features
- Priority support

**For most projects, Free tier is perfect!**

---

## Environment Variables Management

### View/Edit Variables
1. Go to Project Settings
2. Click "Environment Variables"
3. Add/Edit/Delete variables
4. Redeploy for changes to take effect

### Different Environments
- **Production**: Live site
- **Preview**: Pull request previews
- **Development**: Local development

You can set different values for each!

---

## Troubleshooting Checklist

- [ ] Root Directory set to `frontend-nextjs`
- [ ] NEXT_PUBLIC_API_URL environment variable added
- [ ] Backend URL is correct (no trailing slash)
- [ ] Backend is running (test /health endpoint)
- [ ] Build completed successfully
- [ ] No errors in browser console

---

## Support

### Vercel Documentation
- Docs: https://vercel.com/docs
- Status: https://vercel.com/status
- Community: https://github.com/vercel/next.js/discussions

### Your Project
- Dashboard: https://vercel.com/dashboard
- Project URL: https://your-project.vercel.app

---

## Summary Checklist

- [x] Created Vercel account
- [x] Imported GitHub repository
- [x] Set root directory to `frontend-nextjs`
- [x] Added NEXT_PUBLIC_API_URL environment variable
- [x] Deployed successfully
- [x] Tested registration form
- [x] Tested scheme search
- [x] Verified roadmap feature works

**✅ Frontend deployment complete!**

---

## 🎉 Congratulations!

Your Kerala SchemeAI is now live!

**Share your app:**
```
https://your-project.vercel.app
```

**What you've built:**
- ✅ AI-powered scheme eligibility checker
- ✅ 50+ Kerala government schemes
- ✅ Real-time search and filtering
- ✅ Application roadmaps
- ✅ Professional government-style UI
- ✅ Mobile responsive
- ✅ Deployed and accessible worldwide

**Total cost: $0/month** 💰

---

**Need help?** Check the deployment logs in Vercel dashboard or refer to DEPLOYMENT_GUIDE.md for more details.
