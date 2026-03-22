# FoodNex E-Commerce Shopping App

## Introduction
Welcome to FoodNex, an e-commerce shopping app that provides both normal user and admin modes, offering a wide range of features to enhance the shopping experience.

## Features

### Normal User Mode
| Feature             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| User Authentication | Secure user login and registration                           |
| Password Reset      | Reset password via email with reset link                     |
| Profile Management  | Update user profile details (email, name, password, picture) |
| Shopping Cart       | Add items to the cart and apply coupon codes                 |
| Product Review      | Logged-in users can review products                          |
| Shipping Options    | Specify shipping area for product delivery                   |
| Order Tracking      | Track the status of orders                                   |
| Payment Gateway     | Secure payment processing                                    |
| Contact Form        | Contact form for user assistance                             |
| Saved Addresses     | Save multiple shipping addresses                             |
| Advanced Search     | Filter products by price range, category, and rating         |

### Admin Mode
| Feature                 | Description                                        |
| ----------------------- | -------------------------------------------------- |
| Admin Dashboard         | Access to an admin-only dashboard                  |
| User Management         | View and manage users (delete, promote to admin)   |
| Product Management      | Edit and create products, manage stock levels      |
| Review Management       | View and delete product reviews                    |
| Order Management        | View all orders, and can manage them               |
| Role-Based Permissions  | Restrict admin features based on roles             |
| Order Approval Workflow | Set up approval process for Update status of order |

## Upcoming Features

### Normal User Mode
| Feature                 | Description                                 |
| ----------------------- | ------------------------------------------- |
| Wishlist                | Create and manage wishlists for products    |
| Product Recommendations | Receive suggestions for related products    |
| Product Comparisons     | Compare product specifications side by side |
| Social Sharing          | Share favorite products on social media     |

### Admin Mode
| Feature             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| Sales Analytics     | Gain insights into sales trends and popular products      |
| Dynamic Coupons     | Create and manage targeted coupons                        |
| User Analytics      | Track user engagement and activity                        |
| Bulk Product Upload | Upload and update multiple products using CSV             |
| Automated Emails    | Send automated emails for order confirmation and updates  |
| Notification Center | Receive alerts for new orders, low stock, and more        |
| Data Export         | Export data sets (e.g., orders, products) to CSV or Excel |
| Product Bundles     | Create and manage product bundles                         |

## Tech Stack

### Backend
```
Node.js (>=16) + Express.js + MongoDB (Mongoose ^8)
Auth: JWT + bcryptjs
Payments: Stripe (^14.17.0)
File Upload: Cloudinary + Multer
Security: Helmet, CORS, Rate Limiting, XSS Protection
Email: Nodemailer
```

### Frontend
```
React (^18) + Redux + Material-UI (^5.14)
Charts: Highcharts
Animations: Framer Motion
Routing: react-router-dom (^5 - upgrade recommended)
Payments: Stripe Elements (disabled)
```

### Root Monorepo
```
Scripts: npm run dev (concurrent), npm start
Shared: bcryptjs, cloudinary, stripe
```

## Project Structure
```
FoodNex/
├── backend/          # API: models, controllers, routes, middleware
├── frontend/src/     # React: components (Admin/Cart/Home/Product/User), actions, reducers
├── package.json      # Monorepo
├── vercel.json       # Deployment
└── TODO.md           # Tasks
```

## Quick Start

1. **Clone & Install**:
   ```
   git clone <repo>
   cd FoodNex
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Environment** (backend/config/.env):
   ```
   MONGO_URI=your_mongo_connection
   JWT_SECRET=your_secret
   STRIPE_SECRET_KEY=sk_test_...
   CLOUDINARY_NAME=...
   ```

3. **Seed Data**:
   ```
   cd backend
   npm run seed:admin
   npm run seed:products
   ```

4. **Run**:
   ```
   npm run dev  # Backend:5000 + Frontend:3000
   ```

## API Endpoints (/api/v1)
- Auth: POST /user/register, /login, /password/forgot
- Products: GET /product, POST /admin/product/new
- Orders: POST /order/new, GET /orders/myOrders
- Health: GET /health

## Deployment
- **Vercel**: Auto-deploys frontend/backend (vercel.json)
- **Backend**: Railway/Render + MongoDB Atlas
- Production serves frontend build from backend

## Known Issues & Improvements
- ❌ react-router-dom v5 (upgrade to v6)
- ❌ Typos: userConttroler.js → userController.js
- ⚠️ Stripe disabled (add keys)
- ✅ Add tests (Jest ready)

## Contributing
1. Fork & PR
2. Follow existing patterns
3. Update TODO.md

