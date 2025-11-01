import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "./contexts/AccessibilityContext"; // named import
import { StoreProvider } from "./contexts/StoreContext";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import Contact from "./components/Contact";
import About from "./components/About";
import SearchResults from "./pages/SearchResults";
import DecorationCandle from "./components/images/products/DecorationCandle";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

function InnerApp() {
  const currentLang = "ka";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><BestSellers /></>} />
        <Route path="/contact" element={<Contact lang={currentLang} />} />
        <Route path="/about" element={<About lang={currentLang} />} />
        <Route path="/search" element={<SearchResults lang={currentLang} />} />
        <Route path="/products/decoration-candle" element={<DecorationCandle lang={currentLang} />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
   <AccessibilityProvider>
  <StoreProvider>
    <InnerApp />
  </StoreProvider>
</AccessibilityProvider>

  );
}
