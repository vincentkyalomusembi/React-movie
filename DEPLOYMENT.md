# Vercel Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. Environment Variable Not Working

**Problem:** API calls fail in production but work locally.

**Solution:**
1. Check Vercel Dashboard → Your Project → Settings → Environment Variables
2. Make sure you have: `VITE_TMDB_API_KEY` with your actual API key
3. **Important:** After adding/changing environment variables, you MUST redeploy your app

### 2. Build Fails

**Problem:** Build process fails during deployment.

**Solutions:**
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### 3. API Key Format Issues

**Problem:** API key not being read correctly.

**Solutions:**
- Ensure no quotes around the API key in Vercel dashboard
- API key should be: `7f6ae1940aac4176bd6919f44d7aa884` (no quotes)
- Variable name must be exactly: `VITE_TMDB_API_KEY`

### 4. Console Errors

**Problem:** Check browser console for errors.

**Common errors and fixes:**
- "TMDB API Key is not configured" → Check environment variable setup
- "HTTP error! status: 401" → Invalid API key
- "HTTP error! status: 403" → API key quota exceeded or invalid

## Step-by-Step Vercel Deployment

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Add environment variables and error handling"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

3. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_TMDB_API_KEY` = `7f6ae1940aac4176bd6919f44d7aa884`
   - Apply to: Production, Preview, and Development

4. **Deploy:**
   - Click "Deploy" or trigger a new deployment
   - Wait for build to complete

5. **Verify:**
   - Visit your deployed URL
   - Check browser console for errors
   - Test movie search functionality

## Debugging in Production

1. **Check Console Logs:**
   - Open browser developer tools
   - Look for error messages in Console tab

2. **Check Network Tab:**
   - See if API calls are being made
   - Check if they return 200 status code

3. **Verify Environment Variable:**
   - Add temporary console.log in your code:
   ```javascript
   console.log('API Key loaded:', !!import.meta.env.VITE_TMDB_API_KEY);
   ```

## Quick Fix Commands

If you need to redeploy quickly:

```bash
# Make a small change and redeploy
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

## Contact for Help

If issues persist, check:
- Vercel build logs
- Browser console errors
- TMDB API status at [status.themoviedb.org](https://status.themoviedb.org)
