# Express Backend Starter - Modular Structure

A production-ready Express.js backend starter template built with TypeScript, featuring a modular architecture, comprehensive error handling, authentication setup, and security best practices.

## 🚀 Features

- **🔐 Authentication Setup**
  - JWT-based authentication structure (access & refresh tokens)
  - Passport.js integration ready
  - Multi-factor authentication (MFA/2FA) module structure
  - Session management module
  - Password hashing with bcryptjs

- **🛡️ Security**
  - Helmet.js for security headers
  - CORS configuration
  - Rate limiting ready (express-rate-limit)
  - Input validation with Zod
  - Cookie-based token storage

- **📦 Modular Architecture**
  - Clean separation of concerns
  - Module-based structure (auth, user, session, mfa)
  - Scalable and maintainable codebase

- **🎯 Error Handling**
  - Centralized error handling middleware
  - Custom error classes
  - Comprehensive error codes
  - Structured error responses
  - Process-level error handlers

- **📝 Logging**
  - Winston logger with daily rotation
  - Structured logging
  - Error tracking

- **📧 Email Support**
  - Resend integration ready
  - Nodemailer support ready
  - Email templating structure

- **🔧 Developer Experience**
  - TypeScript for type safety
  - Biome for linting and formatting
  - Husky for git hooks
  - Nodemon for hot reloading
  - Environment-based configuration

- **🗄️ Database**
  - MongoDB with Mongoose
  - Database connection handling

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **bun**
- **MongoDB** (local or MongoDB Atlas)
- **Git**

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abdulreehman20/Express-Starter-With-Modular-Structure
cd Express-Starter-With-Modular-Structure
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
PORT=8000
NODE_ENV=development
BASE_PATH=/api/v1
FRONTEND_ORIGIN=http://localhost:3000

# Database
MONGO_URI=mongodb://localhost:27017/your_database_name

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this-in-production
JWT_REFRESH_EXPIRES_IN=30d

# Email Configuration (Optional)
# MAILER_SENDER=noreply@yourdomain.com
# RESEND_API_KEY=your-resend-api-key
```

**⚠️ Important:** Generate strong secrets for JWT tokens in production:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Start MongoDB

**Local MongoDB:**
```bash
# Windows
net start MongoDB

# macOS/Linux
brew services start mongodb-community
# or
sudo systemctl start mongod
```

**MongoDB Atlas:**
- Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Update `MONGO_URI` in `.env`

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

Server runs on `http://localhost:8000` (or your configured PORT).

### Production Mode

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── @types/              # TypeScript type definitions
├── common/              # Shared utilities
│   ├── enums/          # Enum definitions
│   ├── interface/      # Shared interfaces
│   ├── strategies/     # Passport strategies
│   ├── utils/          # Utility functions
│   └── validators/     # Validation schemas
├── configs/            # Configuration files
├── database/           # Database configuration & models
├── mailers/            # Email service configuration
├── middlewares/        # Express middlewares
├── modules/            # Feature modules
│   ├── auth/           # Authentication module
│   ├── mfa/            # Multi-factor authentication
│   ├── session/        # Session management
│   └── user/           # User management
└── index.ts            # Application entry point
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run format` | Format code using Biome |
| `npm run lint` | Lint code using Biome |
| `npm run lint:fix` | Fix linting issues automatically |
| `npm run check` | Run both linting and formatting checks |

## 🔌 API Endpoints

Currently implemented:

- **GET** `/` - Welcome message
- **GET** `/health` - Server health check

**Note:** Module routes (auth, user, mfa, session) are structured but need to be implemented. See module folders for structure.

## 🎯 Error Handling

Comprehensive error handling system. See [ERROR_HANDLING.md](./ERROR_HANDLING.md) for details.

All errors return a consistent JSON structure:

```json
{
  "errorName": "ErrorClassName",
  "errorCode": "ERROR_CODE",
  "httpStatus": 400,
  "message": "User-friendly error message",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "path": "/api/v1/users"
}
```

### Using Error Classes

```typescript
import { BadRequestException, NotFoundException } from "./common/utils/app-error";

throw new BadRequestException("Invalid input provided");
throw new NotFoundException("User not found");
```

## 🔒 Security Best Practices

1. Never commit `.env` files
2. Use strong, random JWT secrets in production
3. Configure rate limits as needed
4. Update `FRONTEND_ORIGIN` for production
5. Always validate input using Zod validators

## 🧪 Development Guidelines

### Code Style

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
npm run format    # Format code
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
```

### Adding New Modules

1. Create folder in `src/modules/`
2. Add files:
   - `[module].controller.ts` - Request handlers
   - `[module].service.ts` - Business logic
   - `[module].route.ts` - Route definitions
3. Register routes in `src/index.ts`

Example:

```typescript
// src/modules/products/product.route.ts
import { Router } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler.middleware";
import { productController } from "./product.controller";

const router = Router();
router.get("/", asyncHandler(productController.getAll));
export { router as productRoutes };
```

```typescript
// src/index.ts
import { productRoutes } from "./modules/products/product.route";
app.use(`${Env.BASE_PATH}/products`, productRoutes);
```

## 📦 Key Dependencies

- **express** - Web framework
- **typescript** - Type safety
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **passport** - Authentication middleware
- **zod** - Schema validation
- **winston** - Logging
- **helmet** - Security headers
- **cors** - CORS support

See `package.json` for complete list.

## 🐛 Troubleshooting

### Port Already in Use
Change `PORT` in `.env` file.

### MongoDB Connection Error
1. Verify MongoDB is running
2. Check `MONGO_URI` in `.env`
3. For Atlas, ensure IP is whitelisted

### TypeScript Errors
Run `npm run build` to check compilation errors.

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/)
- [Biome](https://biomejs.dev/)

---

**Happy Coding! 🚀**
