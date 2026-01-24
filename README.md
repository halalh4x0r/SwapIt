# 🔄 SwapIt

<div align="center">

**A neighborhood item swapping platform built with React**

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 About

SwapIt is a modern web application that enables users to browse, create, and manage item listings for swapping within their neighborhood. Whether you have old furniture, electronics, or books you no longer need, SwapIt makes it easy to find a new home for your items.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🛍️ **Browse Listings** | View all available items with images, descriptions, and prices |
| 🔍 **Smart Search** | Find items quickly with real-time search functionality |
| 🎛️ **Advanced Filters** | Filter by category, price range, and sort by various criteria |
| ➕ **Create Listings** | Add new items with title, category, description, image, and price |
| 🛒 **Swap Cart** | Add items to cart for swapping |
| 📱 **Responsive Design** | Works seamlessly on desktop and mobile devices |

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 with Hooks
- **Build Tool:** Vite 7
- **Routing:** React Router DOM 6
- **Icons:** React Icons
- **Styling:** Vanilla CSS with custom design system
- **Mock API:** JSON Server
- **Version Control:** Git & GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/halalh4x0r/SwapIt.git
   cd SwapIt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (mock API)
   ```bash
   npx json-server db.json --port 3000
   ```

4. **Start the development server** (in a new terminal)
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
SwapIt/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Filter.jsx      # Filter panel with category, price, sort
│   │   ├── FilterDrawer.jsx # Slide-out filter drawer
│   │   ├── ItemCard.jsx    # Individual item display card
│   │   ├── ItemList.jsx    # Grid of item cards
│   │   ├── Navbar.jsx      # Navigation with search
│   │   ├── SearchBar.jsx   # Real-time search input
│   │   └── CreateListing.jsx
│   ├── context/            # React Context providers
│   │   ├── CartContext.jsx
│   │   └── SearchFilterContext.jsx
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   └── CheckoutPage.jsx
│   ├── App.jsx             # Main app with routing
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── db.json                 # Mock database with items
└── package.json
```

## 🎨 Available Categories

- 🪑 Furniture
- 💻 Electronics
- 📚 Books
- 👕 Clothing
- ⚽ Sports
- 🎸 Music
- 🍳 Kitchen
- 🌱 Home & Garden

## 👥 Contributors

| Name | Role |
|------|------|
| **Mohamed Salim Agil** | Developer |
| **Mohamed Hadi** | Developer |
| **Brian Muena** | Developer |

## 🔮 Future Improvements

- [ ] User authentication and profiles
- [ ] Real-time chat between users
- [ ] Image upload functionality
- [ ] Geolocation for nearby items
- [ ] Notifications for new matches
- [ ] Backend integration with database

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by the SwapIt Team

</div>