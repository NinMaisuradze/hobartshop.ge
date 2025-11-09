export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  CONTACT: '/contact',
  PRODUCTS: {
    DECORATION_CANDLE: '/products/decoration-candle',
    HOLIDAY_CANDLE: '/products/holiday-candle',
    EPOXY_DECOR: '/products/epoxy-decor',
    ACCESSORIES: '/products/accessories',
    PLASTER_DECOR: '/products/plaster-decor',
    FELT_TOYS: '/products/felt-toys',
  },
  SEARCH: '/search',
  CART: '/cart',
  WISHLIST: '/wishlist'
};

export const LANGUAGES = {
  KA: 'ka',
  EN: 'en'
};

export const API = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    PRODUCTS: '/api/products',
    ORDERS: '/api/orders',
   
  }
};


export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1440px'
};