import { MegaMenuCategory } from '../types';

export const navigationCategories: MegaMenuCategory[] = [
  {
    id: 'new-in',
    title: 'NEW IN',
    href: '#new-in',
    columns: [
      {
        title: 'SHOP BY CATEGORY',
        items: [
          { name: 'View All New In', href: '#new-in' },
          { name: 'Dresses', href: '#dresses' },
          { name: 'Tops & Shirts', href: '#tops' },
          { name: 'Co-ord Sets', href: '#co-ords' },
          { name: 'Jumpsuits', href: '#jumpsuits' },
          { name: 'Trousers & Pants', href: '#bottoms' },
          { name: 'Blazers & Jackets', href: '#jackets' },
        ],
      },
      {
        title: 'COLLECTIONS',
        items: [
          { name: 'Exquisite Evenings', href: '#evenings' },
          { name: 'Workwear Edit', href: '#workwear' },
          { name: 'Seen AND Styled', href: '#seen-and-styled' },
          { name: 'Minimalist Luxe', href: '#minimalist' },
          { name: 'Resort & Travel', href: '#travel' },
        ],
      },
      {
        title: 'TRENDING NOW',
        items: [
          { name: 'Monochrome Magic', href: '#monochrome' },
          { name: 'Power Tailoring', href: '#tailoring' },
          { name: 'Statement Florals', href: '#florals' },
          { name: 'Effortless Linen', href: '#linen' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4eb4be3d/Refresh-2026/september/Refresh-11-sep/Desktop/Header/HEADER-banner-desktop.jpg',
      title: 'NEW SEASON ARRIVALS',
      subtitle: 'Modern silhouettes designed for the contemporary woman',
      link: '#new-in',
    },
  },
  {
    id: 'clothing',
    title: 'CLOTHING',
    href: '#clothing',
    columns: [
      {
        title: 'DRESSES',
        items: [
          { name: 'All Dresses', href: '#dresses' },
          { name: 'Midi Dresses', href: '#midi' },
          { name: 'Maxi Dresses', href: '#maxi' },
          { name: 'A-Line & Fit Flare', href: '#a-line' },
          { name: 'Shirt Dresses', href: '#shirt-dresses' },
          { name: 'Little Black Dresses', href: '#lbd' },
        ],
      },
      {
        title: 'TOPS & SHIRTS',
        items: [
          { name: 'All Tops', href: '#tops' },
          { name: 'Formal Shirts', href: '#shirts' },
          { name: 'Casual Blouses', href: '#blouses' },
          { name: 'Tunics', href: '#tunics' },
          { name: 'Crop Tops', href: '#crop-tops' },
        ],
      },
      {
        title: 'CO-ORDS & SUITS',
        items: [
          { name: 'Two-Piece Sets', href: '#co-ords' },
          { name: 'Blazer & Trouser Sets', href: '#power-suits' },
          { name: 'Skirt Sets', href: '#skirt-sets' },
          { name: 'Jumpsuits & Playsuits', href: '#jumpsuits' },
        ],
      },
      {
        title: 'BOTTOMS',
        items: [
          { name: 'Tailored Trousers', href: '#trousers' },
          { name: 'Wide-Leg Pants', href: '#wide-leg' },
          { name: 'Culottes & Palazzos', href: '#culottes' },
          { name: 'Midi & Pencil Skirts', href: '#skirts' },
          { name: 'Denim', href: '#denim' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
      title: 'ICONIC ESSENTIALS',
      subtitle: 'From desk to dinner',
      link: '#clothing',
    },
  },
  {
    id: 'occasions',
    title: 'OCCASIONS',
    href: '#occasions',
    columns: [
      {
        title: 'SHOP BY OCCASION',
        items: [
          { name: 'Workwear & Formal', href: '#workwear' },
          { name: 'Cocktail & Evening', href: '#cocktail' },
          { name: 'Sunday Brunch & Day Outs', href: '#brunch' },
          { name: 'Vacation & Resort Wear', href: '#resort' },
          { name: 'Festive & Celebration', href: '#festive' },
        ],
      },
      {
        title: 'CURATED EDITS',
        items: [
          { name: 'Power Dressing', href: '#power-dressing' },
          { name: 'Satin & Silk Luxe', href: '#satin' },
          { name: 'Linen Collection', href: '#linen' },
          { name: 'Contemporary Florals', href: '#florals' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
      title: 'CELEBRATE IN STYLE',
      subtitle: 'Effortless glamour for every moment',
      link: '#occasions',
    },
  },
  {
    id: 'curves',
    title: 'CURVES',
    href: '#curves',
    columns: [
      {
        title: 'PLUS SIZE STYLES',
        items: [
          { name: 'View All Curves', href: '#curves' },
          { name: 'Curve Dresses', href: '#curve-dresses' },
          { name: 'Curve Tops & Tunics', href: '#curve-tops' },
          { name: 'Curve Co-ords', href: '#curve-coords' },
          { name: 'Curve Bottomwear', href: '#curve-bottoms' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&q=80',
      title: 'AND CURVES',
      subtitle: 'Flattering silhouettes crafted for every curve',
      link: '#curves',
    },
  },
  {
    id: 'jewellery',
    title: 'JEWELLERY',
    href: '#jewellery',
    columns: [
      {
        title: 'EXPLORE JEWELLERY',
        items: [
          { name: 'All Jewellery', href: '#jewellery' },
          { name: 'Earrings & Studs', href: '#earrings' },
          { name: 'Chic Necklaces', href: '#necklaces' },
          { name: 'Bracelets & Cuffs', href: '#bracelets' },
          { name: 'Rings', href: '#rings' },
          { name: 'Jewellery Sets', href: '#sets' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
      title: 'FINE ACCENTS',
      subtitle: 'Modern statement jewellery to elevate any outfit',
      link: '#jewellery',
    },
  },
  {
    id: 'shoes-bags',
    title: 'SHOES & BAGS',
    href: '#shoes-bags',
    columns: [
      {
        title: 'FOOTWEAR',
        items: [
          { name: 'All Shoes', href: '#shoes' },
          { name: 'Block Heels & Pumps', href: '#heels' },
          { name: 'Flats & Slides', href: '#flats' },
          { name: 'Strappy Sandals', href: '#sandals' },
        ],
      },
      {
        title: 'BAGS & ACCESSORIES',
        items: [
          { name: 'All Bags', href: '#bags' },
          { name: 'Tote Bags', href: '#totes' },
          { name: 'Crossbody & Sling', href: '#slings' },
          { name: 'Evening Clutches', href: '#clutches' },
          { name: 'Belts & Scarves', href: '#belts' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      title: 'BAGS & ACCESSORIES',
      subtitle: 'The finishing touch to your ensemble',
      link: '#shoes-bags',
    },
  },
  {
    id: 'sale',
    title: 'SALE',
    href: '#sale',
    isHighlighted: true,
    columns: [
      {
        title: 'SPECIAL OFFERS',
        items: [
          { name: 'View All Sale', href: '#sale', isSale: true },
          { name: 'Flat 50% Off', href: '#sale-50', isSale: true },
          { name: 'Flat 40% Off', href: '#sale-40', isSale: true },
          { name: 'Under ₹1,499', href: '#under-1499', isSale: true },
          { name: 'Under ₹1,999', href: '#under-1999', isSale: true },
          { name: 'Last Chance to Buy', href: '#last-chance', isSale: true },
        ],
      },
    ],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
      title: 'SEASON END SALE',
      subtitle: 'Up to 60% off on signature styles',
      link: '#sale',
    },
  },
];
