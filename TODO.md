# CORS Fix TODO

## Steps:
- [x] Edit backend/app.js: Fix corsOptions.origin callback to properly allow origins
- [x] Edit backend/config/config.env.example: Add production frontend to CORS_ORIGIN example
- [x] Add CORS_ORIGIN=http://localhost:3000,https://foodnex.vercel.app to backend/config/.env (manual: open file, add line after LOG_REQUESTS=true)
- [ ] Update CORS_ORIGIN env var on Render dashboard to: http://localhost:3000,https://foodnex.vercel.app
- [ ] Restart/redeploy backend
- [ ] Test product API from frontend dev tools
- [ ] Mark complete

