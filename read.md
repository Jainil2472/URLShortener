# ShortLink

A full-stack URL shortener application built with React on the frontend and Express + PostgreSQL on the backend. The platform allows users to create custom or auto-generated short links, manage their saved URLs, and redirect users to the original destination through a protected backend flow.

## Project Overview

ShortLink is designed as a practical, full-stack MVP for shortening long URLs into compact, shareable links. It includes:

- User signup and login
- JWT-based authentication using secure cookies
- URL shortening with optional custom codes
- Link listing and deletion for authenticated users
- Redirect endpoint for shortened links
- Frontend routing for public and private pages
- PostgreSQL persistence via Drizzle ORM

This project demonstrates a modern web application architecture with separate frontend and backend services, API validation, database modeling, and cookie-backed auth.

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- JavaScript (ES modules)

### Backend
- Node.js
- Express.js
- PostgreSQL
- Drizzle ORM
- JWT
- Zod validation
- Cookie parser
- CORS

### Database
- PostgreSQL running via Docker Compose

## Features

### User Authentication
- Users can sign up with name, email, and password
- Existing email addresses are rejected
- Passwords are hashed using a salted hashing approach before saving
- Login creates a JWT token stored in an HTTP-only cookie
- Protected routes require a valid token for access

### URL Management
- Authenticated users can shorten a long URL
- Users may optionally provide a custom short code
- If no code is supplied, a random short code is generated using nanoid
- Users can list all their shortened links
- Users can delete specific links
- Each link is associated with the authenticated user

### Redirect Flow
- A shortened path like `/url/<code>` resolves to the original URL
- The backend checks the code in the database and redirects the user

### Frontend UX
- Landing page with product-style marketing UI
- Public route handling for landing pages
- Private route handling for authenticated user dashboard workflows
- Link generation and listing screens

## Architecture

The application follows a simple layered architecture:

- Frontend: React app for user interactions and UI rendering
- Backend: Express REST API for auth and URL logic
- Database: PostgreSQL storing users and shortened URLs
- ORM: Drizzle for schema definitions and queries

### Authentication Flow
1. User submits signup/login data
2. Backend validates the payload using Zod
3. Password is verified or hashed appropriately
4. A JWT is created and stored in a cookie
5. Protected endpoints check cookie-based JWT via middleware

### URL Shortening Flow
1. User enters a long URL and optional custom code
2. Backend validates the payload
3. System creates a short code or uses the provided one
4. URL record is inserted with the current user ID
5. Frontend shows the shortened URL to the user

## Project Structure

```text
URLShortener/
├── Backend/
│   ├── .env
│   ├── db/
│   │   └── index.js
│   ├── docker-compose.yml
│   ├── drizzle.config.js
│   ├── main.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── model/
│   │   ├── url.model.js
│   │   └── user.model.js
│   ├── node_modules/
│   ├── package.json
│   ├── routes/
│   │   ├── url.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   ├── url.service.js
│   │   └── user.service.js
│   ├── utils/
│   │   ├── jwt.utils.js
│   │   └── saulting.utils.js
│   ├── validation/
│   │   └── request.validation.js
│   └── pnpm-lock.yaml
├── Frontend/
│   ├── index.html
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── ErrorPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── ShortedLinkPage.jsx
│   │   │   ├── SignupLoinPage.jsx
│   │   │   └── UrlListPage.jsx
│   │   ├── routes/
│   │   │   ├── AppRoutes.jsx
│   │   │   ├── PrivateRoutes.jsx
│   │   │   └── PublicRoutes.jsx
│   │   ├── service/
│   │   │   ├── api.js
│   │   │   └── urlService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── pnpm-lock.yaml
├── read.md
└── .git
```

## Database Schema

### Users Table
- id: UUID (primary key)
- name: string
- email: unique string
- password: text
- salt: text
- created_at: timestamp
- updated_at: timestamp

### URLs Table
- id: UUID (primary key)
- url: string
- code: string
- userId: UUID (foreign key to user)
- created_at: timestamp
- updated_at: timestamp

## API Endpoints

### Authentication

#### POST /user/signup
Creates a new user account.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### POST /user/login
Logs in an existing user and sets a JWT cookie.

Request body:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### URL Operations

#### GET /url/list
Returns all links for the authenticated user.

#### POST /url/shorten
Creates a shortened URL for the logged-in user.

Request body:
```json
{
  "url": "https://example.com/very/long/path",
  "code": "custom-code"
}
```

Note: `code` is optional.

#### GET /url/:shortener
Redirects to the original URL based on matching short code.

#### DELETE /url/delete/:id
Deletes a saved URL for the current user.

### Protected Check

#### GET /get
Used as a simple auth verification endpoint for authenticated requests.

## Environment Variables

The backend uses the following environment variables in `Backend/.env`:

```env
DATABASE_URL=postgresql://postgres:student@localhost:5433/urlShortner
SECRET_KEY=your-secret-key
PORT=8000
```

## Setup & Installation

### 1. Clone the project
```bash
git clone <repository-url>
cd URLShortener
```

### 2. Start the PostgreSQL database
```bash
cd Backend
docker-compose up -d
```

### 3. Install backend dependencies
```bash
cd Backend
pnpm install
```

### 4. Install frontend dependencies
```bash
cd ../Frontend
pnpm install
```

### 5. Run the backend
```bash
cd Backend
pnpm start
```

### 6. Run the frontend
```bash
cd Frontend
pnpm dev
```

The frontend typically runs at:
- http://localhost:5173

The backend API usually runs at:
- http://localhost:8000

## Development Notes

### Current implementation status
This is a working MVP-style project with the core URL-shortening flow implemented. It is suitable for learning, prototyping, and local development, but it is not yet production-grade.

### Notable implementation details
- CORS is configured to allow requests from `http://localhost:5173`
- Auth uses JWT in a cookie named `jwt`
- Protected routes rely on the middleware layer for token validation
- The project uses UUID-based IDs for users and links
- The URL resolver is built around a code lookup in the database

## Security Considerations

This project is a learning/demo application and should be hardened before production deployment. Current areas to improve include:

- Stronger password hashing strategy (bcrypt/argon2 preferred)
- Rate limiting on auth and shorten endpoints
- Input sanitization and additional URL validation
- Brute-force protection for login attempts
- Click analytics and abuse monitoring
- HTTPS enforcement in production
- Proper secret management for environment variables
- CSRF protections for cookie-based auth if browser behavior requires it

## Known Observations

The codebase demonstrates a practical working approach to:

- backend validation with Zod
- database modeling with Drizzle ORM
- JWT cookie authentication
- route-based frontend access control
- full-stack integration in a local dev setup

However, several parts of the app are intentionally simple and may not yet include enterprise-grade controls, error handling, or scalability features.

## Future Improvements

Potential next steps for this project:

- Add analytics dashboard with click counts
- Add QR code generation for shortened links
- Add email verification and password reset
- Add user profile settings
- Add URL expiration support
- Add custom domain support
- Add caching and performance optimization
- Add unit and integration tests
- Add CI/CD and deployment automation

## Summary

ShortLink is a practical URL shortener application that combines React, Express, PostgreSQL, and JWT authentication. It is ideal for project learning, portfolio showcasing, and a base for expanding into a more complete SaaS-style link management platform.

This project is a solid example of a full-stack application with clear separation between frontend, backend, database, and auth flows.
