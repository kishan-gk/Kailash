import img816C5939D0294C44B9F85A421C2862791 from "figma:asset/21201d9554161e645331fe52768a58bb2f8ac004.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#f5f5f5] text-[28px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">UI Design</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#d9d9d9] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Crafting visually refined, accessible interfaces that translate ideas into intuitive digital experiences across web and mobile.</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="60%">
      <div className="content-stretch flex flex-col gap-[28px] items-start pt-[28px] px-[28px] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Capsule() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">High-fidelity UI screens</p>
      </div>
    </div>
  );
}

function Capsule1() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">{`Visual hierarchy & layout systems`}</p>
      </div>
    </div>
  );
}

function Capsule2() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Responsive design</p>
      </div>
    </div>
  );
}

function Capsule3() {
  return (
    <div className="bg-[rgba(120,71,189,0.1)] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Capsule">
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">{`Design consistency & polish`}</p>
      </div>
    </div>
  );
}

function Pointers() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Pointers">
      <Capsule />
      <Capsule1 />
      <Capsule2 />
      <Capsule3 />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">{`& more..`}</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="flex-[1_0_0] h-[302px] min-h-px min-w-px relative" data-name="40%">
      <div className="absolute bottom-[-53px] right-[-9px] size-[378px]" data-name="816c5939-d029-4c44-b9f8-5a421c286279 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img816C5939D0294C44B9F85A421C2862791} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Image">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[28px] relative w-full">
          <Pointers />
          <Component />
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseCardHovered() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] size-full" data-name="Expertise Card - Hovered">
      <Component1 />
      <Image />
    </div>
  );
}