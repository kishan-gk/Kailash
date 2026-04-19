import { Hero } from './components/Hero';
import { FogBandMarquee } from './components/FogBandMarquee';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { colors } from './design-system/tokens';

export default function App() {
  return (
    <div 
      className="min-h-screen text-white" 
      style={{ backgroundColor: colors.background.primary }}
    >
      <Hero />
      <FogBandMarquee />
      <Projects />
      <Expertise />
      <Experience />
      <About />
    </div>
  );
}
