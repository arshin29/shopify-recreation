import React, { useState } from 'react';
import { categoryTabs } from '../../data/products';

interface CategoryGridProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const [activeTabId, setActiveTabId] = useState<'clothing' | 'accessories'>('clothing');

  const currentTab =
    categoryTabs.find((tab) => tab.id === activeTabId) || categoryTabs[0];

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Category Tabs with bottom divider line */}
        <div className="border-b border-neutral-200 mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {categoryTabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative pb-2.5 text-sm sm:text-[15px] cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? 'text-black font-medium'
                      : 'text-neutral-500 hover:text-black font-normal'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black -mb-[1px]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Cards (4 items per tab, no hover animations, replicated text style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {currentTab.items.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.categoryFilter || cat.title)}
              className="cursor-pointer flex flex-col"
            >
              {/* Image without any hover animation */}
              <div className="w-full aspect-[628/788] overflow-hidden bg-[#f6f5f3]">
                <picture className="block w-full h-full">
                  {cat.mobileImg && (
                    <source media="(max-width: 640px)" srcSet={cat.mobileImg} />
                  )}
                  <img
                    src={cat.desktopImg}
                    alt={cat.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = cat.fallbackImg;
                    }}
                    className="w-full h-full object-cover block"
                  />
                </picture>
              </div>

              {/* Replicated Category Text Style: left-aligned, title case, underlined */}
              <div className="mt-2.5 text-left">
                <span className="text-xs sm:text-[13px] text-[#1e1e1e] font-normal tracking-normal underline underline-offset-[3px] decoration-[1px] decoration-[#1e1e1e] inline-block">
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
