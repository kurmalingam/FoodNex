# TODO: Fix Login/Signup 405 Error on Vercel

## Issue
- Login and signup work locally but fail on Vercel with "Request failed with status code 405"
- Console shows "Failed to load resource: the server responded with a status of 405 ()"
- 405 Method Not Allowed indicates the HTTP method is not supported for the requested resource

## Root Cause
- Vercel configuration issue: vercel.json had a typo ("frotend" instead of "frontend")
- All requests were being routed to backend/server.js, causing static files and API routing problems
- API routes weren't properly configured for Vercel deployment

## Plan
1. Fix vercel.json configuration
2. Use routes instead of rewrites to properly handle API and static file serving
3. Route /api/* requests to backend, others to frontend build
4. Test deployment on Vercel

## Tasks
- [x] Fix typo in vercel.json ("frotend" -> "frontend")
- [x] Update routing configuration to use routes instead of rewrites
- [x] Configure API routes to go to backend, static files to frontend
- [ ] Deploy to Vercel and test login/signup functionality
- [ ] Verify both frontend and API work correctly
