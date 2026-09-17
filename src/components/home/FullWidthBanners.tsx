import React from 'react';

interface FullWidthBannersProps {
  onBannerClick?: (target: string) => void;
}

interface BannerItem {
  id: string;
  image: string;
  alt: string;
  link: string;
}

const banners: BannerItem[] = [
  {
    id: 'denims-banner',
    image:
      'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw8af46aaf/Refresh-2026/september/Refresh-11-sep/Desktop/Home-page-banners/1_Denims3.jpg',
    alt: 'Denim Collection',
    link: '#new-arrivals',
  },
  {
    id: 'gifting-banner',
    image:
      'https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwbd56f481/Refresh-2026/september/Refresh-11-sep/Desktop/Home-page-banners/2_Gifting.jpg',
    alt: 'Gifting Edit',
    link: '#new-arrivals',
  },
];

export const FullWidthBanners: React.FC<FullWidthBannersProps> = ({ onBannerClick }) => {
  return (
    <section className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6 my-4 sm:my-6 md:my-8" aria-label="Featured Promotions">
      {banners.map((banner) => (
        <a
          key={banner.id}
          href={banner.link}
          onClick={(e) => {
            if (onBannerClick) {
              e.preventDefault();
              onBannerClick(banner.link);
            }
          }}
          className="block w-full overflow-hidden cursor-pointer"
          aria-label={banner.alt}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            loading="lazy"
            draggable="false"
            className="w-full h-auto block object-cover select-none"
          />
        </a>
      ))}
    </section>
  );
};
