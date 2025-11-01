import { useStore } from "../contexts/StoreContext";

export default function Wishlist() {
  const { wishlistItems } = useStore();

  const items = wishlistItems.length ? wishlistItems : [
    { id: 1, name: "Luxury Candle" },
    { id: 2, name: "Decorative Candle" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>სურვილების სია</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
