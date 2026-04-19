import svgPaths from "./svg-30n01e9xaz";

function Favicon() {
  return (
    <div className="aspect-[48/48] h-full relative shrink-0" data-name="Favicon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] relative size-full">
          <div className="aspect-[12/12] h-full relative shrink-0" data-name="Subtract">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p15504880} fill="var(--fill-0, white)" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Company() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#171717] left-1/2 rounded-[60px] size-[60px] top-[-29px] z-[4]" data-name="Company">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Favicon />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#331b54] border-solid inset-[-1px] pointer-events-none rounded-[61px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-center w-[650px] z-[2]">
      <div className="bg-clip-text bg-gradient-to-t flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold from-[#4d28c2] from-[0.21%] justify-center relative shrink-0 text-[12px] to-[#6032f2] to-[99.79%] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100", WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.1] whitespace-pre-wrap">About Me</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-white w-full">
        <p className="leading-[1.35] whitespace-pre-wrap">Turning ideas into meaningful digital experiences.</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center opacity-70 relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">I’m a UI/UX Designer focused on creating intuitive, scalable digital experiences. I enjoy turning complex ideas into clear user journeys and polished interfaces across web and mobile products.</p>
      </div>
    </div>
  );
}

function Exp() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-[0px] w-[125px]" data-name="EXP">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.35] text-[36px]">2</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] text-[23.22px]">+</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] text-[12px]">{` `}</span>
          <span className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] text-[12px]">Years</span>
        </p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[1.5] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Experience
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-[0px] w-[125px]" data-name="Projects">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.35] text-[36px]">30</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] text-[23.22px]">{`+ `}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[1.5] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Projects
        </p>
      </div>
    </div>
  );
}

function Edu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[125px]" data-name="Edu">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] w-full">
        <p className="leading-[1.35] whitespace-pre-wrap">BCA</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Education</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(96,50,242,0.1)] content-stretch flex gap-[40px] items-center leading-[0] px-[40px] py-[20px] relative rounded-[20px] shrink-0 text-center text-white z-[1]">
      <Exp />
      <Projects />
      <Edu />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] isolate items-center pb-[20px] pt-[60px] relative shrink-0 w-full" data-name="Container">
      <Company />
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[1841px] top-0 z-[3]" data-name="Oval">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1841 920.5">
            <g id="Oval">
              <mask fill="white" id="path-1-inside-1_172_63">
                <path d={svgPaths.p3c80f800} />
              </mask>
              <path d={svgPaths.p3c80f800} fill="url(#paint0_linear_172_63)" mask="url(#path-1-inside-1_172_63)" stroke="url(#paint1_linear_172_63)" strokeOpacity="0.4" strokeWidth="4" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_172_63" x1="920.5" x2="920.5" y1="0" y2="343.91">
                <stop stopColor="#4E218E" stopOpacity="0.3" />
                <stop offset="0.5" stopColor="#4E218E" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_172_63" x1="920.5" x2="920.5" y1="0" y2="921.101">
                <stop stopColor="#4E218E" />
                <stop offset="0.376705" stopColor="#4E218E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}

function ContactList({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center relative shrink-0"} data-name="Contact list">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Contact Icon">
        <div className="absolute inset-[15.63%_7.29%_15.62%_7.29%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5 16.5">
            <path clipRule="evenodd" d={svgPaths.p9ecf980} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">kailash.kr0508@gmail.com</p>
      </div>
    </div>
  );
}

function ContactIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Contact Icon">
          <path d={svgPaths.p3fb290c0} fill="var(--fill-0, #D9D9D9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactList1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Contact list">
      <ContactIcon />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">+91 62994 17052</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
        <g id="Group 1000000798">
          <path d={svgPaths.p263e2e00} fill="var(--fill-0, #D9D9D9)" id="Vector" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
          <path d={svgPaths.p120f6100} fill="var(--fill-0, #D9D9D9)" id="Vector_2" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
          <path d={svgPaths.p1397a040} fill="var(--fill-0, #D9D9D9)" id="Vector_3" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
          <g id="Group 1000000797">
            <path d={svgPaths.pdcaf000} fill="var(--fill-0, #D9D9D9)" id="Vector_4" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
            <path d={svgPaths.p3d79000} fill="var(--fill-0, #D9D9D9)" id="Vector_5" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
            <path d={svgPaths.pba53700} fill="var(--fill-0, #D9D9D9)" id="Vector_6" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GeneralIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="General Icon">
      <Group />
    </div>
  );
}

function ContactList2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Contact list">
      <GeneralIcon />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">Resume</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-center min-h-px min-w-px relative" data-name="Contact">
      <ContactList />
      <ContactList1 />
      <ContactList2 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_405)" id="linkedin">
          <path d={svgPaths.pd10d3f0} fill="var(--fill-0, #007AB9)" id="Vector" />
          <path d={svgPaths.p11712600} fill="var(--fill-0, #F1F2F2)" id="Vector_2" />
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

function ContactIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Contact Icon">
      <Linkedin />
    </div>
  );
}

function Dribbble() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="dribbble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_424)" id="dribbble">
          <path d={svgPaths.p1bfe4930} fill="var(--fill-0, #E74D89)" id="Vector" />
          <path d={svgPaths.p2c54a880} fill="var(--fill-0, #B2215A)" id="Vector_2" />
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

function ContactIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Contact Icon">
      <Dribbble />
    </div>
  );
}

function Behance() {
  return (
    <div className="absolute inset-[8.33%_8.28%_8.34%_8.39%]" data-name="behance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
        <g clipPath="url(#clip0_190_412)" id="behance">
          <path d={svgPaths.p5244300} fill="var(--fill-0, #0057FF)" id="Vector" />
          <path d={svgPaths.p33c49b00} fill="var(--fill-0, white)" id="Vector_2" />
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

function ContactIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Contact Icon">
      <Behance />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[17px] items-center justify-end min-h-px min-w-px relative" data-name="Social Media">
      <ContactIcon1 />
      <ContactIcon2 />
      <ContactIcon3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[rgba(96,50,242,0.1)] relative rounded-[20px] shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Contact />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[60px] items-start p-[60px] relative size-full" data-name="About Me">
      <Container />
      <Footer />
    </div>
  );
}