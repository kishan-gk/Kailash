import { motion, useAnimationFrame } from 'motion/react';
import { useState, useRef } from 'react';

// Import assets from the reference
import imgLogo from "figma:asset/f98421721d12386bebd55e905a713384ae4cd11e.png"; // Medanta
import imgPartnersLogo from "figma:asset/bee1a1eea8bd05f3b5897cace6bcd9769885667f.png"; // Business
import imgPartnersLogo1 from "figma:asset/26d64d0dd4ccf35df7c13c10fa843bcae93f3aa3.png"; // Taskworld
import imgPartnersLogo2 from "figma:asset/fe45d11511a7283865c1d4e2ff23d2788bec856d.png"; // Boeing
import imgPartnersLogo3 from "figma:asset/c0e632cfadb9d668e6070726fb9908e61777cb99.png"; // Evergreen

const clients = [
  { name: 'Medanta', logo: imgLogo },
  { name: 'Business', logo: imgPartnersLogo },
  { name: 'Taskworld', logo: imgPartnersLogo1 },
  { name: 'Boeing', logo: imgPartnersLogo2 },
  { name: 'Evergreen', logo: imgPartnersLogo3 },
];

// Duplicate clients to creates 8 sets (40 items)
// This ensures we have enough content to fill wide screens and allow for smooth looping.
const filledClients = [
  ...clients, ...clients, ...clients, ...clients,
  ...clients, ...clients, ...clients, ...clients
];

export function FogBandMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  // Auto-scroll animation loop
  useAnimationFrame((time, delta) => {
    // Only auto-scroll if not paused (hovered) and not dragging
    if (!isPaused && !isDragging && scrollRef.current) {
      const speed = 0.5;
      const moveBy = (speed * delta) / 16;
      scrollRef.current.scrollLeft += moveBy;
      checkScrollLoop();
    }
  });

  const checkScrollLoop = () => {
    if (!scrollRef.current) return;
    
    // Looping logic:
    // When we scroll past half the width, we jump back by exactly half the width.
    // If we scroll backwards past 0, we jump forward by half the width.
    const halfWidth = scrollRef.current.scrollWidth / 2;
    
    if (scrollRef.current.scrollLeft >= halfWidth) {
      scrollRef.current.scrollLeft -= halfWidth;
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += halfWidth;
    }
  };

  // Mouse Down: Start Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse Move: Perform Drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    
    // Calculate distance moved
    const x = e.pageX;
    const walk = x - startX; 
    
    // Update scroll position (subtract walk because dragging left moves content right)
    scrollRef.current.scrollLeft = startScrollLeft - walk;
    
    // Apply infinite loop logic instantly while dragging
    checkScrollLoop();
  };

  // Mouse Up: Stop Dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse Leave: Stop Dragging + Resume Auto Scroll
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
    setHoveredIndex(null);
  };

  return (
    <section 
      className="relative w-full z-10" 
      style={{ 
        height: '180px', // Compact height
        marginTop: '-90px', // Overlap exactly half to blend
        marginBottom: '0px', 
        pointerEvents: 'none',
      }}
    >
      {/* 
        Gradient Transition Background
        0% -> Transparent (Hero #0B0815 shows through)
        45% -> #0A0A0A (Solid starts just before the vertical center)
        100% -> #0A0A0A (Solid match with Projects section)
      */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.00) 0%, #0A0A0A 45%)',
        }}
      />

      {/* Marquee Container - Centered vertically */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto pt-8">
        <div className="w-full overflow-hidden relative">
          
          {/* Side Gradients for Smooth Fade In/Out */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 md:w-64 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(10,10,10,1) 0%, transparent 100%)',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 md:w-64 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(10,10,10,1) 0%, transparent 100%)',
            }}
          />

          {/* 
            Scrollable Container 
          */}
          <div 
            ref={scrollRef}
            className="w-full overflow-x-auto flex items-center px-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
             <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
             `}</style>

            {filledClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 relative group flex items-center justify-center mr-12 md:mr-20"
                onMouseEnter={() => setHoveredIndex(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-8 md:h-10 w-auto flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain transition-all duration-300 pointer-events-none" // prevent drag ghost
                    draggable={false}
                    style={{
                      // Default: Grayscale, slightly dimmed
                      // Hover: Full color, full opacity
                      filter: hoveredIndex === index 
                        ? 'grayscale(0%) opacity(1)' 
                        : 'grayscale(100%) opacity(0.5) brightness(0.8)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
