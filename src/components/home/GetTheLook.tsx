import React, { useRef } from 'react';
import { Product } from '../../types';

interface GetTheLookItem {
  id: string;
  name: string;
  titleLines: string[];
  price: number;
  image: string;
  aspectClass: string;
  objectPosition: string;
}

export const getTheLookItems: GetTheLookItem[] = [
  {
    id: 'gtl-001',
    name: 'Oversized Shirt in White',
    titleLines: ['Oversized Shirt', 'in White'],
    price: 2590,
    image: '/images/get-the-look/item-1-shirt.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-[center_28%]',
  },
  {
    id: 'gtl-002',
    name: 'Flared Black Culottes',
    titleLines: ['Flared Black', 'Culottes'],
    price: 2590,
    image: '/images/get-the-look/item-2-culottes.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-top',
  },
  {
    id: 'gtl-003',
    name: 'Bar & Crystal Chain Bracelet',
    titleLines: ['Bar & Crystal', 'Chain Bracelet'],
    price: 903,
    image: '/images/get-the-look/item-3-bracelet.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-center',
  },
  {
    id: 'gtl-004',
    name: 'Dainty Pearl Earrings',
    titleLines: ['Dainty Pearl', 'Earrings'],
    price: 790,
    image: '/images/get-the-look/item-4-earrings.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-center',
  },
  {
    id: 'gtl-005',
    name: 'Gold Embellished Cuff & Heart Chain Bracelet',
    titleLines: ['Gold Embellished', 'Cuff Bracelet'],
    price: 990,
    image: '/images/get-the-look/item-5-cuff.jpg',
    aspectClass: 'aspect-[3/4]',
    objectPosition: 'object-center',
  },
];

// Retain typed products list for system compatibility
export const getTheLookProducts: Product[] = getTheLookItems.map((item) => ({
  id: item.id,
  name: item.name,
  category: 'Get The Look',
  price: item.price,
  originalPrice: item.price,
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  image: item.image,
}));

interface GetTheLookProps {
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product, size: string) => void;
  onToggleWishlist?: (product: Product) => void;
  wishlistIds?: string[];
}

export const GetTheLook: React.FC<GetTheLookProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Vertical Scroll with 5 Items */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-full">
            {/* Header directly above column 1 */}
            <h2 className="text-xl sm:text-2xl font-normal text-[#1e1e1e] mb-5 tracking-tight shrink-0">
              Get The Look
            </h2>

            {/* Scrollable list matching column 2 height with hidden scrollbar */}
            <div
              ref={scrollContainerRef}
              className="h-[460px] sm:h-[500px] lg:h-[540px] xl:h-[580px] overflow-y-auto no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-y-6 sm:space-y-7 scroll-smooth"
            >
              {getTheLookItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-end gap-4 sm:gap-5"
                >
                  {/* Item Image with Consistent Aspect Ratio */}
                  <div
                    className="w-[180px] sm:w-[210px] md:w-[230px] aspect-[3/4] shrink-0 bg-[#ebe8e3] overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className={`w-full h-full object-cover ${item.objectPosition}`}
                      onError={(e) => {
                        // Fallback to official CDN if local file is missing
                        const target = e.currentTarget;
                        if (item.id === 'gtl-001') {
                          target.src =
                            'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwd1f448b0/images/hires/SS22/F26P21TRC_WHITE-5.jpg?sw=850&sh=1275&sm=fit&strip=false';
                        } else if (item.id === 'gtl-002') {
                          target.src =
                            'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dwefecfa9c/images/hires/SS22/S26P141BTRF_BLACK%20%20(2).jpg?sw=850&sh=1275&sm=fit&strip=false';
                        }
                      }}
                    />
                  </div>

                  {/* Text Details at the Bottom Right */}
                  <div className="pb-1 min-w-0">
                    <h3 className="text-xs sm:text-[13px] text-[#1e1e1e] font-normal leading-snug">
                      {item.titleLines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-bold text-[#1e1e1e] mt-1.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Static Image Spanning All the Way Vertically */}
          <div className="lg:col-span-7 xl:col-span-8 h-full flex flex-col">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[500px] flex-1 overflow-hidden bg-[#b7b2a8]">
              <picture className="w-full h-full block">
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/get-the-look/get-the-look-mobile.jpg"
                />
                <img
                  src="/images/get-the-look/get-the-look-desktop.jpg"
                  alt="Get The Look"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const cdnUrl =
                      'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwc9d84d28/Refresh-2026/september/Refresh-11-sep/Desktop/Get-the-look/Get-the-look-desktop.jpg';
                    if (target.src !== cdnUrl) {
                      target.src = cdnUrl;
                    }
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
