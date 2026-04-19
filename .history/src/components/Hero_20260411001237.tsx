import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { StickyNav } from './StickyNav';
import { OrbitalTools } from './OrbitalTools';
import mainLogo from 'figma:asset/1ba52697ae8cb6b7e718b6819c6bbe03b77ff95d.png';
import { usePortfolioData } from '../App';

// ─── Helper: Split headline around the highlight word ────────────────────────
// e.g. line="I Design Experiences,", highlight="Experiences"
// → { before: "I Design ", highlight: "Experiences", after: "," }
function parseHeadline(line: string, highlight: string) {
  if (!highlight || !line.includes(highlight)) {
    return { before: line, highlight: '', after: '' };
  }
  const idx = line.indexOf(highlight);
  return {
    before: line.slice(0, idx),
    highlight,
    after: line.slice(idx + highlight.length),
  };
}

// ─── Animated dual-oval underline around a word ───────────────────────────────
function OvalHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {/* Behind-text oval */}
      <svg
        className="absolute"
        style={{
          left: '-16px', top: '50%',
          transform: 'translateY(-50%)',
          width: 'calc(100% + 32px)', height: '110%',
          pointerEvents: 'none', zIndex: -1,
        }}
        viewBox="0 0 240 70" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.ellipse
          cx="120" cy="35" rx="115" ry="30"
          stroke="#6032F2" strokeWidth="2.2" strokeLinecap="round"
          fill="none" opacity="0.65"
          transform="rotate(-1.5 120 35)"
          initial={{ strokeDasharray: '720', strokeDashoffset: 720 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* Above-text oval */}
      <svg
        className="absolute"
        style={{
          left: '-16px', top: '50%',
          transform: 'translateY(-50%)',
          width: 'calc(100% + 32px)', height: '110%',
          pointerEvents: 'none', zIndex: 2,
        }}
        viewBox="0 0 240 70" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.ellipse
          cx="120.5" cy="35.5" rx="114.5" ry="30.5"
          stroke="#8B3DFF" strokeWidth="1.8" strokeLinecap="round"
          fill="none" opacity="0.6"
          transform="rotate(1 120 35)"
          initial={{ strokeDasharray: '725', strokeDashoffset: 725 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <span style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}>
        {children}
      </span>
    </span>
  );
}

// ─── Renders one headline line, wrapping highlight word in oval if present ────
function HeadlineLine({ text, highlightWord }: { text: string; highlightWord: string }) {
  const { before, highlight, after } = parseHeadline(text, highlightWord);

  if (!highlight) {
    return <span style={{ display: 'inline-block' }}>{text}</span>;
  }

  return (
    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {before}
      <OvalHighlight>{highlight}</OvalHighlight>
      {after}
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const portfolio = usePortfolioData();
  const hero = portfolio?.hero;

  // Every field is 100% from API — fallbacks only if API is unreachable
  const badgeText     = hero?.badge_text             ?? 'UI/UX Designer • 2+ Years Experience';
  const line1         = hero?.headline_line1         ?? 'I Design Experiences,';
  const line2         = hero?.headline_line2         ?? 'Not Just Interfaces.';
  const highlightWord = hero?.headline_highlight_word ?? 'Experiences';
  const description   = hero?.description            ?? "I'm a UI/UX designer focused on building intuitive, user-centered digital experiences, crafting modern interfaces for web, mobile, and SaaS products that users genuinely enjoy.";
  const ctaText       = hero?.cta_button_text        ?? "Let's Connect";
  const ctaUrl        = hero?.cta_button_url         ?? '#contact';
  // Use API logo if provided, else local figma asset
  const logoSrc       = hero?.logo_image             ?? mainLogo;

  const handleCta = () => {
    if (!ctaUrl) return;
    if (ctaUrl.startsWith('#')) {
      document.querySelector(ctaUrl)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(ctaUrl, '_blank');
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(8, 6, 12, 0.6) 0%, transparent 50%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 75% 50%, rgba(96, 50, 242, 0.18) 0%, rgba(139, 61, 255, 0.12) 25%, transparent 55%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 80%, rgba(139,61,255,0.12), transparent 45%)',
      }} />

      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 flex justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center"
        >
          <img src={logoSrc} alt="Logo" className="h-8 w-auto object-contain" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleCta}
          className="px-6 py-2.5 rounded-full font-medium transition-all duration-300"
          style={{ backgroundColor: '#6032F2', color: '#ffffff' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#8B3DFF'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#6032F2'; }}
        >
          {ctaText}
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 pb-32 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="space-y-6">

            {/* Badge — from API: badge_text */}
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

            {/* Headline — from API: headline_line1, headline_line2, headline_highlight_word */}
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
              {/* Line 1: automatically wraps the highlight word in animated oval */}
              <HeadlineLine text={line1} highlightWord={highlightWord} />
              <br />
              {/* Line 2: plain — no highlight on second line by default */}
              <HeadlineLine text={line2} highlightWord="" />
            </motion.h1>

            {/* Description — from API: description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-l max-w-xl pt-2 leading-relaxed"
              style={{ color: '#ffffff', opacity: 0.85 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right — Orbital Tools */}
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

      {/* Sticky Nav */}
      <StickyNav />

      {/* Grain noise overlay */}
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