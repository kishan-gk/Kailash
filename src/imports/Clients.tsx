import imgLogo from "figma:asset/7c5a7894ff9d522faca63924db57e5d0c66f641a.png";
import imgPartnersLogo from "figma:asset/bee1a1eea8bd05f3b5897cace6bcd9769885667f.png";
import imgPartnersLogo1 from "figma:asset/26d64d0dd4ccf35df7c13c10fa843bcae93f3aa3.png";
import imgPartnersLogo2 from "figma:asset/fe45d11511a7283865c1d4e2ff23d2788bec856d.png";
import imgPartnersLogo3 from "figma:asset/c0e632cfadb9d668e6070726fb9908e61777cb99.png";

function PartnersLogo() {
  return (
    <div className="content-stretch flex flex-col items-start p-[20px] relative rounded-[8px] shrink-0" data-name="Partners Logo">
      <div className="h-[40px] relative shrink-0 w-[169.655px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
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

export default function Clients() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[80px] py-[40px] relative size-full" data-name="Clients">
      <div className="-translate-y-1/2 absolute h-[200px] left-[-7.22%] right-[-7.43%] top-[calc(50%+10.39px)]" data-name="Overlay">
        <div className="absolute inset-[-15%_-1.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1711 260">
            <g filter="url(#filter0_f_49_1887)" id="Overlay">
              <ellipse cx="855.5" cy="130" fill="var(--fill-0, #0A0A0A)" rx="825.5" ry="100" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="260" id="filter0_f_49_1887" width="1711" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_49_1887" stdDeviation="15" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Row />
    </div>
  );
}