# Geer E-commerce Platform

A modern, full-stack e-commerce platform built with Next.js, inspired by geer.in. This project demonstrates complete CRUD operations, JWT authentication, and responsive design using Shadcn/UI components.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Listing**: Grid layout with search and category filtering
- **Product Details**: Individual product pages with detailed information
- **Authentication**: Login and registration forms with JWT
- **Modern UI**: Built with Shadcn/UI components

### Backend
- **RESTful API**: Complete CRUD operations for products
- **JWT Authentication**: Secure user authentication and authorization
- **Product Management**: Add, view, and delete products
- **In-memory Storage**: Products and users stored in memory (easily replaceable with database)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Authentication**: JWT (JSON Web Tokens)
- **Icons**: Lucide React

## 📁 Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.js
│   │   │   └── register/route.js
│   │   └── products/
│   │       ├── route.js
│   │       └── [id]/route.js
│   ├── auth/
│   │   ├── login/page.jsx
│   │   └── register/page.jsx
│   ├── products/
│   │   ├── page.jsx
│   │   ├── add/page.jsx
│   │   └── [id]/page.jsx
│   ├── layout.jsx
│   └── page.jsx
├── hooks/
│   └── useAuth.jsx
├── components/ui/ (Shadcn components)
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables** (optional)
   Create a `.env.local` file in the root directory:
   \`\`\`env
   JWT_SECRET=your-super-secret-jwt-key-here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication

### Demo Credentials
- **Email**: admin@example.com
- **Password**: password123

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

#### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get single product
- `POST /api/products` - Add new product (requires authentication)
- `DELETE /api/products/[id]` - Delete product (requires authentication)

## 📱 Features Walkthrough

### 1. Home Page
- Modern landing page with hero section
- Feature highlights and call-to-action buttons
- Responsive navigation header

### 2. Product Listing (`/products`)
- Grid layout displaying all products
- Search functionality by product name or category
- Category filtering dropdown
- Responsive design for mobile and desktop

### 3. Product Details (`/products/[id]`)
- Individual product page with detailed information
- High-quality product images
- Product specifications and pricing
- Add to cart functionality (UI ready)

### 4. Authentication
- **Login Page** (`/auth/login`): Secure user authentication
- **Register Page** (`/auth/register`): New user registration
- JWT-based session management

### 5. Product Management
- **Add Product** (`/products/add`): Form to add new products (authenticated users only)
- **Delete Products**: Remove products from listing (authenticated users only)

## 🎨 UI Components

Built with Shadcn/UI components including:
- Cards, Buttons, Inputs
- Select dropdowns, Badges
- Responsive navigation
- Form components with validation

## 🔒 Security Features

- JWT token-based authentication
- Protected API routes
- Client-side route protection
- Secure token storage

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Deployed link 
    

## 🔄 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Shopping cart functionality
- Payment integration (Stripe)
- User profiles and order history
- Product reviews and ratings
- Admin dashboard
- Email notifications
- Image upload functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built as an internship assignment demonstrating full-stack development skills with Next.js, React, and modern web technologies.

---

**Note**: This project uses in-memory storage for demonstration purposes. In a production environment, replace with a proper database solution.
