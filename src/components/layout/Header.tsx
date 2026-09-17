import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, User, ChevronDown } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { navigationCategories } from '../../data/navigation';
import { MegaMenu } from './MegaMenu';
import { MegaMenuCategory } from '../../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileNav: () => void;
  onNavigateSection: (id: string) => void;
}

interface NavItem {
  id: string;
  title: string;
  href: string;
  isSale?: boolean;
  megaCategory: MegaMenuCategory | null;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount: _wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileNav,
  onNavigateSection,
}) => {
  const [activeMegaCategory, setActiveMegaCategory] = useState<MegaMenuCategory | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary navigation items matching the reference design
  const navItems: NavItem[] = [
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      href: '#new-in',
      megaCategory: navigationCategories.find((c) => c.id === 'new-in') || null,
    },
    {
      id: 'women',
      title: 'Women',
      href: '#clothing',
      megaCategory: navigationCategories.find((c) => c.id === 'clothing') || null,
    },
    {
      id: 'sale',
      title: 'Sale',
      href: '#sale',
      isSale: true,
      megaCategory: navigationCategories.find((c) => c.id === 'sale') || null,
    },
    {
      id: 'discover',
      title: 'Discover',
      href: '#seen-and-styled',
      megaCategory: navigationCategories.find((c) => c.id === 'occasions') || null,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : 'border-b border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Mobile Menu, Logo & Primary Navigation Links */}
          <div className="flex items-center">
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={onOpenMobileNav}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-1.5 mr-2 text-neutral-800 hover:text-black transition-colors"
            >
              <Menu size={22} />
            </button>

            {/* AND Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-shrink-0 block cursor-pointer"
            >
              <BrandLogo className="h-6 sm:h-7 w-auto" />
            </a>

            {/* Desktop Navigation Links positioned immediately next to logo */}
            <nav className="hidden lg:flex items-center space-x-7 ml-8 lg:ml-10">
              {navItems.map((item) => {
                const isHovered = activeMegaCategory?.id === item.megaCategory?.id && !!activeMegaCategory;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => {
                      if (item.megaCategory) {
                        setActiveMegaCategory(item.megaCategory);
                      } else {
                        setActiveMegaCategory(null);
                      }
                    }}
                    className="relative py-2"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateSection(item.href);
                        setActiveMegaCategory(null);
                      }}
                      className={`text-[13px] tracking-normal transition-colors ${
                        item.isSale
                          ? 'text-[#c22d2d] font-normal hover:text-[#9e1c1c]'
                          : isHovered
                          ? 'text-black font-normal'
                          : 'text-neutral-800 hover:text-black font-normal'
                      }`}
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right: Currency Selector & Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* International | USD Selector */}
            <div className="relative group">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="text-[#1e1e1e] hover:text-black text-[11px] sm:text-[12px] py-1 px-1 flex items-center gap-1 transition-colors cursor-pointer"
                aria-label="Select Country and Currency"
              >
                <span className="whitespace-nowrap font-normal">International | {currency}</span>
                <ChevronDown size={12} className="text-neutral-500 group-hover:text-black transition-transform" />
              </button>

              <div className="absolute right-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg border border-neutral-100 py-1 rounded min-w-[155px] z-50 text-xs">
                <button
                  onClick={() => {
                    setCurrency('USD');
                    setShowCurrencyDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-neutral-50 flex items-center justify-between ${
                    currency === 'USD' ? 'font-semibold text-black' : 'text-neutral-600'
                  }`}
                >
                  <span>International | USD</span>
                  {currency === 'USD' && <span className="text-black font-bold">✓</span>}
                </button>
                <button
                  onClick={() => {
                    setCurrency('INR');
                    setShowCurrencyDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-neutral-50 flex items-center justify-between ${
                    currency === 'INR' ? 'font-semibold text-black' : 'text-neutral-600'
                  }`}
                >
                  <span>India | INR</span>
                  {currency === 'INR' && <span className="text-black font-bold">✓</span>}
                </button>
              </div>
            </div>

            {/* 1. Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-1 sm:p-1.5 text-neutral-800 hover:text-black transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            {/* 2. Wishlist Icon (Heart) */}
            <button
              onClick={() => onNavigateSection('#new-arrivals')}
              aria-label="Wishlist"
              className="p-1 sm:p-1.5 text-neutral-800 hover:text-black transition-colors relative"
            >
              <Heart size={18} strokeWidth={1.5} />
            </button>

            {/* 3. User / Account Icon */}
            <div className="relative">
              <button
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                onMouseEnter={() => setShowAccountMenu(true)}
                aria-label="Account"
                className="p-1 sm:p-1.5 text-neutral-800 hover:text-black transition-colors block"
              >
                <User size={18} strokeWidth={1.5} />
              </button>

              {showAccountMenu && (
                <div
                  onMouseLeave={() => setShowAccountMenu(false)}
                  className="absolute right-0 top-full mt-2 w-52 bg-white shadow-xl border border-neutral-100 py-3 rounded-sm z-50 text-xs text-neutral-700 animate-in fade-in slide-in-from-top-1"
                >
                  <div className="px-4 py-2 border-b border-neutral-100">
                    <p className="font-semibold text-neutral-900">Welcome to AND</p>
                    <p className="text-[11px] text-neutral-500">Unleash your signature style</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setShowAccountMenu(false);
                        alert('Demo Profile: Logged in as VIP Member');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-50"
                    >
                      My Account & Orders
                    </button>
                    <button
                      onClick={() => {
                        setShowAccountMenu(false);
                        alert('Wishlist: You have saved items.');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-50"
                    >
                      Saved Wishlist
                    </button>
                    <button
                      onClick={() => {
                        setShowAccountMenu(false);
                        alert('AND Rewards: 250 Points Active');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-50"
                    >
                      AND Rewards Club
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Cart Bag Icon with Orange-Red Circle Badge */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className="p-1 sm:p-1.5 text-neutral-800 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#e35a3c] text-white font-bold text-[9px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Active MegaMenu Flyout */}
      {activeMegaCategory && (
        <MegaMenu
          category={activeMegaCategory}
          onClose={() => setActiveMegaCategory(null)}
          onNavigate={onNavigateSection}
        />
      )}
    </header>
  );
};
