import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Search, MapPin, Heart, ShoppingBag, User } from 'lucide-react';
import { navigationCategories } from '../../data/navigation';
import { BrandLogo } from '../common/BrandLogo';

interface MobileDrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount: number;
  wishlistCount: number;
  onNavigateSection: (id: string) => void;
}

export const MobileDrawerNav: React.FC<MobileDrawerNavProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenCart,
  cartCount,
  wishlistCount,
  onNavigateSection,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative flex-1 flex flex-col max-w-xs sm:max-w-sm w-full bg-white shadow-2xl z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <BrandLogo className="h-6 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-neutral-600 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Actions Row */}
        <div className="grid grid-cols-3 border-b border-neutral-100 text-center py-3 bg-neutral-50 text-[11px] font-medium text-neutral-700">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex flex-col items-center gap-1 hover:text-black"
          >
            <Search size={16} />
            <span>Search</span>
          </button>
          <div className="flex flex-col items-center gap-1 hover:text-black relative">
            <Heart size={16} />
            <span>Wishlist ({wishlistCount})</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="flex flex-col items-center gap-1 hover:text-black relative"
          >
            <ShoppingBag size={16} />
            <span>Bag ({cartCount})</span>
          </button>
        </div>

        {/* Navigation Categories */}
        <div className="py-2 divide-y divide-neutral-100 flex-1">
          {navigationCategories.map((category) => {
            const isExpanded = expandedCategory === category.id;
            return (
              <div key={category.id} className="overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left text-[13px] font-semibold tracking-wider text-neutral-900 uppercase hover:bg-neutral-50"
                >
                  <span className={category.isHighlighted ? 'text-[#e60000]' : ''}>
                    {category.title}
                  </span>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-neutral-500" />
                  ) : (
                    <ChevronRight size={16} className="text-neutral-500" />
                  )}
                </button>

                {/* Subcategory Accordion */}
                {isExpanded && (
                  <div className="bg-neutral-50 px-6 py-3 space-y-4 text-xs">
                    {category.columns.map((column, colIdx) => (
                      <div key={colIdx} className="space-y-2">
                        <div className="font-bold text-neutral-500 uppercase tracking-widest text-[10px]">
                          {column.title}
                        </div>
                        <ul className="space-y-2 pl-2 border-l border-neutral-200">
                          {column.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href={item.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigateSection(item.href);
                                  onClose();
                                }}
                                className={`block py-1 ${
                                  item.isSale ? 'text-[#e60000] font-semibold' : 'text-neutral-700'
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
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Support Links inside Drawer */}
        <div className="p-5 border-t border-neutral-200 bg-neutral-100 space-y-3 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <span>Find a Store</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={15} />
            <span>Login / Register</span>
          </div>
          <div className="pt-2 text-[10px] text-neutral-400">
            &copy; 2026 AND India. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
