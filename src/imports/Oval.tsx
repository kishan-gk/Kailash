import svgPaths from "./svg-120bd88f51";

export default function Oval() {
  return (
    <div className="relative size-full" data-name="Oval">
      <div className="absolute bottom-1/2 left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1841 920.5">
          <g id="Oval">
            <mask fill="white" id="path-1-inside-1_172_115">
              <path d={svgPaths.p3c80f800} />
            </mask>
            <path d={svgPaths.p3c80f800} fill="url(#paint0_radial_172_115)" fillOpacity="0.2" />
            <path d={svgPaths.p3c80f800} fill="url(#paint1_linear_172_115)" />
            <path d={svgPaths.p3c80f800} mask="url(#path-1-inside-1_172_115)" stroke="url(#paint2_linear_172_115)" strokeOpacity="0.4" strokeWidth="4" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(920 -4.04691e-06) rotate(89.9844) scale(1841)" gradientUnits="userSpaceOnUse" id="paint0_radial_172_115" r="1">
              <stop stopColor="#AD46FF" />
              <stop offset="0.27391" stopColor="#AD46FF" stopOpacity="0" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_172_115" x1="920.5" x2="920.5" y1="0" y2="343.91">
              <stop stopColor="#4E218E" stopOpacity="0.3" />
              <stop offset="0.715915" stopColor="#4E218E" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_172_115" x1="920.5" x2="920.5" y1="0" y2="921.101">
              <stop stopColor="#4E218E" />
              <stop offset="0.376705" stopColor="#4E218E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}