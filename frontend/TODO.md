# TODO: Debug 404 Error on Login (/api/v1/me)

## Information Gathered
- User encounters 404 error on GET http://localhost:3000/api/v1/me after login attempt
- Frontend proxy set to http://localhost:4000 in package.json
- Backend route changed from /profile to /me in userRoute.js
- Backend default port is 5000, config example suggests 4000
- Request not being proxied, hitting frontend dev server instead

## Plan
- [x] Changed proxy back to production URL https://foodnex.onrender.com
- [x] Changed frontend to call /api/v1/profile instead of /me to match deployed backend
- [ ] Restart frontend dev server for proxy change to take effect
- [ ] Test full login flow: login -> redirect -> load profile

## Dependent Files
- backend/config/.env (PORT setting)
- backend/route/userRoute.js (route definition)
- frontend/package.json (proxy setting)
- backend/middleWare/auth.js (authentication logic)

## Followup Steps
- [ ] Run backend: cd backend && npm run dev
- [ ] Check backend console for port and startup messages
- [ ] Run frontend: cd frontend && npm start
- [ ] Attempt login with admin@foodnex.com / admin123
- [ ] Monitor browser console and backend logs for errors
- [ ] If still 404, check if backend responds to http://localhost:4000/api/v1/health
