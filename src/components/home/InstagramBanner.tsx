import React from 'react';

const DESKTOP_IMAGE =
  'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw94657f2a/Refresh-2026/september/Refresh-11-sep/Desktop/Footer/footer-desktop2.jpg';
const MOBILE_IMAGE =
  'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw13b89271/Refresh-2026/september/Refresh-11-sep/Mobile/Footer/footer-mobile.jpg';
const INSTAGRAM_URL = 'https://www.instagram.com/stylebyand/';

export const InstagramBanner: React.FC = () => {
  return (
    <section className="w-full mt-4 sm:mt-6 md:mt-8" aria-label="Follow us on Instagram">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full overflow-hidden cursor-pointer group"
        aria-label="Follow @stylebyand on Instagram"
      >
        <picture className="block w-full">
          <source media="(max-width: 767px)" srcSet={MOBILE_IMAGE} />
          <img
            src={DESKTOP_IMAGE}
            alt="@stylebyand on Instagram"
            loading="lazy"
            draggable="false"
            className="w-full h-auto block object-cover select-none transition-opacity duration-300 group-hover:opacity-95"
          />
        </picture>

        {/* Floating Instagram handle label card */}
        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
          <div className="bg-white/85 px-6 py-3.5 sm:px-10 sm:py-5 md:px-12 md:py-6 text-center shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
            <p className="text-xs sm:text-sm md:text-base text-[#222222] font-normal tracking-wide">
              Follow Us on Instagram
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#111111] font-bold underline underline-offset-4 decoration-1 mt-0.5 sm:mt-1">
              @stylebyand
            </p>
          </div>
        </div>
      </a>
    </section>
  );
};
