import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface ProductSwimlaneProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  wishlistIds?: string[];
  onToggleWishlist?: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart?: (product: Product, size: string) => void;
}

export const ProductSwimlane: React.FC<ProductSwimlaneProps> = ({
  title = 'New Arrivals',
  products,
  onQuickView,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(products.length);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isReady, setIsReady] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Triple the items for continuous seamless infinite looping
  const displayProducts = [...products, ...products, ...products];

  // Measure container width responsively
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
      setIsReady(true);
    }
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const visibleCards = containerWidth >= 1024 ? 4 : containerWidth >= 640 ? 3 : 2;
  const gap = containerWidth >= 1024 ? 20 : containerWidth >= 640 ? 16 : 12;
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCards - 1) * gap) / visibleCards
      : 300;
  const stepSize = cardWidth + gap;
  const scrollStep = visibleCards; // Advance by visible page (4 on desktop, 2 on mobile)

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + scrollStep);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - scrollStep);
  };

  // Seamless jump to center set once transition reaches outer cloned boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= products.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - products.length);
    } else if (currentIndex < products.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + products.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="new-arrivals" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[#1e1e1e]">
            {title}
          </h2>
          <a
            href="#new-arrivals"
            className="inline-block text-xs sm:text-[13px] text-[#1e1e1e] hover:underline underline-offset-4 mt-1 transition-colors font-normal"
          >
            View All
          </a>
        </div>

        {/* Carousel Container with Overlaid Arrows */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous products"
            className="absolute left-2 sm:left-3 top-[38%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-neutral-200/80 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 hover:text-black transition-all cursor-pointer"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>

          {/* Carousel Viewport */}
          <div
            ref={containerRef}
            className="overflow-hidden w-full select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex will-change-transform"
              style={{
                gap: `${gap}px`,
                transform: `translateX(-${currentIndex * stepSize}px)`,
                transition:
                  isReady && isTransitioning
                    ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayProducts.map((product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  style={{ width: `${cardWidth}px` }}
                  className="flex-shrink-0"
                >
                  <ProductCard
                    product={product}
                    onQuickView={onQuickView}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next products"
            className="absolute right-2 sm:right-3 top-[38%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-neutral-200/80 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 hover:text-black transition-all cursor-pointer"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
};


