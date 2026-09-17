import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'and-new-001',
    name: 'Solid Knit Top in Off White',
    category: 'Tops',
    subcategory: 'Knitwear',
    price: 3990,
    originalPrice: 3990,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Off White', hex: '#f8f6f0' },
      { name: 'Black', hex: '#1e1e1e' }
    ],
    image: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw2cdce17c/images/hires/SS22/F26F9KTAC_OFF-WHITE%20-9.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    hoverImage: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw2cdce17c/images/hires/SS22/F26F9KTAC_OFF-WHITE%20-1.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    isNew: true,
    description: 'Sleeveless smart casual knit top featuring a high neckline, ribbed knit texture, and side gold zipper details.'
  },
  {
    id: 'and-new-002',
    name: 'Solid Satin Skirt in Warm Olive',
    category: 'Bottoms',
    subcategory: 'Skirts',
    price: 3490,
    originalPrice: 3490,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Olive', hex: '#9d8e58' }
    ],
    image: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwdf35f5c8/images/hires/SS22/F26R9SKRSTN_WARM%20OLIVE-1.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    hoverImage: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwdf35f5c8/images/hires/SS22/F26R9SKRSTN_WARM%20OLIVE-2.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    isNew: true,
    description: 'Long-length high-rise satin wrap skirt in warm olive with an asymmetric curved hemline, tie-waist accent, and concealed closure.'
  },
  {
    id: 'and-new-003',
    name: 'Solid T-shirt in Teal',
    category: 'Tops',
    subcategory: 'T-Shirts',
    price: 1290,
    originalPrice: 1290,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Teal', hex: '#266567' }
    ],
    image: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwb741756b/images/hires/SS22/F26P54TRIB_TEAL-1.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    hoverImage: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwb741756b/images/hires/SS22/F26P54TRIB_TEAL-2.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    isNew: true,
    description: 'Fitted ribbed round neck tee in deep teal tone, made from ultra-soft stretchable cotton blend for everyday chic.'
  },
  {
    id: 'and-new-004',
    name: 'Halter Satin Top in Warm Olive',
    category: 'Tops',
    subcategory: 'Blouses',
    price: 2290,
    originalPrice: 2290,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Warm Olive', hex: '#9d8e58' }
    ],
    image: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwcd0f99d9/images/hires/SS22/F26R14TRSTN_WARM%20OLIVE-1.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    hoverImage: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwcd0f99d9/images/hires/SS22/F26R14TRSTN_WARM%20OLIVE-2.jpg?sw=1400&sh=2100&sm=fit&strip=false',
    isNew: true,
    description: 'Sleek satin halter top in warm olive featuring an asymmetric wrap drape hemline and ring halter neckline.'
  },
  {
    id: 'and-001',
    name: 'Belted Emerald Green Pleated Midi Dress',
    category: 'Dresses',
    subcategory: 'Midi Dresses',
    price: 2799,
    originalPrice: 3999,
    discountPercentage: 30,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Emerald', hex: '#165b4c' },
      { name: 'Navy', hex: '#0f3e72' },
      { name: 'Black', hex: '#1e1e1e' }
    ],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    tag: 'NEW IN',
    description: 'Elevate your daytime-to-evening aesthetic with this pleated midi dress featuring a cinched fabric belt, notched lapel collar, and subtle accordion flare.'
  },
  {
    id: 'and-002',
    name: 'Tailored Ivory Linen Blazer & Trouser Co-ord',
    category: 'Co-ords',
    subcategory: 'Two-Piece Sets',
    price: 4999,
    originalPrice: 6999,
    discountPercentage: 28,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', hex: '#fdfbf7' },
      { name: 'Sand', hex: '#d2b48c' }
    ],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    tag: 'BESTSELLER',
    description: 'Crisp, contemporary power tailoring crafted from breathable premium linen blend. Perfect for effortless boardroom presence or upscale dining.'
  },
  {
    id: 'and-003',
    name: 'Midnight Floral Wrap Front Maxi Gown',
    category: 'Occasions',
    subcategory: 'Evening Wear',
    price: 3499,
    originalPrice: 4999,
    discountPercentage: 30,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Floral Print', hex: '#2b3240' }
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    tag: 'EXQUISITE EVENINGS',
    description: 'Sensual fluidity meets modern sophistication. Designed with a crossover V-neckline, cascading tiered hemline, and delicate tie waistband.'
  },
  {
    id: 'and-004',
    name: 'Satin Lustre Cobalt Blue Asymmetrical Top',
    category: 'Tops',
    subcategory: 'Blouses',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 29,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cobalt Blue', hex: '#1c39bb' },
      { name: 'Champagne', hex: '#f7e7ce' }
    ],
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    isBestseller: false,
    tag: 'TRENDING',
    description: 'Silky smooth drape top with one-shoulder fluid gather detail. Pairs impeccably with high-waisted tailored pants or metallic pencil skirts.'
  },
  {
    id: 'and-005',
    name: 'Sculpted Wide-Leg High-Rise Trousers',
    category: 'Bottoms',
    subcategory: 'Trousers',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    sizes: ['26', '28', '30', '32', '34'],
    colors: [
      { name: 'Caramel', hex: '#af6e4d' },
      { name: 'Black', hex: '#1e1e1e' },
      { name: 'Cream', hex: '#fffdd0' }
    ],
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    tag: 'WORKWEAR EDIT',
    description: 'Sharp front pleats with a seamless wide-leg contour. Designed to elongate the silhouette while delivering all-day boardroom comfort.'
  },
  {
    id: 'and-006',
    name: 'Champagne Gold Interlocking Statement Drop Earrings',
    category: 'Jewellery',
    subcategory: 'Earrings',
    price: 1199,
    originalPrice: 1699,
    discountPercentage: 29,
    sizes: ['Free Size'],
    colors: [
      { name: 'Gold', hex: '#ceac51' }
    ],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    tag: 'JEWELLERY',
    description: 'Sculptural molten gold aesthetic designed to catch the light at every angle. Lightweight alloy with hypoallergenic posts.'
  },
  {
    id: 'and-007',
    name: 'Crimson Wine Cut-Out Shoulder Jumpsuit',
    category: 'Clothing',
    subcategory: 'Jumpsuits',
    price: 3699,
    originalPrice: 5299,
    discountPercentage: 30,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Wine', hex: '#722f37' },
      { name: 'Jet Black', hex: '#111111' }
    ],
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    isBestseller: true,
    tag: 'PARTY EDIT',
    description: 'Make an unmistakable impression in this tailored cut-out shoulder jumpsuit featuring straight legs and an included metallic-accent buckle belt.'
  },
  {
    id: 'and-008',
    name: 'Minimalist Textured Structured Tote Bag',
    category: 'Shoes & Bags',
    subcategory: 'Bags',
    price: 2599,
    originalPrice: 3599,
    discountPercentage: 27,
    sizes: ['Regular'],
    colors: [
      { name: 'Tan Brown', hex: '#99582a' },
      { name: 'Onyx Black', hex: '#1e1e1e' }
    ],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    isNew: false,
    tag: 'ACCESSORIES',
    description: 'Spacious everyday tote with dedicated 14-inch laptop compartment, polished gold-tone hardware, and durable pebbled vegan leather.'
  }
];

export const heroBanners = [
  {
    id: 'hero-1',
    desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4eb4be3d/Refresh-2026/september/Refresh-11-sep/Desktop/Header/HEADER-banner-desktop.jpg',
    mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw5acbc188/Refresh-2026/september/Refresh-11-sep/Mobile/Header/HEADER-banner-mobile.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85',
    title: 'CONTEMPORARY CHIC',
    subtitle: 'THE AUTUMN / WINTER EDIT',
    ctaText: 'SHOP THE COLLECTION',
    link: '#new-in'
  },
  {
    id: 'hero-2',
    desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwa28572f6/Refresh-2026/september/Refresh-11-sep/Desktop/Header/HEADER-banner2-desktop.jpg',
    mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw5acbc188/Refresh-2026/september/Refresh-11-sep/Mobile/Header/HEADER-banner2-mobile.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=85',
    title: 'POWER TAILORING',
    subtitle: 'EFFORTLESS WORKWEAR FOR MODERN WOMEN',
    ctaText: 'EXPLORE SUITS & CO-ORDS',
    link: '#clothing'
  }
];

export interface CategoryItem {
  id: string;
  title: string;
  desktopImg: string;
  mobileImg?: string;
  fallbackImg: string;
  link: string;
  categoryFilter: string;
}

export interface CategoryTab {
  id: 'clothing' | 'accessories';
  label: string;
  items: CategoryItem[];
}

export const categoryTabs: CategoryTab[] = [
  {
    id: 'clothing',
    label: 'Clothing',
    items: [
      {
        id: 'cat-dresses',
        title: 'Shop Dresses',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw992b87b7/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/1-dresses.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw79742e17/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/1-dresses.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
        link: '#dresses',
        categoryFilter: 'Dresses'
      },
      {
        id: 'cat-tops',
        title: 'Shop Tops',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw1a617e63/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/2-tops.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw1a617e63/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/2-tops.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
        link: '#tops',
        categoryFilter: 'Tops'
      },
      {
        id: 'cat-coords',
        title: 'Shop Co-ords',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw57652133/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/3-coords.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwb87ed20e/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/3-coords.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
        link: '#co-ords',
        categoryFilter: 'Co-ords'
      },
      {
        id: 'cat-bottoms',
        title: 'Shop Bottoms',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4f2bb173/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/4-bottoms.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4f2bb173/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/4-bottoms.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
        link: '#bottoms',
        categoryFilter: 'Bottoms'
      }
    ]
  },
  {
    id: 'accessories',
    label: 'Accessories',
    items: [
      {
        id: 'cat-belts',
        title: 'Shop Belts',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwaba09d12/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/accessories/1-belts.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw61d1d414/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/accessories/1-belts.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
        link: '#belts',
        categoryFilter: 'Accessories'
      },
      {
        id: 'cat-jewellery',
        title: 'Shop Accessories',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw53c06225/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/accessories/2-jewellery.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw53c06225/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/accessories/2-jewellery.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
        link: '#accessories',
        categoryFilter: 'Accessories'
      },
      {
        id: 'cat-scarves',
        title: 'Shop Scarves',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw7ee144f0/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/accessories/3-scarves.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw15ae7562/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/accessories/3-scarves.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
        link: '#scarves',
        categoryFilter: 'Accessories'
      },
      {
        id: 'cat-fragrances',
        title: 'Shop Fragrances',
        desktopImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw1ad61bfb/Refresh-2026/september/Refresh-11-sep/Desktop/Categories/accessories/4-perfumes.jpg',
        mobileImg: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwa020b944/Refresh-2026/september/Refresh-11-sep/Mobile/Categories/accessories/4-perfumes.jpg',
        fallbackImg: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
        link: '#fragrances',
        categoryFilter: 'Accessories'
      }
    ]
  }
];

// For backward compatibility
export const categoryShowcase = categoryTabs[0].items.map((item) => ({
  title: item.title,
  subtitle: '',
  count: '',
  img: item.desktopImg,
  link: item.link,
}));

export const seenAndStyled = [
  {
    id: 'seen-1',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw417a14b9/Website_Videos/watch-and-buy/Steffhy_1_cover.jpeg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw0571bdac/Website_Videos/watch-and-buy/Steffhy_1_fullVideo.mp4',
    title: 'Steffhy in AND'
  },
  {
    id: 'seen-2',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw8a16210f/Website_Videos/watch-and-buy/Manpreet_2_cover.jpeg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwabd9eee8/Website_Videos/watch-and-buy/Manpreet_2_fullVideo.mp4',
    title: 'Manpreet in AND'
  },
  {
    id: 'seen-3',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwc4274a67/Website_Videos/watch-and-buy/Aanchal_cover.jpeg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw64e4c400/Website_Videos/watch-and-buy/Aanchal_3_fullVideo.mp4',
    title: 'Aanchal in AND'
  },
  {
    id: 'seen-4',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw491bc517/Website_Videos/watch-and-buy/Ahana_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw34da2c70/Website_Videos/watch-and-buy/Ahana.mp4',
    title: 'Ahana in AND'
  },
  {
    id: 'seen-5',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwc5220845/Website_Videos/watch-and-buy/Eshna_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw3d6b20cd/Website_Videos/watch-and-buy/Eshna.mp4',
    title: 'Eshna in AND'
  },
  {
    id: 'seen-6',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw9345f2a2/Website_Videos/watch-and-buy/Ishita_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwcced08e6/Website_Videos/watch-and-buy/Ishita.mp4',
    title: 'Ishita in AND'
  },
  {
    id: 'seen-7',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw8d646768/Website_Videos/watch-and-buy/Priya_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwe52c8521/Website_Videos/watch-and-buy/Priya.mp4',
    title: 'Priya in AND'
  },
  {
    id: 'seen-8',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw9eea1fc6/Website_Videos/watch-and-buy/Punanya_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwe23ed260/Website_Videos/watch-and-buy/Punanya.mp4',
    title: 'Punanya in AND'
  },
  {
    id: 'seen-9',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw178d1769/Website_Videos/watch-and-buy/Rachana_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw2efb1ed3/Website_Videos/watch-and-buy/Rachana.mp4',
    title: 'Rachana in AND'
  },
  {
    id: 'seen-10',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw4dee1d2f/Website_Videos/watch-and-buy/Ruhanee_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwb14e11c3/Website_Videos/watch-and-buy/Ruhanee.mp4',
    title: 'Ruhanee in AND'
  },
  {
    id: 'seen-11',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwf7a9e47f/Website_Videos/watch-and-buy/Shreya_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwba8df6dc/Website_Videos/watch-and-buy/Shreya.mp4',
    title: 'Shreya in AND'
  },
  {
    id: 'seen-12',
    poster: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw15def62e/Website_Videos/watch-and-buy/Urmi_cover.jpg',
    videoUrl: 'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw985cdd4d/Website_Videos/watch-and-buy/Urmi.mp4',
    title: 'Urmi in AND'
  }
];
