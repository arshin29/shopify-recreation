import React from 'react';
import { MegaMenuCategory } from '../../types';

interface MegaMenuProps {
  category: MegaMenuCategory;
  onClose: () => void;
  onNavigate?: (href: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose, onNavigate }) => {
  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-100 py-8 px-12 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
    >
      <div className="max-w-7xl mx-auto flex gap-12 justify-between">
        {/* Columns */}
        <div className="flex-1 grid grid-cols-3 lg:grid-cols-4 gap-8">
          {category.columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-4">
              <h4 className="text-[11px] font-bold tracking-widest text-[#1e1e1e] uppercase pb-2 border-b border-neutral-100">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate(item.href);
                        onClose();
                      }}
                      className={`text-[12px] transition-colors block py-0.5 ${
                        item.isSale
                          ? 'text-[#e60000] font-semibold hover:text-[#b30000]'
                          : 'text-[#666666] hover:text-[#1e1e1e] hover:font-medium'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Editorial Image Card */}
        {category.featuredImage && (
          <div className="w-72 flex-shrink-0 pl-6 border-l border-neutral-100">
            <a
              href={category.featuredImage.link}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate(category.featuredImage!.link);
                onClose();
              }}
              className="group block relative overflow-hidden bg-neutral-100"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.featuredImage.src}
                  alt={category.featuredImage.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3">
                <p className="text-[11px] font-semibold tracking-wider text-[#1e1e1e] uppercase">
                  {category.featuredImage.title}
                </p>
                {category.featuredImage.subtitle && (
                  <p className="text-[11px] text-[#908c88] mt-0.5 line-clamp-1">
                    {category.featuredImage.subtitle}
                  </p>
                )}
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1e1e1e] underline underline-offset-4 mt-2 inline-block group-hover:text-[#ceac51] transition-colors">
                  Shop Now &rarr;
                </span>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
