import React, { useState } from 'react';
import { productsData } from './data/products';
import { Product, CartItem } from './types';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Header } from './components/layout/Header';
import { MobileDrawerNav } from './components/layout/MobileDrawerNav';
import { HeroCarousel } from './components/home/HeroCarousel';
import { CategoryGrid } from './components/home/CategoryGrid';
import { ProductSwimlane } from './components/home/ProductSwimlane';
import { GetTheLook } from './components/home/GetTheLook';
import { SeenAndStyled } from './components/home/SeenAndStyled';
import { JewelleryMarquee } from './components/home/JewelleryMarquee';
import { ExquisiteEvenings } from './components/home/ExquisiteEvenings';
import { PickAMood } from './components/home/PickAMood';
import { FullWidthBanners } from './components/home/FullWidthBanners';
import { StyleStories } from './components/home/StyleStories';
import { InstagramBanner } from './components/home/InstagramBanner';
import { BrandPerks } from './components/home/BrandPerks';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickViewModal } from './components/product/QuickViewModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { SearchModal } from './components/ui/SearchModal';
import { ToastNotification, ToastMessage } from './components/ui/ToastNotification';
import { FloatingActions } from './components/ui/FloatingActions';

export const App: React.FC = () => {
  // Pre-seed cart with 1 authentic signature product for immediate demo readiness
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: productsData[0], // Belted Emerald Green Pleated Midi Dress
      selectedSize: 'S',
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>([productsData[1].id]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'cart' | 'wishlist' | 'info', title: string, subtitle?: string) => {
    const newToast: ToastMessage = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      title,
      subtitle,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}-${Date.now()}`,
          product,
          selectedSize: size,
          quantity,
        },
      ];
    });

    addToast('cart', 'Added to Shopping Bag', `${product.name} (Size: ${size})`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        addToast('info', 'Removed from Wishlist', product.name);
        return prev.filter((id) => id !== product.id);
      } else {
        addToast('wishlist', 'Saved to Wishlist', product.name);
        return [...prev, product.id];
      }
    });
  };

  const handleNavigateSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Default to New Arrivals swimlane if section is a category filter
      const newArrivals = document.getElementById('new-arrivals');
      if (newArrivals) {
        newArrivals.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    addToast('info', 'Order Confirmed', 'Confirmation sent via SMS and Email.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#ceac51]/20 selection:text-[#1e1e1e]">
      {/* Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* Main Sticky Header */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Mobile Slide-in Drawer */}
      <MobileDrawerNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Homepage Content */}
      <main className="flex-1">
        {/* 1: Hero Carousel Banner */}
        <HeroCarousel onCtaClick={handleNavigateSection} />

        {/* 2: Category Grid */}
        <CategoryGrid onSelectCategory={() => handleNavigateSection('#new-arrivals')} />

        {/* 3: Product Swimlane (New Arrivals) */}
        <ProductSwimlane
          products={productsData}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p, s) => handleAddToCart(p, s, 1)}
        />

        {/* 4: Get The Look Section (Vertical Scroll & Static Look Image) */}
        <GetTheLook
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p, s) => handleAddToCart(p, s, 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 5: Seen AND Styled (Instagram Community Gallery) */}
        <SeenAndStyled onShopLook={() => handleNavigateSection('#new-arrivals')} />

        {/* 5b: Jewellery Infinite Auto-animated Loop */}
        <JewelleryMarquee
          onQuickView={(p) => setQuickViewProduct(p)}
          onDiscoverClick={() => handleNavigateSection('#new-arrivals')}
        />

        {/* 5c: Exquisite Evenings (Static Editorial + Product Carousel) */}
        <ExquisiteEvenings
          onQuickView={(p) => setQuickViewProduct(p)}
          onShopNow={() => handleNavigateSection('#new-arrivals')}
        />

        {/* 6: Pick A Mood */}
        <PickAMood onMoodSelect={() => handleNavigateSection('#new-arrivals')} />

        {/* 7: Full Width Banners */}
        <FullWidthBanners onBannerClick={handleNavigateSection} />

        {/* 8: Style Stories (Journal) */}
        <StyleStories />

        {/* 9: Instagram Follow Banner */}
        <InstagramBanner />

        {/* 10: Store Benefits & Perks */}
        <BrandPerks />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Product Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(p, s, q) => handleAddToCart(p, s, q)}
      />

      {/* Checkout Simulation Modal with 1-Click Auto-Fills */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={productsData}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Toast Feedback */}
      <ToastNotification toasts={toasts} onDismiss={dismissToast} />

      {/* Floating WhatsApp and Scroll to Top */}
      <FloatingActions />
    </div>
  );
};
