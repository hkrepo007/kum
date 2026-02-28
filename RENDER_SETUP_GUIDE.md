# 🚀 Render Setup Guide - Step by Step

This guide will walk you through deploying your backend to Render with screenshots descriptions.

---

## Prerequisites

Before starting, make sure you have:
- ✅ Your GitHub repository: https://github.com/hkrepo007/kum
- ✅ A Hugging Face API key (get from https://huggingface.co/settings/tokens)

---

## Step 1: Create Render Account

### 1.1 Go to Render
- Open your browser
- Visit: **https://render.com/**

### 1.2 Sign Up
- Click **"Get Started for Free"** button (top right)
- Click **"GitHub"** button to sign up with GitHub
- This is the easiest way - it will automatically connect your repositories

### 1.3 Authorize Render
- GitHub will ask you to authorize Render
- Click **"Authorize Render"**
- You may need to enter your GitHub password

✅ **You're now logged into Render!**

---

## Step 2: Create New Web Service

### 2.1 Start New Service
- You'll see the Render Dashboard
- Click the **"New +"** button (top right)
- Select **"Web Service"** from the dropdown

### 2.2 Connect Repository
You'll see a list of your GitHub repositories.

**Option A: If you see your repository**
- Find **"hkrepo007/kum"** in the list
- Click **"Connect"** button next to it

**Option B: If you don't see it**
- Click **"Configure account"** link
- Select which repositories Render can access
- Choose "All repositories" or select "hkrepo007/kum"
- Click **"Save"**
- Go back and you should see it now

---

## Step 3: Configure Your Service

Now you'll see a configuration form. Fill it out exactly like this:

### 3.1 Basic Settings

**Name:**
```
kerala-scheme-backend
```
(You can choose any name, but this is clear)

**Region:**
```
Singapore
```
(Closest to India for better performance)

**Branch:**
```
main
```
(This is your default branch)

**Root Directory:**
```
backend
```
⚠️ **IMPORTANT**: This tells Render to look in the backend folder

### 3.2 Runtime Settings

**Runtime:**
```
Python 3
```
(Should be auto-detected)

**Build Command:**
```
pip install -r requirements.txt
```
(This installs all Python dependencies)

**Start Command:**
```
python app.py
```
(This starts your Flask server)

### 3.3 Instance Type

**Plan:**
```
Free
```
(Select the Free tier - $0/month)

⚠️ **Note**: Free tier sleeps after 15 minutes of inactivity. First request takes 30-60 seconds to wake up.

---

## Step 4: Add Environment Variables

This is the most important step!

### 4.1 Scroll Down to Environment Variables Section

You'll see a section called **"Environment Variables"**

### 4.2 Add Your Hugging Face API Key

Click **"Add Environment Variable"** button

**First Variable:**
- **Key:** `HUGGINGFACE_API_KEY`
- **Value:** Your Hugging Face API key (starts with `hf_...`)

Example:
```
Key: HUGGINGFACE_API_KEY
Value: hf_aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890
```

⚠️ **CRITICAL**: Without this, your backend won't work!

### 4.3 Optional: Add More Variables (if needed)

You can also add these (optional):
```
Key: FLASK_ENV
Value: production
```

```
Key: PORT
Value: 5000
```

But these are optional - the app will work without them.

---

## Step 5: Deploy!

### 5.1 Create Web Service
- Double-check all settings
- Scroll to the bottom
- Click the big **"Create Web Service"** button

### 5.2 Wait for Deployment
You'll see a deployment log screen with lots of text scrolling:

```
==> Cloning from https://github.com/hkrepo007/kum...
==> Checking out commit...
==> Running build command: pip install -r requirements.txt...
==> Installing dependencies...
==> Build successful!
==> Starting service...
==> Your service is live!
```

This takes **5-10 minutes**. Be patient!

### 5.3 Deployment Complete
When you see:
```
==> Your service is live at https://kerala-scheme-backend.onrender.com
```

✅ **Your backend is deployed!**

---

## Step 6: Get Your Backend URL

### 6.1 Find Your URL
At the top of the page, you'll see your service URL:
```
https://kerala-scheme-backend.onrender.com
```

Or something like:
```
https://kerala-scheme-backend-xxxx.onrender.com
```

### 6.2 Copy This URL
- Click the **copy icon** next to the URL
- Or manually copy it
- **Save it somewhere** - you'll need it for Vercel!

---

## Step 7: Test Your Backend

### 7.1 Test Health Endpoint
Open a new browser tab and visit:
```
https://your-backend-url.onrender.com/health
```

Replace `your-backend-url` with your actual URL.

### 7.2 Expected Response
You should see:
```json
{
  "status": "healthy",
  "message": "Backend is running"
}
```

✅ **If you see this, your backend is working perfectly!**

❌ **If you see an error:**
- Wait 60 seconds (backend might be starting)
- Check the Render logs (see troubleshooting below)

---

## Step 8: View Logs (Optional)

### 8.1 Access Logs
- In your Render dashboard
- Click on your service name
- Click **"Logs"** tab on the left

### 8.2 What to Look For
You should see:
```
Starting Flask server on port 5000
Make sure HUGGINGFACE_API_KEY is set in environment variables
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
```

This means everything is working!

---

## Common Issues & Solutions

### Issue 1: "Application failed to respond"
**Solution:**
- Wait 60 seconds (first start takes time)
- Check if HUGGINGFACE_API_KEY is set correctly
- View logs for error messages

### Issue 2: "Build failed"
**Solution:**
- Check that Root Directory is set to `backend`
- Verify requirements.txt exists in backend folder
- Check logs for specific error

### Issue 3: "Module not found"
**Solution:**
- Make sure Build Command is: `pip install -r requirements.txt`
- Check that all dependencies are in requirements.txt

### Issue 4: Can't find repository
**Solution:**
- Go to Render Settings → GitHub
- Click "Configure account"
- Give Render access to your repository

---

## What's Next?

Now that your backend is deployed:

1. ✅ **Copy your backend URL**
2. ➡️ **Next: Deploy frontend to Vercel**
3. 📝 **Follow the Vercel setup guide**

Your backend URL will be needed when deploying the frontend!

---

## Render Dashboard Features

### Useful Tabs:
- **Logs**: View real-time logs
- **Metrics**: See CPU/Memory usage
- **Settings**: Change configuration
- **Environment**: Manage environment variables

### Free Tier Limits:
- ✅ 750 hours/month (enough for testing)
- ✅ Automatic HTTPS
- ✅ Automatic deploys from GitHub
- ⚠️ Sleeps after 15 min inactivity
- ⚠️ 512 MB RAM

---

## Updating Your Backend

When you make changes to your code:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push
   ```

2. Render automatically redeploys! 🎉

You'll see the deployment in your Render dashboard.

---

## Upgrading (Optional)

If you need better performance:

**Starter Plan: $7/month**
- No sleep
- Always-on
- Faster responses
- 512 MB RAM

**Standard Plan: $25/month**
- 2 GB RAM
- Better performance
- Priority support

For testing, **Free tier is perfect!**

---

## Support

### Render Documentation
- Docs: https://render.com/docs
- Status: https://status.render.com/

### Your Service
- Dashboard: https://dashboard.render.com/
- Service URL: https://kerala-scheme-backend.onrender.com

---

## Summary Checklist

- [x] Created Render account
- [x] Connected GitHub repository
- [x] Configured service settings
- [x] Added HUGGINGFACE_API_KEY
- [x] Deployed successfully
- [x] Tested /health endpoint
- [x] Copied backend URL

**✅ Backend deployment complete!**

**Next step:** Deploy frontend to Vercel using your backend URL!

---

**Need help?** Check the logs in Render dashboard or refer to DEPLOYMENT_GUIDE.md for more details.
