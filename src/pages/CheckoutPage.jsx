import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStore } from "../contexts/StoreContext";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  const { cart } = useStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city
    ) {
      alert(
        lang === "ka"
          ? "გთხოვთ, შეავსოთ ყველა ველი"
          : "Please fill all required fields"
      );
      return;
    }

    // შენახვა localStorage-ში
    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      customer: formData,
      items: cart,
      total: calculateTotal(),
      status: "pending",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setOrderPlaced(true);

    // გასუფთავება
    localStorage.removeItem("cart");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-content">
          <h1>✓ {lang === "ka" ? "დაკვეთა დადასტურდა!" : "Order Confirmed!"}</h1>
          <p>
            {lang === "ka"
              ? "გმადლობთ თქვენი შეკვეთისთვის. ჩვენ მალე დაგიკავშირდებით."
              : "Thank you for your order. We will contact you soon."}
          </p>
          <p className="redirect-text">
            {lang === "ka"
              ? "გვერდზე დაბრუნება 3 წამში..."
              : "Redirecting to home in 3 seconds..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form-section">
          <h1>{lang === "ka" ? "გადახდა" : "Checkout"}</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{lang === "ka" ? "სახელი" : "First Name"} *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={lang === "ka" ? "სახელი" : "First Name"}
                  required
                />
              </div>
              <div className="form-group">
                <label>{lang === "ka" ? "გვარი" : "Last Name"} *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={lang === "ka" ? "გვარი" : "Last Name"}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{lang === "ka" ? "ელ. მისამართი" : "Email"} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>{lang === "ka" ? "ტელეფონი" : "Phone"} *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+995 5XX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>{lang === "ka" ? "მისამართი" : "Address"} *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={lang === "ka" ? "ამ ქვ." : "Street address"}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{lang === "ka" ? "ქალაქი" : "City"} *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder={lang === "ka" ? "ქალაქი" : "City"}
                  required
                />
              </div>
              <div className="form-group">
                <label>{lang === "ka" ? "საფოსტო კოდი" : "Zip Code"}</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder={lang === "ka" ? "კოდი" : "Zip Code"}
                />
              </div>
            </div>

            <div className="form-group">
              <label>{lang === "ka" ? "გადახდის მეთოდი" : "Payment Method"}</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="card">
                  {lang === "ka" ? "საკრედიტო ბარათი" : "Credit Card"}
                </option>
                <option value="transfer">
                  {lang === "ka" ? "ბანკის ტრანსფერი" : "Bank Transfer"}
                </option>
                <option value="cash">
                  {lang === "ka" ? "ნაღდი" : "Cash on Delivery"}
                </option>
              </select>
            </div>

            <button type="submit" className="checkout-btn">
              {lang === "ka" ? "დაკვეთის დასრულება" : "Complete Order"}
            </button>
          </form>
        </div>

        <div className="order-summary-section">
          <h2>{lang === "ka" ? "დაკვეთის რეზიუმე" : "Order Summary"}</h2>

          {cart.length === 0 ? (
            <p>{lang === "ka" ? "კალათა ცარიელია" : "Cart is empty"}</p>
          ) : (
            <>
              <div className="order-items">
                {cart.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-name">{item.name}</div>
                    <div className="item-qty">{item.qty}x</div>
                    <div className="item-price">{(item.price * item.qty).toFixed(2)}₾</div>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>{lang === "ka" ? "სულ:" : "Total:"}</span>
                <span className="total-amount">{calculateTotal().toFixed(2)}₾</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
