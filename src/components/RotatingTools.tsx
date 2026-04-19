import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const tools = [
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Framer', color: '#0055FF' },
  { name: 'PS', color: '#31A8FF' },
  { name: 'AI', color: '#FF9A00' },
  { name: 'Canva', color: '#00C4CC' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'JS', color: '#F7DF1E' },
];

export function RotatingTools() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const radius = 180;

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      {/* Center Logo/Wordmark */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
      >
        <div className="text-2xl font-bold text-white">DESIGN</div>
      </motion.div>

      {/* Rotating Tools */}
      {mounted && tools.map((tool, index) => {
        const angle = (index / tools.length) * Math.PI * 2;
        
        return (
          <motion.div
            key={tool.name}
            className="absolute"
            style={{
              width: '64px',
              height: '64px',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: Math.cos(angle) * radius - 32,
              y: Math.sin(angle) * radius - 32,
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 + index * 0.05 },
              scale: { duration: 0.5, delay: 0.7 + index * 0.05 },
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: `${32 - Math.cos(angle) * radius}px ${32 - Math.sin(angle) * radius}px`,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer backdrop-blur-sm border border-white/20"
                style={{
                  backgroundColor: `${tool.color}33`,
                  borderColor: tool.color,
                }}
              >
                <span className="text-sm">{tool.name}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
