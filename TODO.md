# Security Fixes TODO

## HIGH Priority:
- [ ] 1. Fix CORS - Use specific origin from config instead of `origin: true`
- [ ] 2. JWT Expiration - Use shorter duration from config (or change default)
- [ ] 3. Account Lockout - Add failed login tracking to user model and controller
- [ ] 4. Email Enumeration - Change "User not found" to generic message

## MEDIUM Priority:
- [ ] 5. Body Parser Limits - Remove duplicate 50mb settings
- [ ] 6. Admin Pagination - Add pagination to getAllProductsAdmin
- [ ] 7. Password Requirements - Change minLength from 4 to 8 (DONE - already 8)
- [ ] 8. Bcrypt Salt - Increase from 10 to 12
- [ ] 9. Review Deletion - Check if user owns review before delete
- [ ] 10. Payment Logging - Remove sensitive console.log statements
- [ ] 11. Image Upload - Add file type validation

## Completed:
- [x] Rate Limiting - Already implemented
- [x] Helmet.js - Already implemented
- [x] XSS protection - Already implemented
