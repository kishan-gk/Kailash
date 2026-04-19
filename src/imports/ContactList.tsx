import svgPaths from "./svg-b0iqda5a6d";

function ContactIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Contact Icon">
          <path clipRule="evenodd" d={svgPaths.p241c9b80} fill="var(--fill-0, #4A4A4A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function ContactList() {
  return (
    <div className="bg-[rgba(96,50,242,0.2)] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] size-full" data-name="Contact list">
      <ContactIcon />
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">kailash.kr0508@gmail.com</p>
      </div>
    </div>
  );
}