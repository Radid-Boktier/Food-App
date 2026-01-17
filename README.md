# 🍔 Food Delivery App (Frontend)

A **frontend-focused Food Delivery Application** built with **React**. The app allows users to browse meals, add items to a cart, calculate totals, and complete a smooth, modal-based checkout flow using a simulated API.


---

## ✨ Features

### 🛒 Cart Management

* Add and remove items from the cart
* Automatically handle item quantities
* Clear cart after successful checkout
* Global state management using **React Context + useReducer**

### 🧾 Checkout Flow

* Modal-based checkout interface
* Form handling using **`useActionState`**
* Displays total order amount
* Success confirmation modal after order submission

### 🌐 Data Handling

* Uses **`useHTTP` custom hook** for API calls
* Centralized loading and error handling
* Supports GET and POST requests (dummy/mock backend)

### ⚠️ Error Handling

* Reusable `Error` component
* Graceful handling of network or request errors

### 🪟 UI & UX

* Reusable modal component using **React Portals**
* Escape-key support for closing modals
* Clean and responsive interface

---

## 🛠 Tech Stack

* **React**
* React Hooks (`useState`, `useEffect`, `useReducer`, `useContext`, `useActionState`)
* Context API for global state
* Custom Hooks for data fetching
* CSS for styling and responsive design

---

## 📂 Project Structure

```
Food-app/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   ├── Modal.jsx
│   │   ├── Error.jsx
│   │   └── UI components
│   ├── hooks/
│   │   └── useHTTP.js
│   ├── store/
│   │   ├── CartContext.jsx
│   │   └── UserProgressContext.jsx
│   ├── util/
│   │   └── formatter.js
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Radid-Boktier/Food-App
cd food-delivery-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

Your app will run locally and be ready for development.

---

## 🧠 Key Learnings

* Global state management using **Context + Reducer**
* Building reusable **custom hooks**
* Handling async form submissions using **useActionState**
* Managing complex UI flows with modals
* Clean component architecture and separation of concerns

---



