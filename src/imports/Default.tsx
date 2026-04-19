import svgPaths from "./svg-usux4sfc8n";
import imgLandingPage1 from "figma:asset/120feaa7b6954936db1bd273446a41367d7203fe.png";
import imgZinigoLogoPage00011 from "figma:asset/88a35041ba669415ce3dd52657d4586541192309.png";

function Image1() {
  return (
    <div className="aspect-video overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Image" style={{ backgroundImage: "linear-gradient(90deg, rgb(239, 235, 254) 0%, rgb(239, 235, 254) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute aspect-[1150/4096] left-[5.56%] right-[5.56%] rounded-[4px] top-[11px]" data-name="Landing Page 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgLandingPage1} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 w-full" data-name="Image">
      <div className="content-stretch flex flex-col items-start pt-[20px] px-[20px] relative w-full">
        <Image1 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col h-[42px] items-start overflow-clip relative shrink-0 w-full" data-name="Logo">
      <div className="aspect-[173.6143341064453/55] flex-[1_0_0] min-h-px min-w-px relative" data-name="Zinigo_LOGO_page-0001 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZinigoLogoPage00011} />
      </div>
    </button>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start mix-blend-luminosity relative shrink-0 w-full" data-name="Title">
      <Logo />
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        A comprehensive financial management platform for small businesses
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow Icon">
          <path d={svgPaths.p24d13440} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        View full case study
      </p>
      <ArrowIcon />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <Title />
        <div className="h-0 relative shrink-0 w-full" data-name="devider">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 0.5">
              <line id="devider" opacity="0.4" stroke="var(--stroke-0, white)" strokeWidth="0.5" x2="360" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
        <Cta />
      </div>
    </div>
  );
}

export default function Default() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative rounded-[20px] size-full" data-name="Default">
      <Image />
      <Content />
    </div>
  );
}