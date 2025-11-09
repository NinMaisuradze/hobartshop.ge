import { useStore } from "../contexts/StoreContext";

export default function Cart() {
  
  const { cart } = useStore(); 

  const items = cart.length ? cart : [
    { id: 1, name: "Decoration Candle", price: 15 },
    { id: 2, name: "Scented Candle", price: 12 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>კალათა</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.price}₾</li>
        ))}
      </ul>
    </div>
  );
}
