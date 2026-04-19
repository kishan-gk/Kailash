import svgPaths from "./svg-88krl9x30i";
import imgLogo from "figma:asset/f98421721d12386bebd55e905a713384ae4cd11e.png";
import imgLogo1 from "figma:asset/eda9663259862b350c5005ea888921522f647de8.png";
import imgLogo2 from "figma:asset/7c5a7894ff9d522faca63924db57e5d0c66f641a.png";
import imgPartnersLogo from "figma:asset/bee1a1eea8bd05f3b5897cace6bcd9769885667f.png";
import imgPartnersLogo1 from "figma:asset/26d64d0dd4ccf35df7c13c10fa843bcae93f3aa3.png";
import imgPartnersLogo2 from "figma:asset/fe45d11511a7283865c1d4e2ff23d2788bec856d.png";
import imgPartnersLogo3 from "figma:asset/c0e632cfadb9d668e6070726fb9908e61777cb99.png";

function Group1() {
  return (
    <div className="absolute contents inset-[0_0_-208px_0]">
      <div className="absolute bg-gradient-to-r from-[rgba(8,6,12,0.6)] inset-[0_0_-208px_0] to-1/2 to-[rgba(8,6,12,0)]" data-name="Gradient" />
      <div className="absolute inset-[0_0_-208px_0]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 1440 1000\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(117 0 0 130 1080 500)\'><stop stop-color=\'rgba(96,50,242,0.18)\' offset=\'0\'/><stop stop-color=\'rgba(139,61,255,0.12)\' offset=\'0.25\'/><stop stop-color=\'rgba(139,61,255,0)\' offset=\'0.55\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute inset-[0_0_-208px_0]" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 1440 1000\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(135.85 0 0 150.94 288 800)\'><stop stop-color=\'rgba(139,61,255,0.12)\' offset=\'0\'/><stop stop-color=\'rgba(139,61,255,0)\' offset=\'0.45\'/></radialGradient></defs></svg>')" }} />
    </div>
  );
}

function Logo() {
  return (
    <div className="-translate-y-1/2 absolute h-[32px] left-[48px] top-1/2 w-[150.83px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#6032f2] h-[44px] left-[1236.84px] rounded-[33554400px] top-1/2 w-[155.16px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[23px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.5px)] w-[107.526px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Let's Connect`}</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[92px] relative shrink-0 w-[1440px]" data-name="Header">
      <Logo />
      <Button />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[15px] size-[12px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG" opacity="0.7">
          <path d={svgPaths.pecd8080} id="Vector" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 1.5V3.5" id="Vector_2" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 2.5H9" id="Vector_3" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8.5V9.5" id="Vector_4" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 9H1.5" id="Vector_5" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(96,50,242,0.08)] h-[26px] relative rounded-[10px] shrink-0 w-[269.27px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(139,61,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[35px] not-italic text-[#b9b3d6] text-[12px] top-[13px] w-[219.641px]">
        <p className="leading-[16px] whitespace-pre-wrap">UI/UX Designer • 2+ Years Experience</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute bottom-[47.5%] left-[215.67px] top-[-2.5%] w-[357.141px]" data-name="SVG">
      <div className="absolute flex inset-[2.86%_1.77%] items-center justify-center">
        <div className="flex-none h-[70.729px] rotate-[-1.19deg] skew-x-[0.71deg] w-[342.216px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.06%_-0.43%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.13 73.6423">
                <path d={svgPaths.pd126100} id="Vector" opacity="0.65" stroke="var(--stroke-0, #6032F2)" strokeLinecap="round" strokeWidth="2.9136" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute bottom-[47.5%] left-[215.67px] top-[-2.5%] w-[357.141px]" data-name="SVG">
      <div className="absolute flex inset-[4.31%_1.87%_2.85%_2.28%] items-center justify-center">
        <div className="flex-none h-[71.899px] rotate-[0.79deg] skew-x-[-0.47deg] w-[340.753px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-1.66%_-0.35%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.136 74.2832">
                <path d={svgPaths.p41c8800} id="Vector" opacity="0.6" stroke="var(--stroke-0, #8B3DFF)" strokeLinecap="round" strokeWidth="2.38381" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[150px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Satoshi:Bold',sans-serif] h-[75px] justify-center leading-[0] left-0 not-italic text-[60px] text-white top-[37.5px] tracking-[-1.2px] w-[232.05px]">
        <p className="leading-[75px] whitespace-pre-wrap">{`I Design `}</p>
      </div>
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Satoshi:Bold',sans-serif] h-[75px] justify-center leading-[0] left-[231.67px] not-italic text-[60px] text-white top-[37.5px] tracking-[-1.2px] w-[326.226px]">
        <p className="leading-[75px] whitespace-pre-wrap">Experiences</p>
      </div>
      <Svg2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Satoshi:Bold',sans-serif] h-[75px] justify-center leading-[0] left-[556.81px] not-italic text-[60px] text-white top-[37.5px] tracking-[-1.2px] w-[16.661px]">
        <p className="leading-[75px] whitespace-pre-wrap">,</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Satoshi:Bold',sans-serif] h-[75px] justify-center leading-[0] left-0 not-italic text-[60px] text-white top-[112.5px] tracking-[-1.2px] w-[521.402px]">
        <p className="leading-[75px] whitespace-pre-wrap">Not Just Interfaces.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-[576px]">
      <OverlayBorderOverlayBlur />
      <Heading />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[60.5px] justify-center leading-[32.5px] not-italic relative shrink-0 text-[#b9b3d6] text-[20px] w-full whitespace-pre-wrap">
        <p className="mb-0">UI/UX Designer with 2+ years of experience crafting high-</p>
        <p>impact web, mobile, and SaaS products.</p>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute left-[252px] size-[96px] top-[252px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogo1} />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[59.33%_43.79%_35.33%_43.79%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[50.835px]">
        <p className="leading-[20px] whitespace-pre-wrap">Kailash</p>
      </div>
    </div>
  );
}

function Html5OriginalSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="html5-original.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="html5-original.svg">
          <path d={svgPaths.p29590180} fill="var(--fill-0, #E44D26)" id="Vector" />
          <path d={svgPaths.p19355000} fill="var(--fill-0, #F16529)" id="Vector_2" />
          <path d={svgPaths.p19ee1980} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.pc592240} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Html5OriginalSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="html5-original.svg fill">
      <Html5OriginalSvg />
    </div>
  );
}

function Html() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="HTML">
      <Html5OriginalSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[408px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[268px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Html />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[56.67%_19.05%_38%_71.05%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[35.687px]">
        <p className="leading-[20px] whitespace-pre-wrap">HTML</p>
      </div>
    </div>
  );
}

function Css3OriginalSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="css3-original.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="css3-original.svg">
          <path d={svgPaths.p3f93bd80} fill="var(--fill-0, #1572B6)" id="Vector" />
          <path d={svgPaths.p3f07200} fill="var(--fill-0, #33A9DC)" id="Vector_2" />
          <path d={svgPaths.p1f35f80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p22330b00} fill="var(--fill-0, #EBEBEB)" id="Vector_4" />
          <path d={svgPaths.p2b676900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p38b90b80} fill="var(--fill-0, #EBEBEB)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Css3OriginalSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="css3-original.svg fill">
      <Css3OriginalSvg />
    </div>
  );
}

function Css() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="CSS">
      <Css3OriginalSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[198px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[389.24px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Css />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[76.87%_54.73%_17.79%_36.73%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[27.614px]">
        <p className="leading-[20px] whitespace-pre-wrap">CSS</p>
      </div>
    </div>
  );
}

function JavascriptOriginalSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="javascript-original.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_49_1927)" id="javascript-original.svg">
          <path d={svgPaths.p24fbd00} fill="var(--fill-0, #F0DB4F)" id="Vector" />
          <path d={svgPaths.p2bf22780} fill="var(--fill-0, #323330)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_49_1927">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function JavascriptOriginalSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="javascript-original.svg fill">
      <JavascriptOriginalSvg />
    </div>
  );
}

function JavaScript() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="JavaScript">
      <JavascriptOriginalSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[198px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[146.76px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <JavaScript />
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[36.46%_50.82%_58.21%_32.82%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[74.474px]">
        <p className="leading-[20px] whitespace-pre-wrap">JavaScript</p>
      </div>
    </div>
  );
}

function FigmaOriginalSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="figma-original.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_49_1933)" id="figma-original.svg">
          <path d={svgPaths.p2b256130} fill="var(--fill-0, #0ACF83)" id="Vector" />
          <path d={svgPaths.p16c69200} fill="var(--fill-0, #A259FF)" id="Vector_2" />
          <path d={svgPaths.p20a1c900} fill="var(--fill-0, #F24E1E)" id="Vector_3" />
          <path d={svgPaths.p33f21400} fill="var(--fill-0, #FF7262)" id="Vector_4" />
          <path d={svgPaths.p23338600} fill="var(--fill-0, #1ABCFE)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_49_1933">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FigmaOriginalSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="figma-original.svg fill">
      <FigmaOriginalSvg />
    </div>
  );
}

function Figma() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="Figma">
      <FigmaOriginalSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[478px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[268px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Figma />
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[56.67%_6.68%_38%_82.01%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[44.194px]">
        <p className="leading-[20px] whitespace-pre-wrap">Figma</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_16.09%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7687 38">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p5373e00} fill="var(--fill-0, #67DBFF)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p31001200} fill="var(--fill-0, #01A3FF)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p36a2c00} fill="var(--fill-0, #0162FF)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function FramerIconSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[38px] top-1/2" data-name="framer-icon.svg">
      <Group />
    </div>
  );
}

function FramerIconSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="framer-icon.svg fill">
      <FramerIconSvg />
    </div>
  );
}

function Framer() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="Framer">
      <FramerIconSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur4() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[332.89px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[467.72px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Framer />
    </div>
  );
}

function Overlay5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[89.95%_30.34%_4.71%_57.31%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[50.433px]">
        <p className="leading-[20px] whitespace-pre-wrap">Framer</p>
      </div>
    </div>
  );
}

function PhotoshopOriginalSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="photoshop-original.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_49_1915)" id="photoshop-original.svg">
          <path d={svgPaths.p175e53f0} fill="var(--fill-0, #001E36)" id="Vector" />
          <path d={svgPaths.p10bf7900} fill="var(--fill-0, #31A8FF)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_49_1915">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhotoshopOriginalSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="photoshop-original.svg fill">
      <PhotoshopOriginalSvg />
    </div>
  );
}

function Photoshop() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="Photoshop">
      <PhotoshopOriginalSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur5() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[98.11px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[391.43px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Photoshop />
    </div>
  );
}

function Overlay6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[77.24%_67.42%_17.43%_16.12%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[75.095px]">
        <p className="leading-[20px] whitespace-pre-wrap">Photoshop</p>
      </div>
    </div>
  );
}

function AdobeIllustratorCcIconSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="Adobe_Illustrator_CC_icon.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_49_1909)" id="Adobe_Illustrator_CC_icon.svg">
          <path d={svgPaths.p1eb6ff00} fill="var(--fill-0, #330000)" id="Vector" />
          <path d={svgPaths.p157f4970} fill="var(--fill-0, #FF9A00)" id="Vector_2" />
          <path d={svgPaths.p2b53ce00} fill="var(--fill-0, #FF9A00)" id="Vector_3" />
          <path d={svgPaths.p12360e80} fill="var(--fill-0, #FF9A00)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_49_1909">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AdobeIllustratorCcIconSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="Adobe_Illustrator_CC_icon.svg fill">
      <AdobeIllustratorCcIconSvg />
    </div>
  );
}

function AdobeIllustrator() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="Adobe Illustrator">
      <AdobeIllustratorCcIconSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur6() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[98.11px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[144.57px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <AdobeIllustrator />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[36.1%_64.03%_58.57%_12.73%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[115.789px]">
        <p className="leading-[20px] whitespace-pre-wrap">Adobe Illustrator</p>
      </div>
    </div>
  );
}

function CanvaIconSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[38px] top-1/2" data-name="canva-icon.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g clipPath="url(#clip0_49_1905)" id="canva-icon.svg">
          <path d={svgPaths.p2bd1cc80} fill="var(--fill-0, #24BECA)" id="Vector" />
          <path d={svgPaths.p1db27880} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_49_1905">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CanvaIconSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[38px] top-0" data-name="canva-icon.svg fill">
      <CanvaIconSvg />
    </div>
  );
}

function Canva() {
  return (
    <div className="absolute inset-[12px] opacity-90 overflow-clip" data-name="Canva">
      <CanvaIconSvgFill />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur7() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid left-[332.89px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[68.28px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <Canva />
    </div>
  );
}

function Overlay8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] inset-[23.38%_30.64%_71.29%_57.6%] opacity-0 rounded-[10px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[12px] not-italic text-[14px] text-white top-[16px] w-[46.902px]">
        <p className="leading-[20px] whitespace-pre-wrap">Canva</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[600px]" data-name="Container">
      <div className="absolute blur-[20px] inset-0" data-name="Gradient+Blur" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 600 600\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(42.426 0 0 42.426 300 300)\'><stop stop-color=\'rgba(139,61,255,0.25)\' offset=\'0\'/><stop stop-color=\'rgba(96,50,242,0.15)\' offset=\'0.3\'/><stop stop-color=\'rgba(96,50,242,0.05)\' offset=\'0.5\'/><stop stop-color=\'rgba(96,50,242,0)\' offset=\'0.7\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute border border-[rgba(255,255,255,0.12)] border-solid left-[160px] rounded-[33554400px] size-[280px] top-[160px]" data-name="Border" />
      <div className="absolute border border-[rgba(255,255,255,0.12)] border-solid left-[90px] rounded-[33554400px] size-[420px] top-[90px]" data-name="Border" />
      <Logo1 />
      <Overlay />
      <OverlayBorderShadowOverlayBlur />
      <Overlay1 />
      <OverlayBorderShadowOverlayBlur1 />
      <Overlay2 />
      <OverlayBorderShadowOverlayBlur2 />
      <Overlay3 />
      <OverlayBorderShadowOverlayBlur3 />
      <Overlay4 />
      <OverlayBorderShadowOverlayBlur4 />
      <Overlay5 />
      <OverlayBorderShadowOverlayBlur5 />
      <Overlay6 />
      <OverlayBorderShadowOverlayBlur6 />
      <Overlay7 />
      <OverlayBorderShadowOverlayBlur7 />
      <Overlay8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[114px] items-center relative shrink-0">
      <Frame />
      <Container1 />
    </div>
  );
}

function ParagraphOverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid font-['Poppins:Medium',sans-serif] h-[62px] leading-[0] left-0 not-italic overflow-clip right-[-0.31px] rounded-[33554400px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] text-[14px] text-[rgba(255,255,255,0.8)] text-center top-0" data-name="Paragraph+Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[calc(50%-166.91px)] top-[30px] w-[56.432px]">
        <p className="leading-[20px] whitespace-pre-wrap">Projects</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[calc(50%-69.52px)] top-[30px] w-[35.086px]">
        <p className="leading-[20px] whitespace-pre-wrap">Skills</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[calc(50%+38.02px)] top-[30px] w-[76.618px]">
        <p className="leading-[20px] whitespace-pre-wrap">Experience</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[20px] justify-center left-[calc(50%+161.72px)] top-[30px] w-[67.413px]">
        <p className="leading-[20px] whitespace-pre-wrap">About Me</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bottom-0 h-[62px] left-[31.58%] right-[31.53%]" data-name="Nav">
      <ParagraphOverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Container">
      <Frame1 />
      <Nav />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0b0815] content-stretch flex flex-col items-center overflow-clip pb-[100px] relative shrink-0 w-full" data-name="Hero">
      <Group1 />
      <Header />
      <Container />
    </div>
  );
}

function PartnersLogo() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <div className="h-[40px] relative shrink-0 w-[169.655px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo2} />
      </div>
    </div>
  );
}

function PartnersLogo1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo} />
    </div>
  );
}

function PartnersLogo2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo1} />
    </div>
  );
}

function PartnersLogo3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo2} />
    </div>
  );
}

function PartnersLogo4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo3} />
    </div>
  );
}

function PartnersLogo5() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <div className="h-[40px] relative shrink-0 w-[169.655px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo2} />
      </div>
    </div>
  );
}

function PartnersLogo6() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo} />
    </div>
  );
}

function PartnersLogo7() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo1} />
    </div>
  );
}

function PartnersLogo8() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo2} />
    </div>
  );
}

function PartnersLogo9() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPartnersLogo3} />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-full" data-name="Row 2">
      <PartnersLogo />
      <PartnersLogo1 />
      <PartnersLogo2 />
      <PartnersLogo3 />
      <PartnersLogo4 />
      <PartnersLogo5 />
      <PartnersLogo6 />
      <PartnersLogo7 />
      <PartnersLogo8 />
      <PartnersLogo9 />
    </div>
  );
}

function Clients() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[rgba(10,10,10,0)] items-start left-0 px-[80px] py-[40px] to-1/2 to-[#0a0a0a] top-[711.61px] w-[1440px]" data-name="Clients">
      <Row />
    </div>
  );
}

function Placeholder() {
  return <div className="h-[10px] shrink-0 w-full" data-name="Placeholder" />;
}

function SelectedWorks() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[80px] py-[60px] relative shrink-0 w-[1440px]" data-name="Selected Works">
      <Placeholder />
    </div>
  );
}

export default function Design() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Design">
      <Hero />
      <Clients />
      <SelectedWorks />
    </div>
  );
}