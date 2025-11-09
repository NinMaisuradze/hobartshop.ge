export const generateProductJsonLd = (product) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GEL',
      price: product.price?.replace('₾', '').trim() || '',
      availability: 'https://schema.org/InStock'
    },
    brand: {
      '@type': 'Brand',
      name: 'HobArt'
    }
  };
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HobArt',
  url: 'https://hobartshop.ge',
  logo: 'https://hobartshop.ge/logo.png',
  description: 'ხელნაკეთი სანთლები, დეკორი და საჩუქრები',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GE',
    addressLocality: 'თბილისი'
  },
  sameAs: [
    'https://facebook.com/hobartshop',
    'https://instagram.com/hobartshop'
  ]
};