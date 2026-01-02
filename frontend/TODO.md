# TODO

## Completed
- [x] Remove auto-login on app load by removing load_UserProfile dispatch from App.js
- [x] Remove unused imports (load_UserProfile and useDispatch) from App.js
- [x] Fix password confidentiality by adding proper autocomplete attributes to password fields in Login and Signup forms
- [x] Fix 405 error by correcting API endpoint from "/api/v1/profile" to "/api/v1/me" in load_UserProfile action

## Summary
### Auto-login Issue Fixed
The issue was that the app was dispatching `load_UserProfile` on every app load in App.js, which would automatically log in users if they had a valid session cookie. This caused the website to appear logged in with some user on load, and clicking anywhere might have caused issues if the user state was inconsistent.

By removing this dispatch, the app now loads without any user authentication check on public pages. Users can still log in manually, and private routes will check authentication when accessed via PrivateRoute component.

### Password Confidentiality Issue Fixed
Browsers were showing password suggestions when entering passwords, which is a confidentiality concern. Added proper `autocomplete` attributes:
- Login password: `autoComplete="current-password"`
- Signup passwords: `autoComplete="new-password"`
- Email fields: `autoComplete="email"`

### API Endpoint Fix
Fixed 405 "Method Not Allowed" error by changing the load_UserProfile API call from "/api/v1/profile" to "/api/v1/me", which is the standard endpoint for getting current user information.

The changes ensure that:
- Public pages (home, products, etc.) load without any user logged in
- Users can optionally sign up or log in
- Private routes still require authentication
- Password fields no longer show suggestions, maintaining confidentiality
- No blank screen issues on click since no auto-login happens
- API calls work correctly without 405 errors
