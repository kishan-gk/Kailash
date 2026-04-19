import { createContext, useContext } from 'react';
import { Hero } from './components/Hero';
import { FogBandMarquee } from './components/FogBandMarquee';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { colors } from './design-system/tokens';
import { usePortfolio, PortfolioData } from './hooks/usePortfolio';

// ─── Portfolio Context ────────────────────────────────────────────────────────
export const PortfolioContext = createContext<PortfolioData | null>(null);
export const usePortfolioData = () => useContext(PortfolioContext);

export default function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-white"
        style={{ backgroundColor: colors.background.primary }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
          <p className="text-white/40 text-sm tracking-widest uppercase">Loading</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-white"
        style={{ backgroundColor: colors.background.primary }}
      >
        <p className="text-red-400 text-sm">
          Failed to load portfolio data. Make sure the API is running at{' '}
          <code className="bg-white/10 px-1 rounded">http://127.0.0.1:8000/api/portfolio</code>
        </p>
      </div>
    );
  }

  return (
    <PortfolioContext.Provider value={data}>
      <div
        className="min-h-screen text-white"
        style={{ backgroundColor: colors.background.primary }}
      >
        <Hero />
        <FogBandMarquee />
        {/* <Projects /> */}
        <Expertise />
        <Experience />
        <About />
      </div>
    </PortfolioContext.Provider>
  );
}