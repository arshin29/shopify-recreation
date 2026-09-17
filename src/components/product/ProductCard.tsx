import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col bg-white cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView?.(product)}
    >
      {/* Image Container with smooth hover transition */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f7f7f7]">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
        />
      </div>

      {/* Product Details matching reference image */}
      <div className="pt-2.5 pb-1 flex flex-col text-left">
        <h3
          className="text-[12px] sm:text-[13px] font-normal text-[#1e1e1e] leading-snug line-clamp-1"
          title={product.name}
        >
          {product.name}
        </h3>
        <span className="text-[13px] sm:text-[14px] font-bold text-[#1e1e1e] mt-1">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
};

