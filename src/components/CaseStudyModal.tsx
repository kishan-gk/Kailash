import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { colors, spacing, radius, typography, shadows, animation, zIndex, transitions } from '../design-system/tokens';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SmallText, SectionTitle, BodyText, Heading } from '../design-system/Typography';

// --- Reusable Sub-components ---

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span 
        className="text-xs font-medium uppercase tracking-wider"
        style={{ color: colors.text.muted, fontFamily: typography.fontFamily.secondary }}
      >
        {label}
      </span>
      <span 
        className="text-base font-medium"
        style={{ color: colors.text.primary, fontFamily: typography.fontFamily.primary }}
      >
        {value}
      </span>
    </div>
  );
}

function SectionBlock({ 
  title, 
  children, 
  className = "" 
}: { 
  title: string; 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: animation.duration.slow, ease: animation.easing.custom }}
      className={`flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-10 ${className}`}
    >
      <div className="md:col-span-4 lg:col-span-3">
        <h3 
          className="text-xl font-semibold sticky top-24"
          style={{ color: colors.text.primary, fontFamily: typography.fontFamily.heading }}
        >
          {title}
        </h3>
      </div>
      <div className="md:col-span-8 lg:col-span-9 space-y-6">
        {children}
      </div>
    </motion.div>
  );
}

function ImageCard({ 
  src, 
  alt, 
  className = "",
  aspectRatio = "aspect-video" 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl bg-white/5 border border-white/10 group ${aspectRatio} ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {src.startsWith('figma:') ? (
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      )}
    </motion.div>
  );
}

// --- Main Modal Component ---

interface ProjectData {
  title: string;
  description: string;
  category: string;
  image: string;
  brandColor: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

// Extracted Content Component to handle Scroll Ref properly
function CaseStudyContent({ project, onClose }: { project: ProjectData, onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mock extended data based on project
  const caseStudyData = {
    industry: project.category,
    year: "2023",
    timeline: "8 Weeks",
    role: "Lead Product Designer",
    overview: `This project focuses on redefining the user experience for ${project.title}. We aimed to create a seamless, intuitive interface that empowers users to achieve their goals with minimal friction.`,
    problem: "Users were struggling with complex navigation and an outdated visual hierarchy that made key tasks difficult to complete efficiently.",
    solution: "We implemented a streamlined dashboard, simplified user flows, and a modern design system that prioritizes clarity and accessibility.",
    result: "User engagement increased by 40% within the first month of launch, and support tickets dropped by 25%."
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-end justify-center z-[9999] pointer-events-none"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full h-[85vh] bg-black/85 backdrop-blur-2xl rounded-t-3xl border-t border-white/10 shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
        />
        
        {/* Handle for drawer look */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full z-50 pointer-events-none" />

        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 z-50 origin-left"
          style={{ 
            scaleX, 
            backgroundColor: project.brandColor,
            boxShadow: `0 0 10px ${project.brandColor}`
          }}
        />

        {/* Top Navigation Row - Sticky */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md z-40 sticky top-0 shrink-0 mt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold font-heading text-white">{project.title}</h2>
            <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-xs font-medium border border-white/10 text-white/60">
              Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden"
        >
          <div className="max-w-[1000px] mx-auto px-6 py-10 md:px-8 md:py-16 space-y-20">
            
            {/* Project Meta Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-white/5"
            >
              <MetaItem label="Industry" value={caseStudyData.industry} />
              <MetaItem label="Year" value={caseStudyData.year} />
              <MetaItem label="Timeline" value={caseStudyData.timeline} />
              <MetaItem label="Role" value={caseStudyData.role} />
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5"
            >
              {project.image.startsWith('figma:') ? (
                <img src={project.image} alt="Hero" className="w-full h-full object-cover" />
              ) : (
                <ImageWithFallback src={project.image} alt="Hero" className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </motion.div>

            {/* Sections */}
            <div className="space-y-24">
              {/* Overview */}
              <SectionBlock title="Overview">
                <BodyText className="text-white/80 text-lg leading-relaxed">
                  {caseStudyData.overview}
                </BodyText>
              </SectionBlock>

              {/* Problem */}
              <SectionBlock title="The Challenge">
                <BodyText className="text-white/80 leading-relaxed">
                  {caseStudyData.problem}
                </BodyText>
                <ImageCard 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80" 
                  alt="Process brainstorming"
                  className="mt-6"
                />
              </SectionBlock>

              {/* Solution */}
              <SectionBlock title="The Solution">
                <BodyText className="text-white/80 leading-relaxed mb-8">
                  {caseStudyData.solution}
                </BodyText>
                
                {/* Grid Layout 1: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <ImageCard 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80" 
                    alt="Design Details 1"
                    aspectRatio="aspect-[4/3]"
                  />
                  <ImageCard 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" 
                    alt="Design Details 2"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
                
                <BodyText className="text-white/80 leading-relaxed mb-6">
                  We focused heavily on component modularity and responsive behavior to ensure the application scales effectively across devices.
                </BodyText>

                  {/* Grid Layout 2: 3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ImageCard 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80" 
                    alt="Mobile View 1"
                    aspectRatio="aspect-[9/16]"
                  />
                  <ImageCard 
                    src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=600&q=80" 
                    alt="Mobile View 2"
                    aspectRatio="aspect-[9/16]"
                  />
                    <ImageCard 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80" 
                    alt="Mobile View 3"
                    aspectRatio="aspect-[9/16]"
                  />
                </div>
              </SectionBlock>

              {/* Result */}
              <SectionBlock title="The Result">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ color: project.brandColor }}>+40%</div>
                    <div className="text-sm text-white/60">Engagement</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ color: project.brandColor }}>-25%</div>
                    <div className="text-sm text-white/60">Support Tickets</div>
                  </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                    <div className="text-3xl font-bold text-white mb-2" style={{ color: project.brandColor }}>4.9/5</div>
                    <div className="text-sm text-white/60">User Satisfaction</div>
                  </div>
                </div>
                <BodyText className="text-white/80 leading-relaxed">
                  {caseStudyData.result}
                </BodyText>
              </SectionBlock>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Similar Projects - Placeholder for now, could pass in other projects */}
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-center text-white">Next Project</h3>
              {/* Reuse existing card style logic here via simple div or duplicate if ProjectCard not exported */}
              <div className="p-10 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors cursor-pointer group">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--brand-color)] transition-colors" style={{ '--brand-color': project.brandColor } as any}>
                    View Next Case Study
                  </h4>
                  <p className="text-white/50">Explore more work from the portfolio</p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="py-10 text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                Ready to build something amazing together?
              </h2>
              <button 
                className="px-8 py-4 rounded-full font-bold text-white transition-all transform hover:scale-105"
                style={{ backgroundColor: project.brandColor }}
                onClick={() => window.location.href = 'mailto:hello@example.com'}
              >
                Start a Conversation
              </button>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
            onClick={onClose}
          />

          {/* Modal Container */}
          <CaseStudyContent key="content" project={project} onClose={onClose} />
        </>
      )}
    </AnimatePresence>
  );
}
