import { Link } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import { useTranslation } from "react-i18next";
import "./Cart.css";

export default function Cart() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { cart, removeFromCart, changeQty } = useStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-content">
          <h2>{lang === "ka" ? "კალათა ცარიელია" : "Your Cart is Empty"}</h2>
          <p>
            {lang === "ka"
              ? "დავიწყოთ ხელოვნური საგნების შოპინგი"
              : "Start shopping for beautiful handmade items"}
          </p>
          <Link to="/" className="continue-shopping-btn">
            {lang === "ka" ? "შოპინგის გაგრძელება" : "Continue Shopping"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">
        {lang === "ka" ? "სიტყვა შენი" : "Shopping Cart"}
        <span className="item-count">({totalItems})</span>
      </h1>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image || item.img} alt={item.name || item.title} className="item-image" />

              <div className="item-details">
                <h3>{item.name || item.title}</h3>
                <p className="item-price">{item.price}₾</p>
              </div>

              <div className="quantity-control">
                <button
                  onClick={() => changeQty(item.id, -1)}
                  className="qty-btn"
                  title={lang === "ka" ? "შემცირება" : "Decrease"}
                >
                  −
                </button>
                <span className="qty-value">{item.qty}</span>
                <button
                  onClick={() => changeQty(item.id, 1)}
                  className="qty-btn"
                  title={lang === "ka" ? "გაზრდა" : "Increase"}
                >
                  +
                </button>
              </div>

              <div className="item-total">{(item.price * item.qty).toFixed(2)}₾</div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
                title={lang === "ka" ? "წაშლა" : "Remove"}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>{lang === "ka" ? "რეზიუმე" : "Summary"}</h2>

          <div className="summary-row">
            <span>{lang === "ka" ? "ქვესულ:" : "Subtotal:"}</span>
            <span>{totalPrice.toFixed(2)}₾</span>
          </div>

          <div className="summary-row">
            <span>{lang === "ka" ? "მტვერი და დამუშავება:" : "Shipping:"}</span>
            <span className="shipping">
              {totalPrice > 100 ? (
                <>
                  <span className="discount">უფასო</span>
                </>
              ) : (
                <>
                  5₾
                </>
              )}
            </span>
          </div>

          <div className="summary-row total">
            <span>{lang === "ka" ? "სულ:" : "Total:"}</span>
            <span>
              {(totalPrice + (totalPrice > 100 ? 0 : 5)).toFixed(2)}₾
            </span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            {lang === "ka" ? "გადახდაზე გადასვლა" : "Proceed to Checkout"}
          </Link>

          <Link to="/" className="continue-shopping">
            {lang === "ka" ? "შოპინგის გაგრძელება" : "Continue Shopping"}
          </Link>

          {totalPrice > 100 && (
            <div className="free-shipping-badge">
              ✓ {lang === "ka" ? "უფასო მტვერი" : "Free Shipping"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
