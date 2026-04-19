import { motion } from 'motion/react';
import { usePortfolioData } from '../App';
import { useState } from 'react';
import { FolderKanban, Wrench, Briefcase, User, FileText } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects', icon: FolderKanban },
  { label: 'Skills', href: '#skills', icon: Wrench },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'About Me', href: '#about', icon: User },
];

export function StickyNav() {
  const portfolio = usePortfolioData();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Use API nav items if available, else fallback to static
  const displayNavItems = (portfolio?.nav && portfolio.nav.length > 0)
    ? portfolio.nav.map(n => {
        const iconMap: Record<string, any> = {
          'Projects': FolderKanban,
          'Skills': Wrench,
          'Experience': Briefcase,
          'About Me': User,
          'Resume': FileText,
        };
        return { label: n.label, href: n.section_id, icon: iconMap[n.label] ?? FolderKanban };
      }).filter(n => n.label !== 'Resume') // Resume handled separately
    : navItems;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeClick = () => {
    // Add your resume download/view logic here
    window.open('/resume.pdf', '_blank');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]"
    >
      <div className="flex items-center gap-4 sm:gap-3 md:gap-2 lg:gap-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
        {displayNavItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            onMouseEnter={() => {
              setActiveItem(item.label);
              setHoveredItem(item.label);
            }}
            onMouseLeave={() => {
              setActiveItem(null);
              setHoveredItem(null);
            }}
            className="relative px-3 sm:px-4 md:px-5 lg:px-6 py-2 text-white/80 hover:text-white transition-colors rounded-full group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeItem === item.label && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Text - hidden on mobile, visible on tablet+ */}
            <span className="relative z-10 hidden sm:inline text-xs md:text-sm font-medium">
              {item.label}
            </span>
            
            {/* Icon - visible on mobile, hidden on tablet+ */}
            <span className="relative z-10 sm:hidden">
              <item.icon className="w-5 h-5" />
            </span>
            
            {/* Tooltip for mobile */}
            {hoveredItem === item.label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-xs text-white whitespace-nowrap sm:hidden pointer-events-none"
              >
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20" />
              </motion.div>
            )}
          </motion.button>
        ))}
        
        {/* Resume Button/Icon */}
        <motion.button
          onClick={handleResumeClick}
          onMouseEnter={() => setHoveredItem('Resume')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative ml-1 sm:ml-2 px-3 sm:px-4 md:px-5 lg:px-6 py-2 bg-white/20 hover:bg-white/30 text-white transition-all rounded-full group border border-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Text - hidden on mobile, visible on tablet+ */}
          <span className="hidden sm:inline text-xs md:text-sm font-medium">
            Resume
          </span>
          
          {/* Icon - visible on mobile, hidden on tablet+ */}
          <span className="sm:hidden">
            <FileText className="w-5 h-5" />
          </span>
          
          {/* Tooltip for mobile */}
          {hoveredItem === 'Resume' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-xs text-white whitespace-nowrap sm:hidden pointer-events-none"
            >
              Resume
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/20" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}