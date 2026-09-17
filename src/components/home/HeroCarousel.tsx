import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroBanners } from '../../data/products';

interface HeroCarouselProps {
  onCtaClick?: (link: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTrackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Smooth slide transition via GSAP
  useEffect(() => {
    if (slideTrackRef.current) {
      gsap.to(slideTrackRef.current, {
        x: `-${currentSlide * 100}%`,
        duration: 0.7,
        ease: 'power3.inOut',
      });
    }
  }, [currentSlide]);

  // Autoplay every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left -> next slide
        setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
      } else {
        // swipe right -> previous slide
        setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#ded8ce] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        ref={slideTrackRef}
        className="flex w-full will-change-transform"
      >
        {heroBanners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link}
            onClick={(e) => {
              if (onCtaClick) {
                e.preventDefault();
                onCtaClick(banner.link);
              }
            }}
            className="w-full flex-shrink-0 relative block cursor-pointer"
            aria-label={banner.title}
          >
            {/* Responsive Banner Image */}
            <picture className="block w-full">
              <source media="(max-width: 767px)" srcSet={banner.mobileImg} />
              <img
                src={banner.desktopImg}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = banner.fallbackImg;
                }}
                alt={banner.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-auto min-h-[580px] sm:min-h-[720px] md:min-h-[850px] lg:min-h-[calc(100vh-40px)] xl:min-h-[102vh] object-cover block"
              />
            </picture>
          </a>
        ))}
      </div>

      {/* Indicator Dots matching reference image */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {heroBanners.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentSlide(dotIdx);
            }}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className="p-0.5 cursor-pointer flex items-center justify-center group/dot"
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 block ${
                currentSlide === dotIdx
                  ? 'bg-[#1c1c1c]'
                  : 'bg-white group-hover/dot:bg-neutral-200 shadow-xs'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
