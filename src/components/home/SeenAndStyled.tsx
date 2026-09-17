import React, { useRef } from 'react';
import { seenAndStyled } from '../../data/products';

interface SeenAndStyledProps {
  onShopLook?: (productName: string) => void;
}

export const SeenAndStyled: React.FC<SeenAndStyledProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.firstElementChild as HTMLElement | null;
      const cardWidth = card ? card.offsetWidth : 300;
      const gap = 12; // gap between cards
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white" id="seen-and-styled">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title strictly matching reference */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="text-base sm:text-lg md:text-xl font-normal tracking-normal text-[#1e1e1e]">
            Seen AND Styled
          </h2>
        </div>

        {/* Carousel container with left/right arrows matching reference */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous videos"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Videos horizontal track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {seenAndStyled.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[calc(50%-4px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)] snap-start aspect-[9/16] bg-neutral-100 overflow-hidden"
              >
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  src={item.videoUrl}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next videos"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
