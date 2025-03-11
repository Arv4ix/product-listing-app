import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing to handle routing
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

// Main application component
function App() {
  return (

    // Wraps the routes to manage navigation
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
