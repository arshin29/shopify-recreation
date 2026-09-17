import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const InstagramSvg: React.FC = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookSvg: React.FC = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YouTubeSvg: React.FC = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XSvg: React.FC = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const PinterestSvg: React.FC = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.224-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full">
      {/* 1. Upper Footer: White Background Multi-Column Links */}
      <div className="bg-white text-[#1e1e1e] pt-12 pb-14 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Col 1: Account & Products */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-2.5">
                  Account
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1e1e1e]">
                  <li>
                    <a href="#account" className="hover:underline transition-all">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#orders" className="hover:underline transition-all">
                      Check Order
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-2.5">
                  Products
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1e1e1e]">
                  <li>
                    <a href="#new-arrivals" className="hover:underline transition-all">
                      New In
                    </a>
                  </li>
                  <li>
                    <a href="#accessories" className="hover:underline transition-all">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#new-arrivals" className="hover:underline transition-all">
                      Woman
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-2.5">
                Company
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1e1e1e]">
                <li>
                  <a href="#about-us" className="hover:underline transition-all">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#sitemap" className="hover:underline transition-all">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Help */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-2.5">
                Help
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1e1e1e]">
                <li>
                  <a href="#faq" className="hover:underline transition-all">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#gift-card" className="hover:underline transition-all">
                    Check Gift Card Balance
                  </a>
                </li>
                <li>
                  <a href="#returns" className="hover:underline transition-all">
                    Return &amp; Exchange
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:underline transition-all">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:underline transition-all">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#store-pickup" className="hover:underline transition-all">
                    Store Pickup
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="hover:underline transition-all">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Useful Links */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-2.5">
                Useful Links
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1e1e1e]">
                <li>
                  <a href="#blog" className="hover:underline transition-all">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#stores" className="hover:underline transition-all">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a href="#rise-rewards" className="hover:underline transition-all">
                    Rise Rewards
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:underline transition-all">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#career" className="hover:underline transition-all">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline transition-all">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Newsletter Subscription */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pl-4">
              <h4 className="text-[13px] font-bold text-[#1e1e1e] mb-3">
                Let&apos;s keep the conversation going!
              </h4>

              <form onSubmit={handleSubscribe} className="space-y-2.5 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  required
                  className="w-full border border-neutral-400 bg-white text-xs px-3.5 py-2.5 text-[#1e1e1e] placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1e1e1e] hover:bg-black text-white text-xs font-semibold py-3 px-4 transition-colors rounded-none"
                >
                  Sign up for our newsletter
                </button>
              </form>

              {isSubscribed && (
                <div className="mt-2.5 flex items-center gap-1.5 text-emerald-700 text-xs font-medium">
                  <CheckCircle2 size={15} />
                  <span>Thank you for subscribing to our newsletter!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Lower Footer: Black Background with Socials, Legal, and Popular Searches */}
      <div className="bg-[#111111] text-white pt-8 pb-10 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Social Icons & Copyright/Legal */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-7 border-b border-neutral-800/80">
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/stylebyand/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <InstagramSvg />
              </a>
              <a
                href="https://www.facebook.com/ANDIndia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FacebookSvg />
              </a>
              <a
                href="https://www.youtube.com/@ANDIndia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <YouTubeSvg />
              </a>
              <a
                href="https://twitter.com/stylebyand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <XSvg />
              </a>
              <a
                href="https://www.pinterest.com/stylebyand/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <PinterestSvg />
              </a>
            </div>

            {/* Copyright & Disclaimer */}
            <div className="text-left md:text-right text-[11px] text-neutral-400 space-y-0.5">
              <p>&copy; 2026 Ochre and Black Private Limited.</p>
              <p>
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#privacy" className="underline hover:text-white">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#terms" className="underline hover:text-white">
                  Terms of use
                </a>{' '}
                apply.
              </p>
            </div>
          </div>

          {/* Bottom Bar: Shop by Popular Searches */}
          <div className="pt-6 space-y-2 text-[11px] sm:text-xs">
            <h4 className="text-xs font-bold text-white tracking-wide uppercase mb-2">
              SHOP BY POPULAR SEARCHES
            </h4>

            {/* Women */}
            <div className="text-neutral-400 leading-relaxed">
              <span className="font-bold text-white mr-1.5">Women</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Dresses/Jumpsuits
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Tops
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Shirts
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Co-ord Sets
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Bottoms
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Jackets/Blazers
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Sweater/Cardigan
              </a>
            </div>

            {/* Collections */}
            <div className="text-neutral-400 leading-relaxed">
              <span className="font-bold text-white mr-1.5">Collections</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Work Wear
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Casual Wear
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Evening Wear
              </a>
            </div>

            {/* Accessories */}
            <div className="text-neutral-400 leading-relaxed">
              <span className="font-bold text-white mr-1.5">Accessories</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Jewellery
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Belts
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Scarves &amp; Stoles
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#new-arrivals" className="hover:text-white transition-colors">
                Fragrances
              </a>
            </div>

            {/* Gift Cards */}
            <div className="text-neutral-400 leading-relaxed">
              <span className="font-bold text-white mr-1.5">Gift Cards</span>
              <a href="#gift-cards" className="hover:text-white transition-colors">
                Anniversary Gift Card
              </a>
              <span className="mx-1.5 text-neutral-600">|</span>
              <a href="#gift-cards" className="hover:text-white transition-colors">
                Birthday Gift Card
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
