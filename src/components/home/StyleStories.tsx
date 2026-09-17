import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  image: string;
  link: string;
}

const stories: Story[] = [
  {
    id: 'after-hours',
    title: 'The After Hours',
    image: '/images/style-stories/after-hours.png',
    link: 'https://www.andindia.com/blogs/trend-alert/unlock-your-inner-style-icon-india-the-after-hours-edition.html',
  },
  {
    id: 'in-her-light',
    title: 'In Her Light',
    image: '/images/style-stories/in-her-light.jpg',
    link: 'https://www.andindia.com/blogs/all-time-classic/in-her-light-colours-that-catch-the-sun-wardrobe-staples-from-andindia.html',
  },
  {
    id: 'summer-staple',
    title: 'Summer Dressing Made Easy',
    image: '/images/style-stories/summer-staple.jpg',
    link: 'https://www.andindia.com/blog/summer-dressing-made-easy-5-must-have-cotton-blend-shirts-for-women.html',
  },
];

// Tripled buffer for a seamless continuous infinite loop
const loopedStories = [...stories, ...stories, ...stories];

export const StyleStories: React.FC = () => {
  // Start at the middle set (index 3 corresponds to story[0])
  const [currentIndex, setCurrentIndex] = useState(stories.length);
  const [withTransition, setWithTransition] = useState(true);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  );

  const isMovingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    isMovingRef.current = false;
    // Seamless infinite reset when entering the clone buffers
    if (currentIndex >= stories.length * 2) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - stories.length);
    } else if (currentIndex < stories.length) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + stories.length);
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
    <section className="py-5 sm:py-7 md:py-8 bg-white" id="explore-stories">
      <div className="max-w-[760px] mx-auto px-7 sm:px-10">
        {/* Scaled-down Section Heading matching reference */}
        <div className="text-center mb-4 sm:mb-5 md:mb-6">
          <h2 className="text-sm sm:text-base md:text-[17px] font-normal tracking-normal text-[#1e1e1e]">
            Explore Our Style Stories
          </h2>
        </div>

        {/* Scaled-down Carousel Container */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous story"
            className="absolute -left-5 sm:-left-7 md:-left-8 top-[44%] -translate-y-1/2 p-1 text-[#1e1e1e] focus:outline-none cursor-pointer z-10"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next story"
            className="absolute -right-5 sm:-right-7 md:-right-8 top-[44%] -translate-y-1/2 p-1 text-[#1e1e1e] focus:outline-none cursor-pointer z-10"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>

          {/* Sliding Viewport */}
          <div className="overflow-hidden w-full">
            <div
              className="flex w-full will-change-transform"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: isDesktop
                  ? `translateX(-${currentIndex * 50}%)`
                  : `translateX(-${currentIndex * 100}%)`,
                transition: withTransition
                  ? 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
              }}
            >
              {loopedStories.map((story, idx) => (
                <div
                  key={`${story.id}-${idx}`}
                  className={`${
                    isDesktop ? 'w-1/2' : 'w-full'
                  } flex-shrink-0 px-2 sm:px-2.5 flex flex-col`}
                >
                  {/* Image Card without hover scale effect */}
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-[406/435] overflow-hidden bg-neutral-100"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      draggable="false"
                      className="w-full h-full object-cover select-none"
                    />
                  </a>

                  {/* Read More Link */}
                  <div className="pt-2.5 sm:pt-3 text-left">
                    <a
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs sm:text-[13px] font-normal text-[#1e1e1e] underline underline-offset-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
