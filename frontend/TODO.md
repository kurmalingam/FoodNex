# TODO: Fix Frontend API Requests to Point to Render Backend

## Steps to Complete
- [x] Modify `frontend/src/index.js` to import axios and set `axios.defaults.baseURL` using `process.env.REACT_APP_BACKEND_URL`
- [x] Ensure `REACT_APP_BACKEND_URL` environment variable is set in Vercel to the Render backend URL
- [x] Redeploy the frontend to Vercel to apply changes
