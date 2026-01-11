import React, { useState } from "react";
import { useStore } from "../contexts/StoreContext";
import { useTranslation } from "react-i18next";
import "./AddToCart.css";

export default function AddToCart({ product }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      id: product.id,
      name: product.name || (product.title ? product.title[lang] : "Product"),
      image: product.image || product.img,
      price: product.price,
      qty: quantity,
    };
    addToCart(cartProduct);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="add-to-cart-section">
      <div className="quantity-selector">
        <label>{lang === "ka" ? "რაოდენობა:" : "Quantity:"}</label>
        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="qty-decrease"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="qty-increase"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className={`add-to-cart-btn ${addedToCart ? "added" : ""}`}
      >
        {addedToCart ? (
          <>
            <span className="checkmark">✓</span>
            {lang === "ka" ? "დამატებულია კალათაში" : "Added to Cart"}
          </>
        ) : (
          <>
            <span className="cart-icon">🛒</span>
            {lang === "ka" ? "კალათაში დამატება" : "Add to Cart"}
          </>
        )}
      </button>

      <div className="product-features">
        <h4>{lang === "ka" ? "პროდუქტის მახასიათებლები:" : "Product Features:"}</h4>
        <ul>
          <li>✓ {lang === "ka" ? "ხელნაკეთი" : "Handmade"}</li>
          <li>✓ {lang === "ka" ? "100% ბუნებრივი მასალები" : "100% Natural Materials"}</li>
          <li>✓ {lang === "ka" ? "ეკოლოგიური" : "Eco-friendly"}</li>
          <li>✓ {lang === "ka" ? "ხარისხის გარანტია" : "Quality Guaranteed"}</li>
        </ul>
      </div>
    </div>
  );
}
