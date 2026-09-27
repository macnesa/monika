export default function AmbientSurface({
  idPrefix = "ambient-surface",
  motionHook,
}) {
  const fieldFilterId = `${idPrefix}-field`;
  const materialFilterId = `${idPrefix}-material`;

  return (
    <div
      data-motion={motionHook}
      aria-hidden="true"
      className="pointer-events-none absolute -inset-[3%] z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        focusable="false"
        className="h-full w-full"
      >
        <defs>
          {/*
           * LOW-FREQUENCY FIELD
           *
           * Large authored lighting forms provide the overall spatial
           * composition. Turbulence only softens and irregularizes the
           * geometry so the lighting does not read as a clean gradient
           * or obvious decorative shape.
           */}
          <filter
            id={fieldFilterId}
            x="-20%"
            y="-25%"
            width="140%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.0048"
              numOctaves="2"
              seed="23"
              stitchTiles="stitch"
              result="fieldNoise"
            />

            <feGaussianBlur
              in="fieldNoise"
              stdDeviation="12"
              result="softFieldNoise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="softFieldNoise"
              scale="58"
              xChannelSelector="R"
              yChannelSelector="B"
              result="warpedField"
            />

            <feGaussianBlur
              in="warpedField"
              stdDeviation="36"
            />
          </filter>

          {/*
           * MID-FREQUENCY MATERIAL FIELD
           *
           * Deliberately much lower frequency than the previous grain
           * implementation.
           *
           * This should create soft tonal variation at a medium scale,
           * not dots, speckles, dust, or visible grain.
           */}
          <filter
            id={materialFilterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009 0.013"
              numOctaves="2"
              seed="47"
              stitchTiles="stitch"
              result="materialNoise"
            />

            <feGaussianBlur
              in="materialNoise"
              stdDeviation="8"
              result="softMaterialNoise"
            />

            <feColorMatrix
              in="softMaterialNoise"
              type="saturate"
              values="0"
            />
          </filter>
        </defs>

        {/*
         * BROAD AMBIENT LIGHT
         */}
        <g filter={`url(#${fieldFilterId})`}>
          <path
            d="M-260 40C90-190 624-158 1002 92C1228 242 1197 444 897 546C492 683 27 536-260 306Z"
            fill="#FFFDF7"
            opacity="0.32"
          />

          <path
            d="M616 610C895 419 1400 440 1765 704V1165H624C454 963 448 738 616 610Z"
            fill="#756960"
            opacity="0.065"
          />

          <path
            d="M1160-174C1459-129 1714 101 1770 405C1503 479 1233 400 1067 216C958 95 991-88 1160-174Z"
            fill="#FFF9F0"
            opacity="0.18"
          />
        </g>

        {/*
         * MID-SCALE SURFACE VARIATION
         *
         * No high-frequency grain.
         * No visible speckle.
         *
         * Soft-light keeps this subordinate to the existing section
         * colour while giving the large flat areas some material depth.
         */}
        <rect
          x="-40"
          y="-40"
          width="1680"
          height="1080"
          fill="#7E736B"
          opacity="0.06"
          filter={`url(#${materialFilterId})`}
          className="mix-blend-soft-light"
        />
      </svg>
    </div>
  );
}