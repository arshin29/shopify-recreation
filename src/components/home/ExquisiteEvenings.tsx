import React, { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';

export const exquisiteEveningsProducts: Product[] = [
  {
    id: 'exquisite-1',
    name: 'Embroidered Billowy Sleeves Top in Green',
    category: 'Tops',
    subcategory: 'Evening Wear',
    price: 2990,
    originalPrice: 2990,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Green', hex: '#2d5a3f' }],
    image: '/images/exquisite-evenings/embroidered-billowy-sleeves-green.jpg',
    description: 'Elevate your evening wardrobe with this embroidered billowy sleeves top in deep emerald green, featuring delicate artisan embroidery and fluid silhouette.'
  },
  {
    id: 'exquisite-2',
    name: 'Solid Cotton Top in Black',
    category: 'Tops',
    subcategory: 'Evening Wear',
    price: 3990,
    originalPrice: 3990,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#1e1e1e' }],
    image: '/images/exquisite-evenings/solid-cotton-top-black.jpg',
    description: 'A timeless evening essential, this solid cotton top in deep black features subtle sleeve embellishments, high mock neck, and structured elegance.'
  },
  {
    id: 'exquisite-3',
    name: 'Embroidered Top in Rust',
    category: 'Tops',
    subcategory: 'Evening Wear',
    price: 3290,
    originalPrice: 3290,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Rust', hex: '#b35434' }],
    image: '/images/exquisite-evenings/embroidered-top-rust.jpg',
    description: 'Artisanal embroidery accents this rich rust-toned top, tailored for sunset cocktails and festive dinners.'
  },
  {
    id: 'exquisite-4',
    name: 'Solid Sweater in Sage',
    category: 'Tops',
    subcategory: 'Knitwear',
    price: 2590,
    originalPrice: 2590,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Sage', hex: '#8ea38a' }],
    image: '/images/exquisite-evenings/solid-sweater-sage.jpg',
    description: 'Ultra-soft fine knit sweater in calming sage green, featuring a relaxed silhouette and delicate ribbed cuffs.'
  },
  {
    id: 'exquisite-5',
    name: 'Solid Knit Top in Red',
    category: 'Tops',
    subcategory: 'Knitwear',
    price: 3990,
    originalPrice: 3990,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Red', hex: '#b22222' }],
    image: '/images/exquisite-evenings/solid-knit-top-red.jpg',
    description: 'Bold and confident, this vibrant crimson knit top offers a structured fit with clean lines and premium finish.'
  },
  {
    id: 'exquisite-6',
    name: 'One-shoulder Top in Green',
    category: 'Tops',
    subcategory: 'Evening Wear',
    price: 1990,
    originalPrice: 1990,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Green', hex: '#2e6f40' }],
    image: '/images/exquisite-evenings/one-shoulder-top-green.jpg',
    description: 'Asymmetrical modern allure featuring a sculptural one-shoulder neckline in deep evening green.'
  },
  {
    id: 'exquisite-7',
    name: 'Abstract Printed Smocked Top in Wine',
    category: 'Tops',
    subcategory: 'Blouses',
    price: 2490,
    originalPrice: 2490,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [{ name: 'Wine', hex: '#722f37' }],
    image: '/images/exquisite-evenings/abstract-printed-smocked-top-wine.jpg',
    description: 'Rich wine-hued abstract motif with delicate smocked detailing along the bodice and cuffs.'
  }
];

interface ExquisiteEveningsProps {
  onQuickView?: (product: Product) => void;
  onShopNow?: () => void;
}

export const ExquisiteEvenings: React.FC<ExquisiteEveningsProps> = ({
  onQuickView,
  onShopNow
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const touchStartXRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? exquisiteEveningsProducts.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === exquisiteEveningsProducts.length - 1 ? 0 : prev + 1));
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="bg-[#f5f5f5] py-6 sm:py-8 lg:py-10" id="exquisite-evenings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch justify-start gap-8 md:gap-14 lg:gap-24 xl:gap-36">
          {/* Left Column: Static Editorial Image - left-aligned with previous sections */}
          <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[400px] lg:max-w-[490px] xl:max-w-[540px] flex-shrink-0 flex items-center mx-auto md:mx-0">
            <div className="w-full aspect-[593/618] overflow-hidden bg-neutral-200 shadow-xs">
              <img
                src="/images/exquisite-evenings/trending-now-desktop.jpg"
                alt="Exquisite evenings editorial feature"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

          {/* Right Column: Title + Shop Now + Product Carousel + Dots */}
          <div className="flex flex-col justify-between w-full max-w-[420px] sm:max-w-[460px] md:w-[250px] lg:w-[280px] xl:w-[305px] flex-shrink-0 py-1 mx-auto md:mx-0">
            {/* Top: Title and Shop Now */}
            <div className="w-full text-left">
              <h2 className="text-base sm:text-lg md:text-[20px] lg:text-[22px] font-normal tracking-normal text-[#1e1e1e]">
                Exquisite evenings
              </h2>
              <button
                type="button"
                onClick={onShopNow}
                className="inline-block mt-1 text-xs sm:text-[13px] font-normal text-[#1e1e1e] underline underline-offset-4 hover:opacity-75 transition-opacity cursor-pointer text-left"
              >
                Shop Now
              </button>
            </div>

            {/* Middle: Product Card with Side Navigation Arrows and Smooth Slide-in */}
            <div
              className="relative w-full my-auto py-2"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous product"
                className="absolute -left-7 sm:-left-8 lg:-left-9 top-[38%] -translate-y-1/2 p-1 text-[#8e8e8e] hover:text-[#1e1e1e] transition-colors focus:outline-none cursor-pointer z-10"
              >
                <ChevronLeft size={24} strokeWidth={1.25} />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next product"
                className="absolute -right-7 sm:-right-8 lg:-right-9 top-[38%] -translate-y-1/2 p-1 text-[#8e8e8e] hover:text-[#1e1e1e] transition-colors focus:outline-none cursor-pointer z-10"
              >
                <ChevronRight size={24} strokeWidth={1.25} />
              </button>

              {/* Sliding Carousel Viewport */}
              <div className="w-full overflow-hidden">
                <div
                  className="flex w-full will-change-transform"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 380ms cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {exquisiteEveningsProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-full flex-shrink-0 group cursor-pointer select-none"
                      onClick={() => onQuickView?.(product)}
                    >
                      {/* Product Image */}
                      <div className="w-full aspect-[2/3] bg-white overflow-hidden shadow-2xs">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          draggable="false"
                        />
                      </div>

                      {/* Product Title and Price */}
                      <div className="pt-2.5 text-left w-full">
                        <p className="text-xs sm:text-[13px] font-normal text-[#1e1e1e] leading-snug truncate hover:underline">
                          {product.name}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#1e1e1e] mt-1">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 w-full pt-2">
              {exquisiteEveningsProducts.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-200 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1e1e1e]'
                      : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#d4d4d4] hover:bg-[#a0a0a0]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
