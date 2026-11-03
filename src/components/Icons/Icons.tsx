import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const ShieldCheckIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <img
    src="/icons/top-shield.png"
    alt="Compra segura"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const TruckIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <img
    src="/icons/top-truck.png"
    alt="Frete grátis"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const CreditCardIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <img
    src="/icons/top-card.png"
    alt="Parcelamento"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const SearchIcon: React.FC<IconProps> = ({
  size = 28,
  color = '#9F9F9F',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'block' }}
    {...props}
  >
    <circle
      cx="11.5"
      cy="11.5"
      r="7"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 16.5L23.5 23.5"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BoxIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <img
    src="/icons/icon-box.png"
    alt="Meus Pedidos"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const HeartIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <img
    src="/icons/icon-heart.png"
    alt="Favoritos"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const UserIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <img
    src="/icons/icon-user.png"
    alt="Minha Conta"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const CartIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <img
    src="/icons/icon-cart.png"
    alt="Carrinho"
    width={size}
    height={size}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export const CrownIcon: React.FC<IconProps> = ({
  size = 28,
  color = 'currentColor',
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'block', flexShrink: 0 }}
    {...props}
  >
    <path
      d="M4 10L9 13L14 5L19 13L24 10L22 21C18 19.5 10 19.5 6 21L4 10Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" x2="19" y1="12" y2="12" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" x2="12" y1="5" y2="19" />
    <line x1="5" x2="19" y1="12" y2="12" />
  </svg>
);

// Category Icons
export const TechIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Monitor */}
    <rect x="8" y="10" width="34" height="26" rx="3" />
    <line x1="25" y1="36" x2="25" y2="44" />
    <line x1="16" y1="44" x2="34" y2="44" />
    {/* Phone */}
    <rect x="36" y="22" width="18" height="30" rx="3" fill="#FFFFFF" />
    <circle cx="45" cy="47" r="1.5" />
    <line x1="42" y1="26" x2="48" y2="26" />
  </svg>
);

export const SupermarketIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Shop storefront */}
    <path d="M10 22h44l-4-10H14l-4 10z" />
    <path d="M10 22v6a5 5 0 0 0 10 0v-6a5 5 0 0 0 10 0v-6a5 5 0 0 0 10 0v-6a5 5 0 0 0 10 0v-6a5 5 0 0 0 4 6" />
    <path d="M13 28v22h38V28" />
    <rect x="22" y="36" width="10" height="14" />
    <line x1="38" y1="36" x2="45" y2="36" />
    <line x1="38" y1="42" x2="45" y2="42" />
  </svg>
);

export const BeveragesIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Bottle */}
    <path d="M22 14h8v8l4 6v22H18V28l4-6v-8z" />
    <line x1="22" y1="14" x2="30" y2="14" />
    <rect x="22" y="35" width="8" height="9" />
    {/* Glass */}
    <path d="M38 32h12l-2 18H40l-2-18z" />
    <line x1="40" y1="40" x2="48" y2="40" />
  </svg>
);

export const ToolsIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Crossed tools */}
    <line x1="16" y1="16" x2="48" y2="48" />
    <path d="M14 22l6-6 4 4-6 6z" />
    <circle cx="48" cy="48" r="4" />
    <line x1="48" y1="16" x2="16" y2="48" />
    <path d="M42 12l8 8-4 4-8-8z" />
  </svg>
);

export const HealthIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Heart on hand */}
    <path d="M32 16c2-4 7-6 11-2 4 4 2 9-2 13l-9 9-9-9c-4-4-6-9-2-13 4-4 9-2 11 2z" />
    <path d="M12 44h14l8-4h14a4 4 0 0 1 4 4v4H20l-8-4z" />
  </svg>
);

export const FitnessIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Treadmill runner */}
    <circle cx="36" cy="16" r="4" />
    <path d="M26 28l6-4 6 5 6-3" />
    <path d="M32 24v10l-6 8" />
    <path d="M32 34l8 6 6-2" />
    <line x1="10" y1="50" x2="52" y2="44" strokeWidth="3" />
    <circle cx="14" cy="50" r="3" />
    <circle cx="48" cy="44" r="3" />
    <line x1="14" y1="50" x2="18" y2="36" />
    <line x1="16" y1="36" x2="24" y2="36" />
  </svg>
);

export const FashionIcon: React.FC<IconProps> = ({ size = 48, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Dress */}
    <path d="M20 18l6 8v18l-14 4 4-22 4-8h10z" />
    <path d="M22 18a4 4 0 0 1 8 0" />
    {/* High heel */}
    <path d="M42 36l8 12h4v-2l-4-10-8 0z" />
    <line x1="54" y1="48" x2="54" y2="38" />
    {/* Diamond */}
    <polygon points="44,20 48,14 54,14 58,20 51,28" />
  </svg>
);

// Social Media Icons
export const InstagramIcon: React.FC<IconProps> = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill={color} />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Econverse Logo
export const EconverseLogo: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 139,
  height = 42,
  className,
}) => (
  <img
    src="/logo.png"
    alt="Econverse"
    width={width}
    height={height}
    className={className}
    style={{ display: 'block', height: 'auto', maxHeight: `${height}px`, width: 'auto' }}
  />
);
