import React from 'react';

const FreeShippingIcon: React.FC = () => (
  <svg
    viewBox="0 0 54 44"
    className="w-10 h-8 sm:w-11 sm:h-9 text-[#1e1e1e]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Speed lines */}
    <path d="M4 14h10" />
    <path d="M1 20h13" />
    <path d="M5 26h9" />

    {/* Truck cargo body */}
    <path d="M15 11h20v18H15z" />

    {/* Cab */}
    <path d="M35 17h6l4.5 5.5V29h-10.5V17z" />
    <path d="M35 23h9.5" />

    {/* Wheels */}
    <circle cx="22" cy="31.5" r="3.5" />
    <circle cx="40.5" cy="31.5" r="3.5" />

    {/* Underside connectors */}
    <path d="M15 29h3.5" />
    <path d="M25.5 29H37" />
    <path d="M44 29H46" />
  </svg>
);

const EasyReturnsIcon: React.FC = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-9 h-9 sm:w-10 sm:h-10 text-[#1e1e1e]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Isometric box */}
    <path d="M24 17.5l-7 4 7 4 7-4-7-4z" />
    <path d="M17 21.5v8l7 4v-8" />
    <path d="M31 21.5v8l-7 4" />
    <path d="M24 25.5v8" />

    {/* Circular return arrow */}
    <path d="M13.5 16A16 16 0 1 1 9.5 28" />
    <path d="M13.5 10v6.5H7" />
  </svg>
);

const SecurePaymentIcon: React.FC = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-9 h-9 sm:w-10 sm:h-10 text-[#1e1e1e]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Credit Card */}
    <rect x="5" y="11" width="30" height="21" rx="2.5" />
    <path d="M5 17h30" />
    <path d="M9 25h6" />

    {/* Shield overlapping bottom-right corner */}
    <path
      d="M34 23l6-2v7c0 4.5-3.5 8-6 9-2.5-1-6-4.5-6-9v-7l6 2z"
      fill="white"
    />
    <path d="M31.5 28.5l2 2 3.5-3.5" />
  </svg>
);

export const BrandPerks: React.FC = () => {
  const perks = [
    {
      icon: <FreeShippingIcon />,
      title: 'Free Shipping',
      description: 'On orders of INR 1500 and above',
    },
    {
      icon: <EasyReturnsIcon />,
      title: 'Easy Returns',
      description: 'Free returns until 7 days of delivery',
    },
    {
      icon: <SecurePaymentIcon />,
      title: 'Secure Payment',
      description: 'Safe & hassle free checkout',
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white" aria-label="Service Perks">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-2"
            >
              <div className="h-11 sm:h-12 flex items-center justify-center mb-2.5 sm:mb-3">
                {perk.icon}
              </div>
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1e1e1e] tracking-tight">
                {perk.title}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#555555] mt-1 font-normal leading-normal">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
