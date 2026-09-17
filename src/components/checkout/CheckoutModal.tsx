import React, { useState } from 'react';
import {
  X,
  CreditCard,
  QrCode,
  Truck,
  CheckCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  Package,
} from 'lucide-react';
import { CartItem, CheckoutFormData } from '../../types';
import { checkoutPersonas } from '../../data/mockCheckout';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'details' | 'confirmation'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  // Form State initialized with Mumbai persona as default or empty
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: '',
    upiId: '',
  });

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = Math.round(subtotal * 0.1); // 10% demo promotion
  const total = Math.max(0, subtotal - discount);

  const applyPersona = (personaId: string) => {
    const persona = checkoutPersonas.find((p) => p.id === personaId);
    if (persona) {
      setFormData({ ...persona.data });
      setSelectedPersonaId(persona.id);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `AND-IND-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedId);
      setActiveTab('confirmation');
      onOrderSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={activeTab === 'confirmation' ? onClose : undefined}
      />

      <div className="relative bg-white max-w-4xl w-full rounded-xs shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-neutral-900 tracking-wider uppercase">
              AND India Checkout Simulation
            </span>
            <span className="hidden sm:inline-block bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-xs tracking-widest uppercase">
              DEMO MODE
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checkout"
            className="p-1.5 text-neutral-400 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Multi-Persona 1-Click Auto-Fill Bar */}
        {activeTab === 'details' && (
          <div className="bg-[#1e1e1e] text-white p-3 sm:p-4 border-b border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs text-[#ceac51] font-semibold">
                <Zap size={15} />
                <span>1-Click Test Auto-Fills:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {checkoutPersonas.map((persona) => (
                  <button
                    key={persona.id}
                    type="button"
                    onClick={() => applyPersona(persona.id)}
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-xs transition-all border flex items-center gap-1.5 ${
                      selectedPersonaId === persona.id
                        ? 'bg-[#ceac51] text-black border-[#ceac51] shadow-md scale-105'
                        : 'bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    <span>{persona.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {activeTab === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Form: Delivery & Payment (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Section 1: Customer Contact & Shipping Address */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
                    <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
                      Shipping & Delivery Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Rhea Singhania"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="name@domain.com"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="9820123456"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Address Line 1 (Flat, House no., Building) *
                      </label>
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Flat 1402, Sea Green Towers"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Address Line 2 (Area, Landmark)
                      </label>
                      <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                        placeholder="e.g. Worli Sea Face"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        placeholder="400018"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Mumbai"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        placeholder="Maharashtra"
                        className="w-full border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Payment Method */}
                <div className="space-y-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
                    <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-xs font-bold text-neutral-900 tracking-wider uppercase">
                      Payment Options (Simulation)
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {/* UPI */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: 'upi' }))
                      }
                      className={`p-3 border text-center transition-all flex flex-col items-center gap-1.5 ${
                        formData.paymentMethod === 'upi'
                          ? 'border-black bg-neutral-50 shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      <QrCode size={18} className={formData.paymentMethod === 'upi' ? 'text-black' : ''} />
                      <span className="text-[11px] font-bold uppercase">UPI / QR</span>
                    </button>

                    {/* Card */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: 'card' }))
                      }
                      className={`p-3 border text-center transition-all flex flex-col items-center gap-1.5 ${
                        formData.paymentMethod === 'card'
                          ? 'border-black bg-neutral-50 shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      <CreditCard size={18} className={formData.paymentMethod === 'card' ? 'text-black' : ''} />
                      <span className="text-[11px] font-bold uppercase">Cards</span>
                    </button>

                    {/* COD */}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, paymentMethod: 'cod' }))
                      }
                      className={`p-3 border text-center transition-all flex flex-col items-center gap-1.5 ${
                        formData.paymentMethod === 'cod'
                          ? 'border-black bg-neutral-50 shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      <Truck size={18} className={formData.paymentMethod === 'cod' ? 'text-black' : ''} />
                      <span className="text-[11px] font-bold uppercase">Cash on Delivery</span>
                    </button>
                  </div>

                  {/* Payment Sub-fields */}
                  {formData.paymentMethod === 'upi' && (
                    <div className="p-3 bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
                      <label className="block text-[11px] font-medium text-neutral-700">
                        Enter UPI VPA ID
                      </label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId || ''}
                        onChange={handleInputChange}
                        placeholder="yourname@okhdfcbank"
                        className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black font-mono"
                      />
                      <p className="text-[10px] text-neutral-500">
                        Supports Google Pay, PhonePe, Paytm, and all BHIM UPI handles.
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === 'card' && (
                    <div className="p-3 bg-neutral-50 border border-neutral-200 space-y-3 text-xs">
                      <div>
                        <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber || ''}
                          onChange={handleInputChange}
                          placeholder="4532 8912 3456 7890"
                          className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry || ''}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-neutral-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="password"
                            name="cardCvv"
                            maxLength={4}
                            value={formData.cardCvv || ''}
                            onChange={handleInputChange}
                            placeholder="842"
                            className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs focus:outline-none focus:border-black font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'cod' && (
                    <div className="p-3 bg-amber-50/70 border border-amber-200 text-xs text-amber-900 rounded-xs">
                      <p className="font-semibold">Cash on Delivery selected</p>
                      <p className="text-[11px] mt-0.5">
                        Keep exact cash or scan the courier partner QR upon doorstep delivery.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Summary: Order Items & Total (5 cols) */}
              <div className="lg:col-span-5 bg-neutral-50 p-5 border border-neutral-200 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 tracking-wider uppercase pb-3 border-b border-neutral-200">
                    Order Summary ({items.length} items)
                  </h3>

                  {/* Items miniature list */}
                  <div className="max-h-60 overflow-y-auto divide-y divide-neutral-200/60 my-3">
                    {items.map((item) => (
                      <div key={item.id} className="py-2.5 flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-16 object-cover bg-neutral-200"
                        />
                        <div className="flex-1 text-xs">
                          <p className="font-semibold text-neutral-900 line-clamp-1">
                            {item.product.name}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            Size: {item.selectedSize} &bull; Qty: {item.quantity}
                          </p>
                          <p className="font-bold text-neutral-900 mt-0.5">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 text-xs text-neutral-600 border-t border-neutral-200 pt-3">
                    <div className="flex justify-between">
                      <span>Item Total</span>
                      <span className="font-medium text-neutral-900">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#e60000]">
                      <span>VIP Promo Discount (10%)</span>
                      <span className="font-semibold">-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Express Shipping</span>
                      <span className="text-emerald-700 font-semibold uppercase">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated GST / Taxes</span>
                      <span className="text-neutral-500">Included</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-neutral-900 border-t border-neutral-200 pt-3">
                      <span>Total Amount</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-4 px-6 flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">PROCESSING ORDER SIMULATION...</span>
                    ) : (
                      <>
                        <span>PLACE DEMO ORDER (₹{total.toLocaleString('en-IN')})</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-500">
                    <ShieldCheck size={14} className="text-neutral-700" />
                    <span>256-Bit SSL Encrypted & Verified Checkout</span>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            /* Order Confirmation Success State */
            <div className="py-12 px-4 text-center max-w-lg mx-auto space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle size={36} />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#ceac51] uppercase">
                  SIMULATION COMPLETE
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1 uppercase">
                  Order Successfully Placed!
                </h2>
                <p className="text-xs text-neutral-600 mt-2">
                  Thank you for shopping with AND India. Your demo order details are confirmed below.
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-sm text-left text-xs space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-500 font-medium">Order Number:</span>
                  <span className="font-bold font-mono text-neutral-900">{orderNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-medium">Customer:</span>
                  <span className="font-semibold text-neutral-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-medium">Shipping To:</span>
                  <span className="font-semibold text-neutral-900 text-right">
                    {formData.city}, {formData.state} ({formData.pincode})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-medium">Payment Mode:</span>
                  <span className="font-semibold uppercase text-neutral-900">
                    {formData.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-neutral-200 font-bold text-sm">
                  <span>Total Paid:</span>
                  <span className="text-neutral-900">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-600 bg-neutral-100 p-3 rounded-sm">
                <Package size={16} className="text-neutral-800" />
                <span>
                  Estimated Delivery: <strong>In 3-4 Business Days</strong>
                </span>
              </div>

              <button
                onClick={onClose}
                className="bg-[#1e1e1e] hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-3.5 px-8 transition-all"
              >
                CONTINUE EXPLORING AND INDIA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
