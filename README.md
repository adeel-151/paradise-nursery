# 🌿 Paradise Nursery

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A modern, responsive houseplant shopping e-commerce application built with React, Redux Toolkit, React Router, and Vite.

## 📖 Project Description

Paradise Nursery is a frontend e-commerce application that provides a seamless shopping experience for plant lovers. It allows users to browse a variety of houseplants, add products to their shopping cart, easily manage their cart by adjusting quantities or removing items, and view a detailed order summary including the total cost. The application focuses on robust state management using Redux Toolkit to provide a smooth, instant UI feedback loop.

## ✨ Features

- **Responsive Landing Page**: A beautiful, inviting homepage introducing the Paradise Nursery brand.
- **Product Listing & Categorization**: Browse through various houseplant categories effortlessly.
- **Dynamic Shopping Cart**:
  - Add to cart functionality with immediate UI updates.
  - "Add to Cart" button intelligently disables after a product is selected.
  - Dynamic shopping cart item count in the navigation bar.
- **Cart Management**:
  - Increase or decrease product quantities easily.
  - Delete items directly from the cart.
  - Real-time order summary and total cost calculation.
- **Navigation**: Seamless routing powered by React Router for transitioning between the store, cart, and landing pages.
- **State Management**: Robust and predictable state handling using Redux Toolkit.
- **Checkout**: A "Coming Soon" placeholder for the final checkout process.

## 🛠️ Technologies Used

- **Frontend**: React (v19)
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM (v7)
- **Styling**: CSS3
- **Build Tool**: Vite
- **Linting**: ESLint

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed on your system.
- Node.js (v16.0.0 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the URL provided in your terminal) to view the application.

## 📁 Project Structure

```
paradise-nursery/
├── public/              # Static assets
├── src/
│   ├── app/             # Redux store configuration
│   ├── assets/          # Images, icons, and other media
│   ├── components/      # Reusable React components (Navbar, ProductCard, etc.)
│   ├── data/            # Mock data for products
│   ├── features/        # Redux slices (cartSlice, productSlice)
│   ├── pages/           # Main page components (Landing, Shop, Cart)
│   ├── App.css          # Application-wide styles
│   ├── App.jsx          # Main application component routing
│   ├── index.css        # Global CSS resets and variables
│   └── main.jsx         # React application entry point
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite bundler configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the issues page if you want to contribute.

## 📝 License

This project is licensed under the MIT License.
