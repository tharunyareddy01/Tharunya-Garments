# 👗 Tharunya Garments

**Tharunya Garments** is a stylish and responsive fashion shopping website developed as a web development project. The website allows users to explore clothing collections for **Kids, Men, and Ladies**, add products to a bill, and view their complete billing summary.

The project demonstrates the use of **HTML, CSS, JavaScript, Node.js, and Express.js** to create a simple full-stack-style garments shopping application.

## ✨ Features

* 🏠 Attractive Home Page
* 👕 Men's Wear Collection
* 👗 Ladies Wear Collection
* 🧒 Kids Wear Collection
* 🛒 Add Products to Bill
* 📋 Billing Summary
* ➕ Automatic Quantity Update
* 💰 Automatic Subtotal Calculation
* 🧮 Automatic Total Amount Calculation
* ❌ Remove Products from Bill
* 🗑️ Clear Complete Bill
* 💾 Cart data stored using Browser Local Storage
* 📱 Responsive design for different screen sizes
* 🚀 Express.js server for serving the website

## 🛠️ Technologies Used

* **HTML5** – Structure of web pages
* **CSS3** – Styling, layout, responsive design and animations
* **JavaScript** – Product selection and billing functionality
* **Node.js** – Server-side runtime
* **Express.js** – Web server and routing
* **LocalStorage** – Temporary browser-based cart storage
* **Font Awesome** – Icons
* **Google Fonts** – Poppins font

## 📂 Project Structure

```text
garments/
│
├── index.html
├── kids.html
├── mens.html
├── ladies.html
├── billing.html
│
├── style.css
├── script.js
├── server.js
│
├── package.json
├── package-lock.json
│
└── images/
    ├── kid1.jpg
    ├── kid2.jpg
    ├── kid3.jpg
    ├── kid4.jpg
    ├── kid5.jpg
    ├── kid6.jpg
    ├── lady1.jpg
    ├── lady2.jpg
    ├── lady3.jpg
    ├── lady4.jpg
    ├── men1.jpg
    ├── men2.jpg
    ├── men3.jpg
    └── men4.jpg
```

## 🛍️ Product Categories

### 🧒 Kids Wear

The Kids collection includes:

* Kids T-Shirt
* Kids Hoodie
* Kids Party Dress
* Kids Jeans
* Kids Jacket
* Kids Frock

### 👔 Men's Wear

The Men's collection includes:

* Formal Shirt
* Casual Shirt
* Men Jeans
* Men Jacket

### 👗 Ladies Wear

The Ladies collection includes:

* Designer Saree
* Party Wear Dress
* Kurti Set
* Western Dress

## 🛒 Billing System

The website includes a simple client-side billing system.

When a user clicks **Add To Bill**:

1. The selected product is added to the cart.
2. If the product already exists, its quantity is increased.
3. Cart information is stored in browser `localStorage`.
4. The Billing page displays the selected products.
5. The subtotal is calculated using:

```text
Subtotal = Price × Quantity
```

6. The final bill calculates the total amount of all products.
7. Products can be removed individually.
8. The complete bill can also be cleared.

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the Project Folder

```bash
cd garments
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Express Server

```bash
npm start
```

The server will start on:

```text
http://localhost:3000
```

Open the URL in your browser to access the website.

## 🌐 Available Routes

| Page    | Route      |
| ------- | ---------- |
| Home    | `/`        |
| Kids    | `/kids`    |
| Men's   | `/mens`    |
| Ladies  | `/ladies`  |
| Billing | `/billing` |

## 📸 Website Sections

The project contains:

* Home page with hero section
* Category selection
* Product collection pages
* Add-to-bill functionality
* Billing summary
* Shopping cart management
* Footer section

## 🎯 Project Objective

The main objective of this project is to develop a simple and user-friendly garments shopping website while gaining practical experience with:

* Front-end web development
* Responsive web design
* JavaScript DOM manipulation
* Browser Local Storage
* Node.js
* Express.js
* Routing
* Project structure and file organization

## 🔮 Future Enhancements

The project can be further improved by adding:

* 🔐 User Login and Registration
* 🗄️ MongoDB/MySQL database integration
* 💳 Online Payment Gateway
* 🔎 Product Search
* 🏷️ Product Categories and Filters
* ❤️ Wishlist
* 📦 Order Tracking
* 👤 User Profile
* 📱 Improved mobile UI
* 🧾 Downloadable invoices
* 🔧 Admin Dashboard

## 👩‍💻 Developer

**Tharunya**

B.Tech – Computer Science and Engineering

## 📄 License

This project is created for educational and learning purposes.
