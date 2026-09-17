import React, { useState, useRef, useEffect } from 'react';
import { X, Heart, ShoppingBag, Truck, RotateCcw, ShieldCheck, Check } from 'lucide-react';
import gsap from 'gsap';
import { Product } from '../../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current && backdropRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: 'power2.out' }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.3)' }
      );
    }
  }, []);

  const images = [product.image, product.hoverImage || product.image];

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative bg-white max-w-3xl w-full rounded-xs shadow-2xl overflow-hidden z-10 will-change-transform"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black z-20 bg-white/80 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Images */}
          <div className="p-6 bg-neutral-50 flex flex-col items-center justify-center">
            <div className="aspect-[3/4] w-full overflow-hidden bg-white shadow-xs">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail switcher */}
            {product.hoverImage && (
              <div className="flex gap-2 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-18 overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#ceac51] uppercase">
                  {product.category} &bull; AND INDIA
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1 uppercase leading-snug">
                  {product.name}
                </h2>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 pb-2 border-b border-neutral-100">
                <span className="text-xl font-bold text-neutral-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-neutral-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="text-xs font-bold text-[#e60000]">
                    ({product.discountPercentage}% OFF)
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 leading-relaxed">
                {product.description || 'Crafted with premium quality fabric, designed for an effortless blend of comfort and modern runway sophistication.'}
              </p>

              {/* Sizes */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-neutral-800 uppercase tracking-wider">
                    Select Size: <strong className="text-black">{selectedSize}</strong>
                  </span>
                  <button
                    onClick={() => alert('Size Chart: Standard Indian apparel sizing (Bust: 34"-42", Waist: 26"-34"). Model wears size S.')}
                    className="text-[#908c88] hover:text-black underline text-[11px]"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[42px] h-10 px-3 text-xs font-semibold uppercase transition-all flex items-center justify-center border ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-200 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-neutral-800 uppercase tracking-wider block">
                  Quantity:
                </span>
                <div className="flex items-center border border-neutral-200 w-28">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-neutral-100 mt-6">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1e1e1e] hover:bg-black text-white shadow-md'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={16} />
                      <span>ADDED TO BAG!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>ADD TO BAG</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Wishlist"
                  className="p-3.5 border border-neutral-200 hover:border-black transition-colors"
                >
                  <Heart
                    size={18}
                    className={isWishlisted ? 'fill-[#e60000] text-[#e60000]' : 'text-neutral-700'}
                  />
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-4 grid grid-cols-3 gap-2 text-[10px] text-neutral-500 text-center border-t border-neutral-100">
                <div className="flex flex-col items-center gap-1">
                  <Truck size={14} className="text-neutral-700" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw size={14} className="text-neutral-700" />
                  <span>15-Day Free Returns</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck size={14} className="text-neutral-700" />
                  <span>100% Genuine AND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
