import svgPaths from "./svg-2hm9o4a2ju";
import imgFavicon1 from "figma:asset/48052fd94bc1efc5e2898e43fd0d9ccf3acd96d3.png";

function Company() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#171717] left-1/2 rounded-[60px] size-[60px] top-[-29px] z-[4]" data-name="Company">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <div className="aspect-[160/160] h-full relative shrink-0" data-name="Favicon 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFavicon1} />
        </div>
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
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-[0px] text-center text-white w-[125px]" data-name="EXP">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-[0px] text-center text-white w-[125px]" data-name="Projects">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center text-white w-[125px]" data-name="Edu">
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
    <div className="bg-[rgba(96,50,242,0.1)] content-stretch flex gap-[40px] items-center px-[40px] py-[20px] relative rounded-[20px] shrink-0 z-[1]">
      <div aria-hidden="true" className="absolute border-2 border-[#4d28c2] border-solid inset-0 pointer-events-none rounded-[20px]" />
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
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="bg-[#171717] content-stretch flex flex-col items-start p-[60px] relative size-full" data-name="About Me">
      <Container />
    </div>
  );
}