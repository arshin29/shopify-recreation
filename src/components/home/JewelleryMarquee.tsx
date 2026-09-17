import React from 'react';
import { Product } from '../../types';

export interface JewelleryShowcaseItem {
  id: string;
  name: string;
  line1: string;
  line2: string;
  price: number;
  originalPrice: number;
  discount?: string;
  image: string;
}

export const jewelleryShowcaseItems: JewelleryShowcaseItem[] = [
  {
    id: 'jewel-8909300089246',
    name: 'Radiance Pearl Earrings',
    line1: 'Radiance Pearl',
    line2: 'Earrings',
    price: 890,
    originalPrice: 890,
    image: '/images/jewellery/radiance-pearl-earrings.jpg'
  },
  {
    id: 'jewel-8909300089222',
    name: 'Pearl Gleam Earrings',
    line1: 'Pearl Gleam',
    line2: 'Earrings',
    price: 763,
    originalPrice: 1090,
    discount: '30% Off',
    image: '/images/jewellery/pearl-gleam-earrings.jpg'
  },
  {
    id: 'jewel-8909300089239',
    name: 'Subtle Style Earrings',
    line1: 'Subtle Style',
    line2: 'Earrings',
    price: 693,
    originalPrice: 990,
    discount: '30% Off',
    image: '/images/jewellery/subtle-style-earrings.jpg'
  },
  {
    id: 'jewel-8905724959400',
    name: 'Pearl Twist Gold Earrings',
    line1: 'Pearl Twist',
    line2: 'Gold Earrings',
    price: 623,
    originalPrice: 890,
    discount: '30% Off',
    image: '/images/jewellery/pearl-twist-gold-earrings.jpg'
  },
  {
    id: 'jewel-8905724959394',
    name: 'Textured Pearl Earrings',
    line1: 'Textured Pearl',
    line2: 'Earrings',
    price: 903,
    originalPrice: 1290,
    discount: '30% Off',
    image: '/images/jewellery/textured-pearl-earrings.jpg'
  },
  {
    id: 'jewel-8909300089246-2',
    name: 'Radiance Pearl Earrings',
    line1: 'Radiance Pearl',
    line2: 'Earrings',
    price: 890,
    originalPrice: 890,
    image: '/images/jewellery/radiance-pearl-earrings-2.jpg'
  },
  {
    id: 'jewel-8909300089253',
    name: 'Pearl Swirl Earrings',
    line1: 'Pearl Swirl',
    line2: 'Earrings',
    price: 623,
    originalPrice: 890,
    discount: '30% Off',
    image: '/images/jewellery/pearl-swirl-earrings.jpg'
  },
  {
    id: 'jewel-8909300084135',
    name: 'Molten Twist Earrings',
    line1: 'Molten Twist',
    line2: 'Earrings',
    price: 693,
    originalPrice: 990,
    discount: '30% Off',
    image: '/images/jewellery/molten-twist-earrings.jpg'
  },
  {
    id: 'jewel-8905724959394-2',
    name: 'Textured Pearl Earrings',
    line1: 'Textured Pearl',
    line2: 'Gold Earrings',
    price: 903,
    originalPrice: 1290,
    discount: '30% Off',
    image: '/images/jewellery/textured-pearl-earrings-2.jpg'
  }
];

interface JewelleryMarqueeProps {
  onQuickView?: (product: Product) => void;
  onDiscoverClick?: () => void;
}

export const JewelleryMarquee: React.FC<JewelleryMarqueeProps> = ({
  onQuickView,
  onDiscoverClick
}) => {
  const handleItemClick = (item: JewelleryShowcaseItem) => {
    if (onQuickView) {
      const product: Product = {
        id: item.id,
        name: item.name,
        category: 'Jewellery',
        subcategory: item.line2,
        price: item.price,
        originalPrice: item.originalPrice,
        discountPercentage: item.discount ? 30 : 0,
        sizes: ['Free Size'],
        colors: [{ name: 'Gold', hex: '#d4af37' }],
        image: item.image,
        description: `${item.name} - Contemporary elegant jewellery piece from AND India.`
      };
      onQuickView(product);
    }
  };

  const renderProductCard = (item: JewelleryShowcaseItem, uniqueKey: string) => (
    <div
      key={uniqueKey}
      onClick={() => handleItemClick(item)}
      className="group/card flex-shrink-0 w-[115px] sm:w-[130px] md:w-[145px] lg:w-[155px] cursor-pointer select-none"
    >
      {/* Product Image Card - Maintained 2:3 Aspect Ratio */}
      <div className="w-full aspect-[2/3] bg-[#f7f7f7] overflow-hidden flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-[1.02]"
          loading="lazy"
          draggable="false"
        />
      </div>

      {/* Hover State Text - Only visible when this specific card is hovered */}
      <div className="pt-2.5 pb-1 text-center min-h-[62px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 pointer-events-auto">
        <p className="text-[11px] sm:text-xs font-normal text-[#1e1e1e] leading-tight truncate">
          {item.line1}
        </p>
        <p className="text-[11px] sm:text-xs font-normal text-[#1e1e1e] leading-tight mt-0.5 truncate">
          {item.line2}
        </p>
        <div className="mt-1 flex items-center justify-center gap-1 text-[11px] sm:text-xs">
          <span className="font-semibold text-[#1e1e1e]">
            ₹{item.price}
          </span>
          {item.originalPrice > item.price && (
            <span className="line-through text-neutral-400 font-normal">
              ₹{item.originalPrice}
            </span>
          )}
          {item.discount && (
            <span className="text-[#c53030] font-medium">
              {item.discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 sm:py-12 bg-white" id="jewellery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="text-base sm:text-lg md:text-xl font-normal tracking-normal text-[#1e1e1e]">
            Jewellery
          </h2>
          <a
            href="#jewellery"
            onClick={(e) => {
              e.preventDefault();
              onDiscoverClick?.();
            }}
            className="inline-block mt-1 text-xs sm:text-sm text-[#1e1e1e] underline underline-offset-4 hover:opacity-75 transition-opacity"
          >
            Discover Collection
          </a>
        </div>

        {/* Infinite Auto Animated Marquee Loop Container */}
        {/* Pauses animation when hovered anywhere over the container */}
        <div className="jewellery-marquee-container relative w-full overflow-hidden">
          <div className="jewellery-marquee-track flex w-max">
            {/* First Set of Items */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5">
              {jewelleryShowcaseItems.map((item, idx) =>
                renderProductCard(item, `set1-${item.id}-${idx}`)
              )}
            </div>

            {/* Second Set of Items (Duplicate for continuous loop) */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5" aria-hidden="true">
              {jewelleryShowcaseItems.map((item, idx) =>
                renderProductCard(item, `set2-${item.id}-${idx}`)
              )}
            </div>

            {/* Third Set of Items (Extra buffer for continuous loop) */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5" aria-hidden="true">
              {jewelleryShowcaseItems.map((item, idx) =>
                renderProductCard(item, `set3-${item.id}-${idx}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
