# Icon Size Fix TODO

## Issue: Icons small local, large on Vercel deploy (likely viewport/CSS scaling)

Steps:
- [x] Add global icon normalization to App.css
- [x] Fix Cart.css: Reduce cartIcon from 5rem to clamp(2-4rem), normalize payments

- [ ] Test local npm start
- [ ] Deploy to Vercel
- [ ] Verify sizes match local

