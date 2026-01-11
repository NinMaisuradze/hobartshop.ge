import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { convertPrice, getCurrency } from "../utils";
import { Link } from "react-router-dom";
import "./OrdersHistory.css";

export default function OrdersHistory() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.sort((a, b) => b.id - a.id));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <div className="empty-content">
          <h2>{lang === "ka" ? "დაკვეთები ვერ მოიძებნა" : "No Orders Found"}</h2>
          <p>
            {lang === "ka"
              ? "თქვენ ჯერ დაკვეთა არ გაქვთ"
              : "You haven't placed any orders yet"}
          </p>
          <Link to="/" className="back-to-shop">
            {lang === "ka" ? "მაღაზიაში დაბრუნება" : "Continue Shopping"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1>{lang === "ka" ? "ჩემი დაკვეთები" : "My Orders"}</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>
                  {lang === "ka" ? "შეკვეთა #" : "Order #"}
                  {order.id}
                </h3>
                <p className="order-date">
                  {lang === "ka" ? "თარიღი: " : "Date: "}
                  {order.date}
                </p>
              </div>
              <div className="order-status">
                <span className={`status-badge status-${order.status}`}>
                  {order.status === "pending"
                    ? lang === "ka"
                      ? "მოწმენდილი"
                      : "Pending"
                    : lang === "ka"
                    ? "დასრულებული"
                    : "Completed"}
                </span>
              </div>
            </div>

            <div className="order-items">
              <h4>{lang === "ka" ? "პროდუქტები:" : "Items:"}</h4>
              <table className="items-table">
                <thead>
                  <tr>
                    <th>{lang === "ka" ? "სახელი" : "Name"}</th>
                    <th>{lang === "ka" ? "რაოდენობა" : "Qty"}</th>
                    <th>{lang === "ka" ? "ფასი" : "Price"}</th>
                    <th>{lang === "ka" ? "სულ" : "Total"}</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name || item.title}</td>
                      <td>{item.qty}</td>
                      <td>{convertPrice(item.price, i18n.language)}{getCurrency(i18n.language)}</td>
                      <td className="item-total">{convertPrice(item.price * item.qty, i18n.language)}{getCurrency(i18n.language)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="order-details">
              <div className="customer-info">
                <h4>{lang === "ka" ? "მომხმარებელი" : "Customer"}</h4>
                <p>
                  {order.customer.firstName} {order.customer.lastName}
                </p>
                <p>{order.customer.email}</p>
                <p>{order.customer.phone}</p>
                <p>{order.customer.address}, {order.customer.city}</p>
              </div>

              <div className="payment-info">
                <h4>{lang === "ka" ? "გადახდა" : "Payment"}</h4>
                <p>
                  {lang === "ka" ? "მეთოდი: " : "Method: "}
                  {order.customer.paymentMethod === "card"
                    ? lang === "ka"
                      ? "საკრედიტო ბარათი"
                      : "Credit Card"
                    : order.customer.paymentMethod === "transfer"
                    ? lang === "ka"
                      ? "ბანკის ტრანსფერი"
                      : "Bank Transfer"
                    : lang === "ka"
                    ? "ნაღდი"
                    : "Cash on Delivery"}
                </p>
              </div>

              <div className="order-total-section">
                <h4>{lang === "ka" ? "სულ:" : "Total:"}</h4>
                <p className="total-amount">{convertPrice(order.total, i18n.language)}{getCurrency(i18n.language)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="orders-footer">
        <Link to="/" className="back-to-shop">
          {lang === "ka" ? "მაღაზიაში დაბრუნება" : "Continue Shopping"}
        </Link>
      </div>
    </div>
  );
}
