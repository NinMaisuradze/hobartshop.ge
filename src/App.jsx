import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import { StoreProvider } from "./contexts/StoreContext";
import AccessibilityWidget from "./components/AccessibilityWidget";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import Contact from "./components/Contact";
import About from "./components/About";
import SearchResults from "./pages/SearchResults";
import DecorationCandle from "./assets/images/products/DecorationCandle";
import DecorationCandleDetail from "./assets/images/products/DecorationCandleDetail";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

import HolidayCandlePage from "./pages/HolidayCandle";
import HolidayCandleDetail from "./pages/HolidayCandleDetail";

import EpoxyDecor from "./pages/EpoxyDecor";
import EpoxyDecorDetail from "./pages/EpoxyDecorDetail";

import Accessories from "./pages/Accessories";
import AccessoriesDetail from "./pages/AccessoriesDetail";

import PlasterDecor from "./pages/PlasterDecor";
import PlasterDecorDetail from "./pages/PlasterDecorDetail";
import FeltToys from "./pages/FeltToys";
import FeltToysDetail from "./pages/FeltToysDetail";

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

        {/* 🕯 დეკორატიული სანთლები */}
        <Route path="/products/decoration-candle" element={<DecorationCandle lang={currentLang} />} />
        <Route path="/products/decoration-candle/:id" element={<DecorationCandleDetail lang={currentLang} />} />

        {/* 🕯 სადღესასწაულო სანთლები */}
        <Route path="/products/holiday-candle" element={<HolidayCandlePage />} />
        <Route path="/products/holiday-candle/:id" element={<HolidayCandleDetail />} />

        {/* 🖌 Epoxy Decor */}
        <Route path="/products/epoxy-decor" element={<EpoxyDecor />} />
        <Route path="/products/epoxy-decor/:id" element={<EpoxyDecorDetail />} />

        {/* 💍 Accessories */}
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/products/accessories/:id" element={<AccessoriesDetail />} />
        
        {/* თაბაშირის დეკორი */}
        <Route path="/products/plaster-decor" element={<PlasterDecor />} />
        <Route path="/products/plaster-decor/:id" element={<PlasterDecorDetail />} />
        
        {/* თექის სათამაშოები */}
        <Route path="/products/felt-toys" element={<FeltToys />} />
        <Route path="/products/felt-toys/:id" element={<FeltToysDetail />} />

        {/* ბლოგი */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* კალათი და სასურველებში */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
      <AccessibilityWidget />
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
