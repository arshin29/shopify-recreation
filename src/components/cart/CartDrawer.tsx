import React, { useState, useRef, useEffect } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && panelRef.current && backdropRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: 'power2.out' }
      );
      gsap.fromTo(
        panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1999;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'AND40') {
      setAppliedDiscount(40);
      setCouponMessage('40% Discount applied with code AND40!');
    } else if (code === 'AND10' || code === 'ANDFIRST10') {
      setAppliedDiscount(10);
      setCouponMessage('10% Welcome Discount applied!');
    } else {
      setCouponMessage('Invalid coupon code. Try AND40 or AND10');
      setTimeout(() => setCouponMessage(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          ref={panelRef}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col will-change-transform"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-black" />
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 tracking-wider uppercase">
                YOUR SHOPPING BAG ({items.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 text-neutral-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#fcfaf4] border-b border-[#f0e6cf] p-3 text-center">
            {amountNeeded > 0 ? (
              <p className="text-[11px] text-neutral-700 font-medium">
                Add <span className="font-bold text-[#1e1e1e]">₹{amountNeeded.toLocaleString('en-IN')}</span> more to unlock <span className="text-emerald-700 font-bold">FREE Express Delivery</span>!
              </p>
            ) : (
              <p className="text-[11px] text-emerald-800 font-bold flex items-center justify-center gap-1">
                <Sparkles size={13} />
                You have unlocked FREE Express Delivery on this order!
              </p>
            )}
            <div className="w-full bg-neutral-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#ceac51] h-full transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-base font-bold text-neutral-900 uppercase">Your bag is empty</h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-xs">
                Looks like you haven't added any chic styles to your bag yet.
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-3 px-8 transition-colors"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-neutral-100">
              {items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 first:pt-0">
                  <div className="w-20 h-26 flex-shrink-0 bg-neutral-100 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-semibold text-neutral-900 line-clamp-1 pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-neutral-400 hover:text-[#e60000] transition-colors p-0.5"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="text-[11px] text-neutral-500 mt-0.5">
                        Size: <span className="font-semibold text-neutral-800">{item.selectedSize}</span>
                      </p>

                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs font-bold text-neutral-900">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </span>
                        {item.product.originalPrice > item.product.price && (
                          <span className="text-[10px] text-neutral-400 line-through">
                            ₹{item.product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-neutral-200">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs text-neutral-600 hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs text-neutral-600 hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-neutral-900">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code (try AND40)"
                    className="w-full bg-white border border-neutral-300 text-xs pl-8 pr-3 py-2 uppercase focus:outline-none focus:border-black font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-neutral-900 hover:bg-black text-white text-xs font-bold tracking-wider px-4 py-2 uppercase"
                >
                  Apply
                </button>
              </form>

              {couponMessage && (
                <p className="text-[11px] text-emerald-700 font-medium">
                  {couponMessage}
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-600 border-t border-neutral-200 pt-3">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-medium text-neutral-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#e60000] font-medium">
                    <span>Coupon Discount ({appliedDiscount}%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-700 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-neutral-900 border-t border-neutral-200 pt-2">
                  <span>Total Payable</span>
                  <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-3.5 px-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
