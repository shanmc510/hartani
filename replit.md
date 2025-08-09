# Hartani - Sustainable Luxury Couture Platform

## Overview

Hartani is a sustainable luxury fashion e-commerce platform featuring made-to-order couture by Asia's youngest fashion designers. The platform emphasizes ethical sourcing, zero-waste production, and custom sizing, showcasing Indonesian craftsmanship while promoting environmental responsibility. Built as a full-stack application with a modern React frontend and Express.js backend, it includes contact form functionality for customer inquiries and consultation requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring brand-specific colors (charcoal, cream, earthy tones) and typography (Playfair Display, Montserrat)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submissions and message retrieval
- **Error Handling**: Centralized error middleware with structured error responses
- **Request Logging**: Custom middleware for API request/response logging with performance metrics

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Database Provider**: Neon Database serverless PostgreSQL for production deployment

### Authentication and Authorization
- **Current State**: Basic foundation with user schema defined but not actively implemented
- **Session Management**: PostgreSQL session store configured via connect-pg-simple
- **Future Implementation**: Ready for authentication system expansion with existing user management infrastructure

### Design System and Theming
- **Color Palette**: Custom CSS variables for brand colors with light/dark mode support
- **Typography**: Google Fonts integration with serif (Playfair Display) for headings and sans-serif (Montserrat) for body text
- **Component Consistency**: Comprehensive UI component library with variant-based styling using class-variance-authority
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## External Dependencies

### Database and ORM
- **PostgreSQL**: Primary database for production data persistence
- **Drizzle ORM**: Type-safe database operations with automatic TypeScript inference
- **Neon Database**: Serverless PostgreSQL hosting for scalable database management

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web font delivery for Playfair Display and Montserrat typefaces

### Development and Build Tools
- **Vite**: Fast build tool with hot module replacement and optimized bundling
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: JavaScript bundler for production server builds
- **PostCSS**: CSS processing with Autoprefixer for vendor prefix management

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema parsing
- **Hookform Resolvers**: Integration layer between React Hook Form and Zod validation

### State Management and Data Fetching
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **Date-fns**: Date manipulation and formatting utilities

### Development Environment
- **Replit Integration**: Development banner and cartographer plugin for Replit environment
- **Runtime Error Overlay**: Enhanced error reporting during development
- **TSX**: TypeScript execution for development server