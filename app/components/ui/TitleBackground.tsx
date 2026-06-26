export default function TitleBackground() {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
        </filter>
        <filter id="softer" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="28" />
        </filter>
      </defs>

      {/* Light mode shapes */}
      <g className="dark:hidden">
        <ellipse
          cx="980"
          cy="120"
          rx="260"
          ry="200"
          fill="#E8B98A"
          opacity="0.35"
          filter="url(#softer)"
        />
        <ellipse
          cx="1080"
          cy="280"
          rx="220"
          ry="240"
          fill="#D4794F"
          opacity="0.28"
          filter="url(#softer)"
        />
        <ellipse
          cx="850"
          cy="380"
          rx="200"
          ry="160"
          fill="#9CAF7C"
          opacity="0.30"
          filter="url(#softer)"
        />
        <ellipse
          cx="1150"
          cy="420"
          rx="180"
          ry="150"
          fill="#E2C281"
          opacity="0.30"
          filter="url(#soft)"
        />
        <ellipse
          cx="700"
          cy="60"
          rx="150"
          ry="110"
          fill="#C97B4A"
          opacity="0.18"
          filter="url(#soft)"
        />
        <ellipse
          cx="60"
          cy="430"
          rx="180"
          ry="120"
          fill="#9CAF7C"
          opacity="0.16"
          filter="url(#softer)"
        />
        <ellipse
          cx="120"
          cy="60"
          rx="140"
          ry="100"
          fill="#E8B98A"
          opacity="0.14"
          filter="url(#soft)"
        />

        <g
          opacity="0.35"
          stroke="#B6815A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M 920 60 C 905 30, 935 20, 920 0" filter="url(#soft)" />
          <path d="M 950 65 C 935 35, 965 25, 950 5" filter="url(#soft)" />
          <path d="M 980 60 C 965 30, 995 20, 980 0" filter="url(#soft)" />
        </g>
        <g
          opacity="0.22"
          stroke="#8A6A48"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path
            d="M 1040 140 C 1025 110, 1055 100, 1040 80"
            filter="url(#soft)"
          />
          <path
            d="M 1065 145 C 1050 115, 1080 105, 1065 85"
            filter="url(#soft)"
          />
        </g>

        <circle cx="1000" cy="200" r="3" fill="#B6815A" opacity="0.3" />
        <circle cx="1040" cy="230" r="2.5" fill="#9CAF7C" opacity="0.3" />
        <circle cx="970" cy="260" r="2" fill="#D4794F" opacity="0.3" />
        <circle cx="1090" cy="190" r="2.5" fill="#E2C281" opacity="0.3" />
      </g>

      {/* Dark mode shapes — lighter, more saturated tints, higher opacity so they register against a dark page instead of muddying */}
      <g className="hidden dark:block">
        <ellipse
          cx="980"
          cy="120"
          rx="260"
          ry="200"
          fill="#F2C896"
          opacity="0.20"
          filter="url(#softer)"
        />
        <ellipse
          cx="1080"
          cy="280"
          rx="220"
          ry="240"
          fill="#E68A56"
          opacity="0.18"
          filter="url(#softer)"
        />
        <ellipse
          cx="850"
          cy="380"
          rx="200"
          ry="160"
          fill="#A8C98A"
          opacity="0.16"
          filter="url(#softer)"
        />
        <ellipse
          cx="1150"
          cy="420"
          rx="180"
          ry="150"
          fill="#EAD18F"
          opacity="0.18"
          filter="url(#soft)"
        />
        <ellipse
          cx="700"
          cy="60"
          rx="150"
          ry="110"
          fill="#D88E5E"
          opacity="0.12"
          filter="url(#soft)"
        />
        <ellipse
          cx="60"
          cy="430"
          rx="180"
          ry="120"
          fill="#A8C98A"
          opacity="0.10"
          filter="url(#softer)"
        />
        <ellipse
          cx="120"
          cy="60"
          rx="140"
          ry="100"
          fill="#F2C896"
          opacity="0.09"
          filter="url(#soft)"
        />

        <g
          opacity="0.22"
          stroke="#E0A872"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M 920 60 C 905 30, 935 20, 920 0" filter="url(#soft)" />
          <path d="M 950 65 C 935 35, 965 25, 950 5" filter="url(#soft)" />
          <path d="M 980 60 C 965 30, 995 20, 980 0" filter="url(#soft)" />
        </g>
        <g
          opacity="0.15"
          stroke="#C99868"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path
            d="M 1040 140 C 1025 110, 1055 100, 1040 80"
            filter="url(#soft)"
          />
          <path
            d="M 1065 145 C 1050 115, 1080 105, 1065 85"
            filter="url(#soft)"
          />
        </g>

        <circle cx="1000" cy="200" r="3" fill="#E0A872" opacity="0.25" />
        <circle cx="1040" cy="230" r="2.5" fill="#A8C98A" opacity="0.25" />
        <circle cx="970" cy="260" r="2" fill="#E68A56" opacity="0.25" />
        <circle cx="1090" cy="190" r="2.5" fill="#EAD18F" opacity="0.25" />
      </g>
    </svg>
  );
}
