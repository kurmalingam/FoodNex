# TODO: Fixed Login/Signup Issues on Vercel

## Issues Resolved
- ✅ **405 Error**: Login and signup failing with "Request failed with status code 405"
- ✅ **Automatic Login**: Website automatically logging users in on page load

## Root Causes & Fixes

### 405 Error
- **Cause**: Vercel configuration issues - typo in vercel.json ("frotend" instead of "frontend") and improper routing
- **Fix**: Updated vercel.json to use proper routes configuration, routing /api/* to backend and others to frontend build

### Automatic Login Issue
- **Cause**: load_UserProfile action was automatically loading user data from sessionStorage on app mount
- **Fix**: Modified load_UserProfile to only check authentication via API call, not sessionStorage

### HashRouter Issue
- **Cause**: Using HashRouter (#/path) instead of BrowserRouter for clean URLs
- **Fix**: Changed to BrowserRouter for proper Vercel deployment

## Changes Made
- [x] Fixed vercel.json configuration with proper routing
- [x] Changed HashRouter to BrowserRouter in index.js
- [x] Modified load_UserProfile action to not auto-load from sessionStorage
- [x] Updated ProfileModel.jsx to handle undefined user objects
- [x] Built frontend successfully

## Next Steps
- [ ] Deploy to Vercel and test login/signup functionality
- [ ] Verify users are not automatically logged in on page visits
- [ ] Confirm clean URL routing works properly
