import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { StickyNav } from './StickyNav';
import { OrbitalTools } from './OrbitalTools';
import mainLogo from 'figma:asset/1ba52697ae8cb6b7e718b6819c6bbe03b77ff95d.png';
import { usePortfolioData } from '../App';

export function Hero() {
  const portfolio = usePortfolioData();
  const hero = portfolio?.hero;

  const badgeText = hero?.badge_text ?? 'UI/UX Designer • 2+ Years Experience';
  const headlineLine1 = hero?.headline_line1 ?? 'I Design Experiences,';
  const headlineLine2 = hero?.headline_line2 ?? 'Not Just Interfaces.';
  const highlightWord = hero?.headline_highlight_word ?? 'Experiences';
  const description = hero?.description ?? "dsfsI'm a UI/UX designer focused on building intuitive, user-centered digital experiences.";
  const ctaText = hero?.cta_button_text ?? "Let's Connect";
  const ctaUrl = hero?.cta_button_url ?? '#contact';

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Directional Lighting Background - darker left, brighter right */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to right, rgba(8, 6, 12, 0.6) 0%, transparent 50%)'
      }} />
      <div className="absolute inset-0" style={{ 
        background: 'radial-gradient(circle at 75% 50%, rgba(96, 50, 242, 0.18) 0%, rgba(139, 61, 255, 0.12) 25%, transparent 55%)'
      }} />
      
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 20% 80%, rgba(139,61,255,0.12), transparent 45%)",
      }}
/>

      
      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 flex justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center"
        >
          <img 
            src={mainLogo} 
            alt="Logo" 
            className="h-8 w-auto object-contain"
          />
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 py-2.5 rounded-full font-medium transition-all duration-300"
          style={{ 
            backgroundColor: '#6032F2',
            color: '#ffffff'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#8B3DFF';
            // e.currentTarget.style.boxShadow = "0 0 25px rgba(139,61,255,.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6032F2';
            // e.currentTarget.style.boxShadow = "none";
          }}
        >
          Let's Connect
        </motion.button>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 pb-32 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Professional Credential Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1 backdrop-blur-md rounded-lg"
              style={{ 
                backgroundColor: 'rgba(96, 50, 242, 0.08)',
                border: '1px solid rgba(139, 61, 255, 0.2)'
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: '#8B3DFF', opacity: 0.7 }} />
              <span className="text-xs" style={{ color: '#B9B3D6' }}>{badgeText}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold leading-tight max-w-xl"
              style={{ 
                color: '#ffffff',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                letterSpacing: '-0.02em'
              }}
            >
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                I Design{' '}
                <span className="relative inline-block">
                  {/* First oval - Behind the text */}
                  <svg
                    className="absolute"
                    style={{
                      left: '-16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 'calc(100% + 32px)',
                      height: '110%',
                      pointerEvents: 'none',
                      zIndex: -1,
                    }}
                    viewBox="0 0 240 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    {/* First imperfect oval stroke - Primary color - Behind text */}
                    <motion.ellipse
                      cx="120"
                      cy="35"
                      rx="115"
                      ry="30"
                      stroke="#6032F2"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.65"
                      transform="rotate(-1.5 120 35)"
                      initial={{
                        strokeDasharray: '720',
                        strokeDashoffset: 720,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </svg>
                  
                  {/* Second oval - Above the text */}
                  <svg
                    className="absolute"
                    style={{
                      left: '-16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 'calc(100% + 32px)',
                      height: '110%',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                    viewBox="0 0 240 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    {/* Second imperfect oval stroke - Secondary color - Above text */}
                    <motion.ellipse
                      cx="120.5"
                      cy="35.5"
                      rx="114.5"
                      ry="30.5"
                      stroke="#8B3DFF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.6"
                      transform="rotate(1 120 35)"
                      initial={{
                        strokeDasharray: '725',
                        strokeDashoffset: 725,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </svg>
                  
                  <span style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>
                    Experiences
                  </span>
                </span>,
              </span>
              <br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                Not Just Interfaces.ss
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-l max-w-xl pt-2 leading-relaxed"
              style={{ color: '#ffffff', opacity: 0.85 }}
            >
              {/* UI/UX Designer with 2+ years of experience crafting high-impact web, mobile, and SaaS products. */}
              I’m a UI/UX designer focused on building intuitive, user-centered digital experiences, crafting modern interfaces for web, mobile, and SaaS products that users genuinely enjoy.
            </motion.p>
          </div>

          {/* Right Content - Orbital Tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center"
          >
            <OrbitalTools />
          </motion.div>
        </div>
      </div>

      {/* Sticky Bottom Navigation */}
      <StickyNav />

<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.015\"/></svg>')",
  }}
/>
      
    </section>
  );
}