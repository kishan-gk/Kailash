import svgPaths from "./svg-2khg1ywqy7";
import imgBrainydxWhiteLogoPng from "figma:asset/4057161be6c0a52401f24fbc97dfd2b3481bcfc6.png";
import img1688373336Logo11 from "figma:asset/d75de1780db5e36ed318b272c147fa565e2b801a.png";

function Company() {
  return (
    <div className="content-stretch flex h-[36px] items-start overflow-clip relative shrink-0 w-full" data-name="company">
      <div className="aspect-[175.20001220703125/71.88504791259766] h-full relative shrink-0" data-name="BRAINYDX WHITE LOGO PNG">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBrainydxWhiteLogoPng} />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="title">
      <Company />
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">May 2025 – Present</p>
      </div>
    </div>
  );
}

function Dot() {
  return <div className="bg-white rounded-[999px] shrink-0 size-[8px]" data-name="Dot" />;
}

function Frame() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-0 rounded-tl-[999px] rounded-tr-[999px] w-[2px]" />;
}

function GeneralIcon() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-80 pt-[20px] px-[8px] relative self-stretch shrink-0" data-name="General Icon">
      <Dot />
      <Frame />
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-white inset-[33.33%] rounded-[999px]" data-name="Dot" />;
}

function GeneralIcon1() {
  return (
    <div className="opacity-80 relative shrink-0 size-[12px]" data-name="General Icon">
      <Dot1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Senior UI/UX Designer</p>
      </div>
      <GeneralIcon1 />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">May 2025 – Present</p>
      </div>
    </div>
  );
}

function GeneralIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="General Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d="M16 10L12 14L8 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Text />
          <GeneralIcon2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] relative" data-name="Container">
      <Title1 />
    </div>
  );
}

function ServiceBlock() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="service block">
      <GeneralIcon />
      <Container1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero">
      <ServiceBlock />
    </div>
  );
}

function Company3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] min-w-[450px] relative rounded-[20px] shrink-0 w-full z-[3]" data-name="Company 3">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] p-[20px] relative w-full">
        <Title />
        <Hero />
      </div>
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex h-[36px] items-start overflow-clip relative shrink-0 w-full" data-name="company">
      <div className="aspect-[325.56817626953125/75] h-full relative shrink-0" data-name="1688373336_logo1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1688373336Logo11} />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="title">
      <Company1 />
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">Jan 2025 – Apr 2025</p>
      </div>
    </div>
  );
}

function Dot2() {
  return <div className="bg-white rounded-[999px] shrink-0 size-[8px]" data-name="Dot" />;
}

function Frame1() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-0 rounded-tl-[999px] rounded-tr-[999px] w-[2px]" />;
}

function GeneralIcon3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-80 pt-[20px] px-[8px] relative self-stretch shrink-0" data-name="General Icon">
      <Dot2 />
      <Frame1 />
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-white inset-[33.33%] rounded-[999px]" data-name="Dot" />;
}

function GeneralIcon4() {
  return (
    <div className="opacity-80 relative shrink-0 size-[12px]" data-name="General Icon">
      <Dot3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Senior UI Designer</p>
      </div>
      <GeneralIcon4 />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">Jan 2025 – Apr 2025</p>
      </div>
    </div>
  );
}

function GeneralIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="General Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d="M16 10L12 14L8 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Text1 />
          <GeneralIcon5 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] relative" data-name="Container">
      <Title3 />
    </div>
  );
}

function ServiceBlock1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="service block">
      <GeneralIcon3 />
      <Container2 />
    </div>
  );
}

function Hero1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero">
      <ServiceBlock1 />
    </div>
  );
}

function Company2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] min-w-[450px] relative rounded-[20px] shrink-0 w-full z-[2]" data-name="Company 2">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] p-[20px] relative w-full">
        <Title2 />
        <Hero1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[36px] ml-0 mt-0 relative row-1 w-[179.648px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.649 36">
        <g id="Group">
          <path d={svgPaths.p3ffb1300} fill="var(--fill-0, #E73147)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p27399900} fill="var(--fill-0, #5271FF)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Rablo5Layerstyle() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="rablo 5_layerstyle">
      <Group />
    </div>
  );
}

function Company5() {
  return (
    <div className="content-stretch flex h-[36px] items-start overflow-clip relative shrink-0 w-full" data-name="company">
      <Rablo5Layerstyle />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="title">
      <Company5 />
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre-wrap">Aug 2024 – Jan 2025</p>
      </div>
    </div>
  );
}

function Dot4() {
  return <div className="bg-white rounded-[999px] shrink-0 size-[8px]" data-name="Dot" />;
}

function Frame2() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px rounded-tl-[999px] rounded-tr-[999px] w-[2px]" />;
}

function GeneralIcon6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-80 pt-[20px] px-[8px] relative self-stretch shrink-0" data-name="General Icon">
      <Dot4 />
      <Frame2 />
    </div>
  );
}

function Dot5() {
  return <div className="absolute bg-white inset-[33.33%] rounded-[999px]" data-name="Dot" />;
}

function GeneralIcon7() {
  return (
    <div className="opacity-80 relative shrink-0 size-[12px]" data-name="General Icon">
      <Dot5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">UI/UX Trainee, Bootcamp</p>
      </div>
      <GeneralIcon7 />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">First 15 Days</p>
      </div>
    </div>
  );
}

function GeneralIcon8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="General Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d="M16 10L12 14L8 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Text2 />
          <GeneralIcon8 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] relative" data-name="Container">
      <Title5 />
    </div>
  );
}

function ServiceBlock2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="service block">
      <GeneralIcon6 />
      <Container3 />
    </div>
  );
}

function Frame3() {
  return <div className="bg-white h-[12px] rounded-bl-[999px] rounded-br-[999px] shrink-0 w-[2px]" />;
}

function Dot6() {
  return <div className="bg-white rounded-[999px] shrink-0 size-[8px]" data-name="Dot" />;
}

function Frame4() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px rounded-tl-[999px] rounded-tr-[999px] w-[2px]" />;
}

function GeneralIcon9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-80 px-[8px] relative self-stretch shrink-0" data-name="General Icon">
      <Frame3 />
      <Dot6 />
      <Frame4 />
    </div>
  );
}

function Dot7() {
  return <div className="absolute bg-white inset-[33.33%] rounded-[999px]" data-name="Dot" />;
}

function GeneralIcon10() {
  return (
    <div className="opacity-80 relative shrink-0 size-[12px]" data-name="General Icon">
      <Dot7 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">UI/UX Designer</p>
      </div>
      <GeneralIcon10 />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">Aug 2024 – Oct 2024</p>
      </div>
    </div>
  );
}

function GeneralIcon11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="General Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d="M16 10L12 14L8 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Text3 />
          <GeneralIcon11 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] relative" data-name="Container">
      <Title6 />
    </div>
  );
}

function ServiceBlock3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="service block">
      <GeneralIcon9 />
      <Container4 />
    </div>
  );
}

function Frame5() {
  return <div className="bg-white h-[12px] rounded-bl-[999px] rounded-br-[999px] shrink-0 w-[2px]" />;
}

function Dot8() {
  return <div className="bg-white rounded-[999px] shrink-0 size-[8px]" data-name="Dot" />;
}

function Frame6() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px opacity-0 rounded-[999px] w-[2px]" />;
}

function GeneralIcon12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-80 px-[8px] relative self-stretch shrink-0" data-name="General Icon">
      <Frame5 />
      <Dot8 />
      <Frame6 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">UI/UX Designer</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center opacity-80 relative shrink-0 text-[#f5f5f5] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.1]">Nov 2024 – Jan 2025</p>
      </div>
    </div>
  );
}

function GeneralIcon13() {
  return (
    <div className="overflow-clip relative size-[24px]" data-name="General Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d="M16 10L12 14L8 10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <Text4 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <GeneralIcon13 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pointers() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pointers">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[8px] items-center justify-center leading-[0] px-[12px] py-[8px] relative text-[#f5f5f5] text-[12px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul>
              <li className="list-disc ms-[18px] whitespace-pre-wrap">
                <span className="leading-[1.4]">Led an internal project end-to-end</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul>
              <li className="list-disc ms-[18px] whitespace-pre-wrap">
                <span className="leading-[1.4]">Created and maintained the design system</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul>
              <li className="list-disc ms-[18px] whitespace-pre-wrap">
                <span className="leading-[1.4]">Trained junior designers and guided implementation</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <ul>
              <li className="list-disc ms-[18px] whitespace-pre-wrap">
                <span className="leading-[1.4]">Took ownership of UI direction and team coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[12px] relative" data-name="Container">
      <Title7 />
      <Pointers />
    </div>
  );
}

function ServiceBlock4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="service block">
      <GeneralIcon12 />
      <Container5 />
    </div>
  );
}

function Hero2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Hero">
      <ServiceBlock2 />
      <ServiceBlock3 />
      <ServiceBlock4 />
    </div>
  );
}

function Company4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] min-w-[450px] relative rounded-[20px] shrink-0 w-full z-[1]" data-name="Company">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] p-[20px] relative w-full">
        <Title4 />
        <Hero2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[20px] isolate items-end py-[40px] relative shrink-0 w-full" data-name="Container">
      <Company3 />
      <Company2 />
      <Company4 />
    </div>
  );
}

export default function Experince() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start p-[60px] relative size-full" data-name="Experince">
      <Container />
    </div>
  );
}