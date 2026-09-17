import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Product } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (modalRef.current && backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, ease: 'power2.out' }
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: -25, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.2)' }
        );
      }
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const popularSearches = ['Dresses', 'Co-ords', 'Blazer', 'Tops', 'Pleated Dress', 'Jewellery', 'Sale'];

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="relative bg-white max-w-3xl mx-auto mt-16 sm:mt-24 shadow-2xl z-10 overflow-hidden border border-neutral-100 will-change-transform"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center gap-3">
          <Search size={20} className="text-neutral-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for dresses, co-ords, tops, blazers, jewellery..."
            className="flex-1 text-sm sm:text-base font-medium text-neutral-900 focus:outline-none placeholder:text-neutral-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-black font-semibold uppercase"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 flex-shrink-0">
            TRENDING:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-[11px] bg-white border border-neutral-200 px-3 py-1 rounded-full text-neutral-600 hover:border-black hover:text-black transition-colors flex-shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-neutral-400 text-xs">
              Type keywords above to instantly search AND India's latest collection.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-neutral-500 text-xs">
              No matching styles found for "<span className="font-semibold text-black">{query}</span>".
              <p className="text-[11px] text-neutral-400 mt-1">
                Try searching for 'Dresses', 'Blazer', or 'Jewellery'.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex gap-3 p-2.5 hover:bg-neutral-50 border border-neutral-100 cursor-pointer group transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover bg-neutral-200"
                  />
                  <div className="flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <span className="text-[9px] font-bold text-[#ceac51] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h4 className="font-semibold text-neutral-900 group-hover:underline line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="font-bold text-neutral-900 mt-1">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold flex items-center gap-1 group-hover:text-black">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
