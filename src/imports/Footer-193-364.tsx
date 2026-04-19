import svgPaths from "./svg-yl99m8knoy";

function ContactIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Contact Icon">
          <path clipRule="evenodd" d={svgPaths.p241c9b80} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactList() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Contact list">
      <ContactIcon />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <path d={svgPaths.p3fb290c0} fill="var(--fill-0, #D9D9D9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactList1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Contact list">
      <ContactIcon1 />
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
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Contact list">
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

function ContactIcon2() {
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

function ContactIcon3() {
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

function ContactIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Contact Icon">
      <Behance />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[17px] items-center justify-end min-h-px min-w-px relative" data-name="Social Media">
      <ContactIcon2 />
      <ContactIcon3 />
      <ContactIcon4 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-between p-[20px] relative rounded-[20px] size-full" data-name="footer">
      <Contact />
      <SocialMedia />
    </div>
  );
}