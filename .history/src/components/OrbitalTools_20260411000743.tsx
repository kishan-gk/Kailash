import { motion } from 'motion/react';
import { usePortfolioData } from '../App';
import { useState, useEffect } from 'react';
import logoWordmark from 'figma:asset/1ba52697ae8cb6b7e718b6819c6bbe03b77ff95d.png';

const tools = [
  { 
    name: 'HTML', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    ring: 1,
  },
  { 
    name: 'CSS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    ring: 1,
  },
  { 
    name: 'JavaScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    ring: 1,
  },
  { 
    name: 'Figma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    ring: 2,
  },
  { 
    name: 'Framer', 
    logo: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
    ring: 2,
  },
  { 
    name: 'Photoshop', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    ring: 2,
  },
  { 
    name: 'Adobe Illustrator', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
    ring: 2,
  },
  { 
    name: 'Canva', 
    logo: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
    ring: 2,
  },
];

export function OrbitalTools() {
  const portfolio = usePortfolioData();

  // Merge API tools with static tools list
  const apiTools = portfolio?.tools ?? [];
  const displayTools = apiTools.length > 0
    ? apiTools.map(t => ({
        name: t.name,
        logo: t.icon_url,
        ring: t.orbit_level === 'inner' ? 1 : 2,
      }))
    : tools;

  const innerRingTools = displayTools.filter(t => t.ring === 1);
  const outerRingTools = displayTools.filter(t => t.ring === 2);

  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState(600);

  useEffect(() => {
    setMounted(true);
    
    // Calculate container size based on viewport
    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.9, 600);
      setContainerSize(size);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      
      const maxMove = 10;
      setMousePosition({
        x: -x * maxMove,
        y: -y * maxMove,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageError = (toolName: string) => {
    setImageErrors(prev => new Set(prev).add(toolName));
  };

  // Calculate sizes based on container
  const innerRadius = containerSize * 0.2333; // 140/600
  const outerRadius = containerSize * 0.35; // 210/600
  const innerCircleSize = containerSize * 0.4667; // 280/600
  const outerCircleSize = containerSize * 0.7; // 420/600
  const iconSize = Math.max(40, Math.min(containerSize * 0.1067, 64)); // 64/600, with min 40px
  const centerLogoSize = Math.max(60, Math.min(containerSize * 0.16, 96)); // 96/600, with min 60px
  const tooltipFontSize = Math.max(11, Math.min(containerSize * 0.0233, 14));
  const tooltipPadding = `${Math.max(4, Math.min(containerSize * 0.01, 6))}px ${Math.max(8, Math.min(containerSize * 0.02, 12))}px`;

  return (
    <motion.div 
      className="relative w-full aspect-square flex items-center justify-center"
      style={{
        maxWidth: 'min(90vw, 600px)',
        width: '100%',
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 0.5,
      }}
    >
      {/* Radial Purple Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 61, 255, 0.25) 0%, rgba(96, 50, 242, 0.15) 30%, rgba(96, 50, 242, 0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Inner Ring Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute rounded-full"
        style={{ 
          width: `${innerCircleSize}px`,
          height: `${innerCircleSize}px`,
          border: '0.5px solid rgba(255, 255, 255, 0.12)',
        }}
      />
      
      {/* Outer Ring Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute rounded-full"
        style={{ 
          width: `${outerCircleSize}px`,
          height: `${outerCircleSize}px`,
          border: '0.5px solid rgba(255, 255, 255, 0.12)',
        }}
      />

      {/* Inner Ring Tools */}
      {mounted && innerRingTools.map((tool, index) => {
        const totalTools = innerRingTools.length;
        const startAngle = (index / totalTools) * 360;
        
        return (
          <div
            key={`inner-${tool.name}`}
            className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.7 + index * 0.1 },
                scale: { duration: 0.5, delay: 0.7 + index * 0.1 },
              }}
              className="absolute top-0 left-0"
            >
              <div
                style={{
                  animation: 'orbit-clockwise 25s linear infinite',
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                <div
                  style={{
                    transform: `rotateZ(${startAngle}deg) translateX(${innerRadius}px)`,
                  }}
                >
                  <div
                    style={{
                      transform: `rotateZ(${-startAngle}deg)`,
                    }}
                  >
                    <div
                      style={{
                        animation: 'counter-rotate-clockwise 25s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    >
                      <ToolIcon 
                        tool={tool}
                        isPaused={isPaused}
                        setIsPaused={setIsPaused}
                        imageErrors={imageErrors}
                        handleImageError={handleImageError}
                        iconSize={iconSize}
                        tooltipFontSize={tooltipFontSize}
                        tooltipPadding={tooltipPadding}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Outer Ring Tools */}
      {mounted && outerRingTools.map((tool, index) => {
        const totalTools = outerRingTools.length;
        const startAngle = (index / totalTools) * 360;
        
        return (
          <div
            key={`outer-${tool.name}`}
            className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.9 + index * 0.1 },
                scale: { duration: 0.5, delay: 0.9 + index * 0.1 },
              }}
              className="absolute top-0 left-0"
            >
              <div
                style={{
                  animation: 'orbit-counter-clockwise 35s linear infinite',
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                <div
                  style={{
                    transform: `rotateZ(${startAngle}deg) translateX(${outerRadius}px)`,
                  }}
                >
                  <div
                    style={{
                      transform: `rotateZ(${-startAngle}deg)`,
                    }}
                  >
                    <div
                      style={{
                        animation: 'counter-rotate-counter-clockwise 35s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    >
                      <ToolIcon 
                        tool={tool}
                        isPaused={isPaused}
                        setIsPaused={setIsPaused}
                        imageErrors={imageErrors}
                        handleImageError={handleImageError}
                        iconSize={iconSize}
                        tooltipFontSize={tooltipFontSize}
                        tooltipPadding={tooltipPadding}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Center Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10 flex items-center justify-center"
      >
        <div className="relative group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="cursor-pointer"
            style={{
              width: `${centerLogoSize}px`,
              height: `${centerLogoSize}px`,
            }}
          >
            <img 
              src={logoWordmark} 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50"
            style={{
              padding: tooltipPadding,
              fontSize: `${tooltipFontSize}px`,
            }}
          >
            Kailash
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Extracted ToolIcon component for reusability
function ToolIcon({ 
  tool, 
  isPaused, 
  setIsPaused, 
  imageErrors,
  handleImageError,
  iconSize,
  tooltipFontSize,
  tooltipPadding
}: {
  tool: typeof tools[0];
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  imageErrors: Set<string>;
  handleImageError: (name: string) => void;
  iconSize: number;
  tooltipFontSize: number;
  tooltipPadding: string;
}) {
  const padding = Math.max(8, iconSize * 0.1875); // 12/64 = 0.1875

  return (
    <div className="relative group">
      <motion.div
        whileHover={{ scale: 1.2 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg cursor-pointer"
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          marginLeft: `${-iconSize / 2}px`,
          marginTop: `${-iconSize / 2}px`,
          padding: `${padding}px`,
        }}
      >
        {!imageErrors.has(tool.name) ? (
          <img 
            src={tool.logo} 
            alt={tool.name}
            className="w-full h-full object-contain"
            style={{ opacity: 0.9 }}
            onError={() => handleImageError(tool.name)}
            loading="lazy"
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center text-white/60 font-medium"
            style={{ fontSize: `${Math.max(10, iconSize * 0.1875)}px` }}
          >
            {tool.name.substring(0, 2)}
          </div>
        )}
      </motion.div>
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50"
        style={{
          padding: tooltipPadding,
          fontSize: `${tooltipFontSize}px`,
        }}
      >
        {tool.name}
      </div>
    </div>
  );
}