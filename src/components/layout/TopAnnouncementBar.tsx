import React, { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

const announcements = [
  'FLAT 40% OFF ON ORDERS ABOVE ₹3,499 | USE CODE: AND40',
  'COMPLIMENTARY SHIPPING ACROSS INDIA ON ALL ORDERS',
  'HASSLE-FREE 15-DAY RETURNS & DOORSTEP EXCHANGES',
  'NEW SEASON AUTUMN/WINTER STYLES NOW LIVE | EXPLORE NEW IN',
];

export const TopAnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentDeltaXRef = useRef(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Transition to specific index using GSAP slide animation
  const transitionTo = useCallback((newIndex: number, direction: 'left' | 'right') => {
    if (!textRef.current) {
      setCurrentIndex(newIndex);
      return;
    }

    const exitX = direction === 'left' ? -80 : 80;
    const enterX = direction === 'left' ? 80 : -80;

    // Kill any active tweens on the text
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      x: exitX,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          textRef.current,
          { x: enterX },
          { x: 0, duration: 0.35, ease: 'power2.out' }
        );
      },
    });
  }, []);

  const nextAnnouncement = useCallback(() => {
    const nextIdx = (currentIndex + 1) % announcements.length;
    transitionTo(nextIdx, 'left');
  }, [currentIndex, transitionTo]);

  const prevAnnouncement = useCallback(() => {
    const prevIdx = (currentIndex - 1 + announcements.length) % announcements.length;
    transitionTo(prevIdx, 'right');
  }, [currentIndex, transitionTo]);

  // Continuous automatic animation timer
  useEffect(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      if (!isDraggingRef.current) {
        nextAnnouncement();
      }
    }, 4000);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [nextAnnouncement]);

  // Pointer drag event handlers for mouse & touch
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    currentDeltaXRef.current = 0;

    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
    }

    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !textRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    currentDeltaXRef.current = deltaX;

    const dampedDelta = deltaX * 0.85;
    gsap.set(textRef.current, { x: dampedDelta });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }

    const deltaX = currentDeltaXRef.current;
    const threshold = 45;

    if (deltaX < -threshold) {
      nextAnnouncement();
    } else if (deltaX > threshold) {
      prevAnnouncement();
    } else {
      if (textRef.current) {
        gsap.to(textRef.current, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="bg-[#1e1e1e] text-white text-[11px] font-medium tracking-wider py-2 px-4 relative z-40 transition-colors select-none cursor-grab active:cursor-grabbing overflow-hidden touch-none"
      title="Drag left or right to switch announcements"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center relative">
        {/* Draggable announcement text */}
        <div className="w-full text-center overflow-hidden py-0.5">
          <p
            ref={textRef}
            className="font-medium tracking-widest uppercase transition-colors inline-block will-change-transform"
          >
            {announcements[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};
