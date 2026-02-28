# Hugging Face API Setup Guide

## Why Hugging Face?

✅ **FREE** - No credit card required
✅ **Easy to use** - Simple API
✅ **Powerful models** - Using Mistral-7B-Instruct
✅ **No payment** - Generous free tier

## Step 1: Get Your Free API Key

### 1. Create Account
Go to: https://huggingface.co/join

- Sign up with email or GitHub
- Verify your email
- It's completely FREE!

### 2. Generate API Token
1. Go to: https://huggingface.co/settings/tokens
2. Click "New token"
3. Name it: `kerala-schemes-finder`
4. Select role: `read`
5. Click "Generate a token"
6. **Copy the token** (starts with `hf_...`)

## Step 2: Add API Key to Project

### Option A: Edit .env file
1. Open `backend/.env` in Notepad
2. Add this line:
   ```
   HUGGINGFACE_API_KEY=hf_your_token_here
   ```
3. Save the file

### Option B: Create .env file
If `.env` doesn't exist:
```bash
cd backend
copy .env.example .env
notepad .env
```

Then add:
```
HUGGINGFACE_API_KEY=hf_your_actual_token_here
```

## Step 3: Install New Dependencies

```bash
cd backend
pip install -r requirements.txt
```

This will install:
- huggingface-hub (replaces openai)
- All other required packages

## Step 4: Run the Backend

```bash
python app.py
```

## What Changed?

### Before (OpenAI)
- Required paid API key
- Used GPT-4 model
- Cost per request

### After (Hugging Face)
- ✅ FREE API key
- ✅ Uses Mistral-7B-Instruct model
- ✅ No cost
- ✅ Generous rate limits

## Model Information

**Using:** Mistral-7B-Instruct-v0.2
- High-quality open-source model
- Good at following instructions
- Fast inference
- Free to use via Hugging Face API

## API Limits (Free Tier)

- **Rate limit:** ~1000 requests/hour
- **Token limit:** Generous per request
- **Cost:** FREE forever
- **No credit card:** Required

## Testing

### Test 1: Check Backend Health
```bash
curl http://localhost:5000/health
```

### Test 2: Test Registration
Use the frontend at http://localhost:3000

### Test 3: Run Test Script
```bash
python test-connection.py
```

## Troubleshooting

### "HUGGINGFACE_API_KEY not found"
- Make sure `.env` file exists in `backend/` folder
- Check the key starts with `hf_`
- No spaces around the `=` sign

### "Model is loading"
- First request might take 20-30 seconds
- Model needs to "wake up" on Hugging Face servers
- Subsequent requests will be faster

### "Rate limit exceeded"
- Wait a few minutes
- Free tier has generous limits
- Upgrade to Pro if needed (still very cheap)

## Comparison

| Feature | OpenAI | Hugging Face |
|---------|--------|--------------|
| Cost | Paid | FREE |
| Setup | Credit card needed | Just email |
| Quality | Excellent | Very Good |
| Speed | Fast | Fast |
| Rate Limits | Pay per use | 1000/hour free |

## Example .env File

```bash
# Hugging Face API Configuration
HUGGINGFACE_API_KEY=hf_abcdefghijklmnopqrstuvwxyz1234567890

# That's it! No other keys needed
```

## Getting Your Token

**Quick Link:** https://huggingface.co/settings/tokens

1. Sign up (free)
2. Go to settings → tokens
3. Create new token
4. Copy and paste into `.env`

## Benefits

✅ No credit card required
✅ No payment needed
✅ Good quality responses
✅ Easy to set up
✅ Generous free tier
✅ Open source models

## Support

- **Hugging Face Docs:** https://huggingface.co/docs/api-inference
- **Model Page:** https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2
- **Get Token:** https://huggingface.co/settings/tokens

---

**Ready to start?** Get your free token and add it to `.env`! 🚀
