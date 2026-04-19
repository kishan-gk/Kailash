import { motion } from 'motion/react';
import { StatsCard, Chip } from '../design-system/Cards';
import { SectionTitle, BodyText, StatNumber, StatLabel } from '../design-system/Typography';
import { FlexContainer } from '../design-system/Layout';
import { colors, spacing, radius, animation, transitions } from '../design-system/tokens';
import svgPaths from "../imports/svg-30n01e9xaz";
import footerSvgPaths from "../imports/svg-yl99m8knoy";
import imgFavicon1 from "figma:asset/1ba52697ae8cb6b7e718b6819c6bbe03b77ff95d.png";

function Company() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration }}
      className="-translate-x-1/2 absolute left-1/2 rounded-full size-[80px] top-[-40px] z-[4]" 
      style={{ backgroundColor: '#171717' }}
      data-name="Company"
    >
      <div 
        className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full"
        style={{ 
          backgroundColor: colors.background.secondary,
        }}
      >
        <div className="aspect-[160/160] h-full relative shrink-0" data-name="Favicon 1">
          <img alt="Company Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFavicon1} />
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border-2 border-solid inset-[-1px] pointer-events-none rounded-full"
        style={{ borderColor: '#331b54' }}
      />
    </motion.div>
  );
}

function Frame() {
  return (
    <div 
      className="content-stretch flex flex-col gap-3 items-center leading-[0] relative shrink-0 text-center w-full max-w-[650px] z-[2]"
    >
      <SectionTitle animated delay={animation.delay.short}>
        About Me
      </SectionTitle>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: transitions.smooth.duration, delay: animation.delay.medium }}
        className="flex flex-col justify-center relative shrink-0 w-full"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '36px',
          fontWeight: 'bold',
          color: colors.text.primary,
        }}
      >
        <p className="leading-[1.35] whitespace-pre-wrap">Turning ideas into meaningful digital experiences.</p>
      </motion.div>
      
      <BodyText 
        animated 
        delay={animation.delay.long}
        className="opacity-70"
        style={{ color: colors.text.primary }}
      >
        I'm a UI/UX Designer focused on creating intuitive, scalable digital experiences. I enjoy turning complex ideas into clear user journeys and polished interfaces across web and mobile products.
      </BodyText>
    </div>
  );
}

function StatItem({ number, label, suffix = '' }: { number: string; label: string; suffix?: string }) {
  return (
    <div 
      className="content-stretch flex flex-col gap-2 items-center leading-[0] relative shrink-0 text-center text-white w-[125px]"
    >
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="whitespace-pre-wrap">
          <StatNumber>{number}</StatNumber>
          {suffix && (
            <span 
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '23.22px',
                fontWeight: 'bold',
                lineHeight: 1.35,
              }}
            >
              {suffix}
            </span>
          )}
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <StatLabel>{label}</StatLabel>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <StatsCard delay={animation.delay.slow}>
      <StatItem number="2" suffix="+" label="Experience" />
      <StatItem number="30" suffix="+" label="Projects" />
      <StatItem number="BCA" label="Education" />
    </StatsCard>
  );
}

/* Footer Components */

function ContactIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Contact Icon">
          <path clipRule="evenodd" d={footerSvgPaths.p241c9b80} fill="currentColor" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactList() {
  return (
    <div 
      className="content-stretch flex gap-2 items-center p-2 relative shrink-0"
      style={{ 
        color: colors.text.secondary,
      }}
      data-name="Contact list"
    >
      <ContactIcon />
      <div 
        className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap" 
        style={{ 
          fontFamily: "'Archivo', sans-serif",
          fontSize: '16px',
          fontWeight: 'normal',
          fontVariationSettings: "'wdth' 100",
        }}
      >
        <p className="leading-[1.5]">kailash.kr0508@gmail.com</p>
      </div>
    </div>
  );
}

function ContactIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Contact Icon">
          <path d={footerSvgPaths.p3fb290c0} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactList1() {
  return (
    <div 
      className="content-stretch flex gap-2 items-center p-2 relative shrink-0"
      style={{ 
        color: colors.text.secondary,
      }}
      data-name="Contact list"
    >
      <ContactIcon1 />
      <div 
        className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap"
        style={{ 
          fontFamily: "'Archivo', sans-serif",
          fontSize: '16px',
          fontWeight: 'normal',
          fontVariationSettings: "'wdth' 100",
        }}
      >
        <p className="leading-[1.5]">+91 62994 17052</p>
      </div>
    </div>
  );
}

function ContactGroup() {
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative"
      style={{ gap: '28px' }}
      data-name="Contact"
    >
      <ContactList />
      <ContactList1 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_405)" id="linkedin">
          <path d={footerSvgPaths.pd10d3f0} fill="var(--fill-0, #007AB9)" id="Vector" />
          <path d={footerSvgPaths.p11712600} fill="var(--fill-0, #F1F2F2)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_190_405">
            <rect fill="white" height="33.3333" width="33.3333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContactIcon2() {
  return (
    <a href="#" className="overflow-clip relative shrink-0 size-[40px] transition-transform hover:scale-110 cursor-pointer" data-name="Contact Icon">
      <Linkedin />
    </a>
  );
}

function Dribbble() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="dribbble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_424)" id="dribbble">
          <path d={footerSvgPaths.p1bfe4930} fill="var(--fill-0, #E74D89)" id="Vector" />
          <path d={footerSvgPaths.p2c54a880} fill="var(--fill-0, #B2215A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_190_424">
            <rect fill="white" height="33.3333" width="33.3333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContactIcon3() {
  return (
    <a href="#" className="overflow-clip relative shrink-0 size-[40px] transition-transform hover:scale-110 cursor-pointer" data-name="Contact Icon">
      <Dribbble />
    </a>
  );
}

function Behance() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="behance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_412)" id="behance">
          <path d={footerSvgPaths.p5244300} fill="var(--fill-0, #0057FF)" id="Vector" />
          <path d={footerSvgPaths.p33c49b00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_190_412">
            <rect fill="white" height="33.3333" width="33.3333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContactIcon4() {
  return (
    <a href="#" className="overflow-clip relative shrink-0 size-[40px] transition-transform hover:scale-110 cursor-pointer" data-name="Contact Icon">
      <Behance />
    </a>
  );
}

function SocialMedia() {
  return (
    <div 
      className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative"
      style={{ gap: '17px' }}
      data-name="Social Media"
    >
      <ContactIcon2 />
      <ContactIcon3 />
      <ContactIcon4 />
    </div>
  );
}

function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration, delay: 0.5 }}
      className="relative shrink-0 w-full" 
      style={{ borderRadius: radius.lg }}
      data-name="footer"
    >
      <div className="flex flex-row items-center size-full relative">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none"
          style={{ borderRadius: radius.lg }}
        />
        <div 
          className="content-stretch flex items-center justify-between p-5 relative w-full rounded-xl"
          style={{
            backgroundColor: colors.background.glassHover,
          }}
        >
          <ContactGroup />
          <SocialMedia />
        </div>
      </div>
    </motion.div>
  );
}

function Container() {
  return (
    <div 
      className="content-stretch flex flex-col gap-10 isolate items-center pb-5 pt-[60px] relative shrink-0 w-full max-w-[1200px] mx-auto" 
      data-name="Container"
    >
      <Company />
      
      {/* Oval Background */}
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[1841px] top-0 z-[-1] pointer-events-none" data-name="Oval">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1841 920.5">
            <g id="Oval">
              <mask fill="white" id="path-1-inside-1_172_142">
                <path d={svgPaths.p3c80f800} />
              </mask>
              <path d={svgPaths.p3c80f800} fill="url(#paint0_radial_172_142)" fillOpacity="0.2" />
              <path d={svgPaths.p3c80f800} fill="url(#paint1_linear_172_142)" />
              <path d={svgPaths.p3c80f800} mask="url(#path-1-inside-1_172_142)" stroke="url(#paint2_linear_172_142)" strokeOpacity="0.4" strokeWidth="4" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(920 -4.04691e-06) rotate(89.9844) scale(1841)" gradientUnits="userSpaceOnUse" id="paint0_radial_172_142" r="1">
                <stop stopColor="#AD46FF" />
                <stop offset="0.27391" stopColor="#AD46FF" stopOpacity="0" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_172_142" x1="920.5" x2="920.5" y1="0" y2="343.91">
                <stop stopColor="#4E218E" stopOpacity="0.3" />
                <stop offset="0.715915" stopColor="#4E218E" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_172_142" x1="920.5" x2="920.5" y1="0" y2="921.101">
                <stop stopColor="#4E218E" />
                <stop offset="0.376705" stopColor="#4E218E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <Frame />
      <Frame1 />
      <Footer />
    </div>
  );
}

export function About() {
  return (
    <section 
      id="about" 
      className="relative w-full overflow-hidden flex justify-center py-20 px-4 md:px-0"
      style={{
        backgroundColor: colors.background.secondary,
      }}
    >
      <Container />
    </section>
  );
}