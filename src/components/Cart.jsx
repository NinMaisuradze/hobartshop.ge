import { Link } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import { useTranslation } from "react-i18next";
import "./Cart.css";

const GEL_TO_USD = 0.37; // ამჟამინდელი კურსი

const isEnglishLang = (lang) => {
  if (!lang || typeof lang !== "string") return false;
  return lang === "en" || lang.startsWith("en") || lang.includes("en");
};

const convertPrice = (price, lang) => {
  const isEn = isEnglishLang(lang);
  if (isEn) {
    return (price * GEL_TO_USD).toFixed(2);
  }
  return price.toFixed(2);
};

const getCurrency = (lang) => (isEnglishLang(lang) ? "$" : "₾");

export default function Cart() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { cart, removeFromCart, changeQty } = useStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const shippingPrice = totalPrice > 100 ? 0 : 5;
    const finalTotal = totalPrice + shippingPrice;

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
         {lang === "ka" ? "კალათა" : "Shopping Cart"}
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
                  <p className="item-price">
                    {convertPrice(item.price, lang)}{getCurrency(lang)}
                  </p>
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

                <div className="item-total">
                  {convertPrice(item.price * item.qty, lang)}{getCurrency(lang)}
                </div>

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
             <span>{convertPrice(totalPrice, lang)}{getCurrency(lang)}</span>
          </div>

          <div className="summary-row">
              <span>{lang === "ka" ? "ს ტრანსპორტირება:" : "Shipping:"}</span>
            <span className="shipping">
                {shippingPrice === 0 ? (
                  <span className="discount">{lang === "ka" ? "უფასო" : "FREE"}</span>
              ) : (
                  convertPrice(shippingPrice, lang) + getCurrency(lang)
              )}
            </span>
          </div>

          <div className="summary-row total">
            <span>{lang === "ka" ? "სულ:" : "Total:"}</span>
            <span>
                {convertPrice(finalTotal, lang)}{getCurrency(lang)}
            </span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            {lang === "ka" ? "გადახდაზე გადასვლა" : "Proceed to Checkout"}
          </Link>

          <Link to="/" className="continue-shopping">
            {lang === "ka" ? "შოპინგის გაგრძელება" : "Continue Shopping"}
          </Link>

          {shippingPrice === 0 && (
            <div className="free-shipping-badge">
              ✓ {lang === "ka" ? "უფასო მტვერი" : "Free Shipping"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
