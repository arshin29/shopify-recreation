export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice: number;
  discountPercentage?: number;
  sizes: string[];
  colors?: { name: string; hex: string }[];
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  tag?: string;
  description?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  quantity: number;
}

export type PaymentMethodType = 'upi' | 'card' | 'cod' | 'netbanking';

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: PaymentMethodType;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  cardName?: string;
  upiId?: string;
}

export interface PersonaProfile {
  id: string;
  label: string;
  cityTag: string;
  badgeColor: string;
  methodDescription: string;
  data: CheckoutFormData;
}

export interface MegaMenuItem {
  name: string;
  href: string;
  isSale?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuCategory {
  id: string;
  title: string;
  href: string;
  isHighlighted?: boolean;
  columns: MegaMenuColumn[];
  featuredImage?: {
    src: string;
    title: string;
    subtitle?: string;
    link: string;
  };
}
