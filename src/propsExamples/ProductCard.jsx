// src/propsExamples/ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{ border: "2px solid purple", padding: "10px", margin: "8px" }}>
      <h3>Product: {product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductCard;
