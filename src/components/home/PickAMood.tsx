import React from 'react';

interface PickAMoodProps {
  onMoodSelect: (mood: string) => void;
}

const moods = [
  {
    id: 'after-hours',
    title: 'After Hours',
    image: '/images/pick-a-mood/after-hours.jpg',
  },
  {
    id: 'the-brunch-edit',
    title: 'The Brunch Edit',
    image: '/images/pick-a-mood/the-brunch-edit.jpg',
  },
  {
    id: 'escape-mode',
    title: 'Escape Mode',
    image: '/images/pick-a-mood/escape-mode.jpg',
  },
  {
    id: 'corp-core',
    title: 'Corp Core',
    image: '/images/pick-a-mood/corp-core.jpg',
  },
];

export const PickAMood: React.FC<PickAMoodProps> = ({ onMoodSelect }) => {
  return (
    <section className="py-8 sm:py-12 bg-white" id="pick-a-mood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title strictly matching reference */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="text-base sm:text-lg md:text-xl font-normal tracking-normal text-[#1e1e1e]">
            Pick A Mood
          </h2>
        </div>

        {/* 2x2 Grid strictly matching reference: 4 big images each with a label */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3">
          {moods.map((mood) => (
            <div
              key={mood.id}
              onClick={() => onMoodSelect(mood.title)}
              className="group cursor-pointer relative overflow-hidden bg-neutral-100 aspect-[675/650]"
            >
              {/* Product Image */}
              <img
                src={mood.image}
                alt={mood.title}
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />

              {/* Label Badge strictly matching reference */}
              <div className="absolute bottom-5 sm:bottom-7 md:bottom-9 lg:bottom-11 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-[#1e1e1e] text-xs sm:text-[13px] md:text-sm font-normal tracking-wide shadow-xs whitespace-nowrap transition-colors duration-200 group-hover:bg-[#1e1e1e] group-hover:text-white">
                  {mood.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
