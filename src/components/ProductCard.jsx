import { useStore } from "../contexts/StoreContext";
import { useTranslation } from "react-i18next";
import { convertPrice, getCurrency } from "../utils";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const { i18n } = useTranslation();

  const isWished = wishlist.some((p) => p.id === product.id);

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="rounded mb-3 h-40 object-cover"
      />
      <h2 className="font-medium">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.desc}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-semibold">{convertPrice(product.price, i18n.language)}{getCurrency(i18n.language)}</span>
        <div className="flex gap-2">
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-2 rounded-full border ${
              isWished ? "bg-pink-100 text-pink-600" : "text-gray-500"
            }`}
          >
            ♥
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
