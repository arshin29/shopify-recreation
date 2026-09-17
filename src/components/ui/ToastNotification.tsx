import React from 'react';
import { CheckCircle, Heart, ShoppingBag, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'cart' | 'wishlist' | 'info';
  title: string;
  subtitle?: string;
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-neutral-900 text-white p-3.5 shadow-2xl border border-neutral-800 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300 rounded-xs"
        >
          <div className="mt-0.5 text-[#ceac51]">
            {toast.type === 'cart' && <ShoppingBag size={18} />}
            {toast.type === 'wishlist' && <Heart size={18} className="fill-[#e60000] text-[#e60000]" />}
            {toast.type === 'info' && <CheckCircle size={18} />}
          </div>

          <div className="flex-1 text-xs">
            <p className="font-semibold text-white tracking-wide">{toast.title}</p>
            {toast.subtitle && (
              <p className="text-[11px] text-neutral-300 mt-0.5">{toast.subtitle}</p>
            )}
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};
