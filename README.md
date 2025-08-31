## Swap It - Item Trading Platform

A modern web application for buying, selling, and swapping items. SwapIt provides a seamless platform for users to list their items, browse available listings, and connect with potential traders.

## Features
# Smart Filtering System
Category Filtering: Browse items by specific categories

Price Range Filter: Set minimum and maximum price limits

Search Functionality: Find items by title or description

Multiple Sorting Options:

Price: Low to High / High to Low

Name: Alphabetical order

Default: Most recent listings

## Item Management
Create Listings: Easy form to add new items with images

Item Details: Detailed view for each listing

Shopping Cart: Add/remove items from cart

Delete Listings: Remove your own listings

## Swap Functionality
Swap Requests: Initiate swap proposals for items

Category-based Trading: Find similar items for swapping

## Modern UI/UX
Responsive Design: Works perfectly on desktop, tablet, and mobile

Amazon-style Filter Interface: Familiar and intuitive filtering

Clean Card Layout: Beautiful item presentation

Smooth Animations: Enhanced user experience

## Tech Stack
Frontend: React 18, React Router DOM

Styling: Tailwind CSS, Custom CSS

Backend: JSON Server (REST API)

Icons: React Icons

Build Tool: Vite (or Create React App)

## Installation
Prerequisites
Node.js (v14 or higher)

npm or yarn

Setup Instructions
Clone the repository

bash
git clone git@github.com/halalh4x0r/SwapIt
cd swapit
Install dependencies

bash
npm install
Start JSON Server (Backend)

bash
npm run server
This will start the JSON server on http://localhost:3000

Start the React Application

bash
npm start
This will start the development server on http://localhost:3001

Open your browser
Navigate to http://localhost:3001 to view the application


## Project Structure
SwapIt/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Filter.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemCard.jsx
│   │   ├── ItemDetails.jsx
│   │   └── CreateListing.jsx
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── App.jsx
|   ├──About.jsx
│   ├── main.jsx
│   └── App.css
├── db.json
├── package.json
└── README.md

## Usage
For Buyers/Swappers
Browse Listings: Use the filter to find items by category, price, or search terms

View Details: Click "View Details" to see full item information

Add to Cart: Save items for later consideration

Initiate Swap: Click "Swap It" to start a trade conversation

For Sellers
Create Listing: Navigate to "Create Listing" from the navbar

Fill Details: Add title, category, description, image URL, and price

Submit: Your item will be immediately available for browsing

Manage: Delete listings or update cart status

## API Endpoints
The application uses JSON Server with the following endpoints:

GET /items - Fetch all items

GET /items/:id - Fetch single item

POST /items - Create new item

DELETE /items/:id - Delete item

PATCH /items/:id - Update item (cart status)



## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
React team for the amazing framework

Tailwind CSS for the utility-first CSS framework

JSON Server for the easy mock backend

Amazon UI for filter design inspiration