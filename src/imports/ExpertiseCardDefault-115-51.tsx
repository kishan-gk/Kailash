import imgImage1 from "figma:asset/ee1b9de86d45387eababb7fb2a89950275eb2a0d.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f5f5f5] text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">UI Design</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d9d9d9] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Crafting visually refined, accessible interfaces that translate ideas into intuitive digital experiences across web and mobile.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="60%">
      <Heading />
    </div>
  );
}

function Capsule() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Responsive design</p>
      </div>
    </div>
  );
}

function Capsule1() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">High-fidelity UI screens</p>
      </div>
    </div>
  );
}

function Capsule2() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Visual hierarchy & layout systems`}</p>
      </div>
    </div>
  );
}

function Capsule3() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Design consistency & polish`}</p>
      </div>
    </div>
  );
}

function Pointers() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Pointers">
      <Capsule />
      <Capsule1 />
      <Capsule2 />
      <Capsule3 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <Component1 />
        <Pointers />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[150px] mix-blend-luminosity relative shrink-0 w-[387px] z-[1]" data-name="40%">
      <div className="-translate-x-1/2 absolute bottom-0 h-[150px] left-[calc(50%-0.5px)] w-[356px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[196.08%] left-[-8.7%] max-w-none top-[-56.13%] w-[124.22%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseCardDefault() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] size-full" data-name="Expertise Card - Default">
      <Content />
      <Component />
    </div>
  );
}