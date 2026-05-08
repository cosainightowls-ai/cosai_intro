export default function Logo () {
  return (
    <svg viewBox="0 0 48 48" className="logo-mark" aria-hidden="true">
      <defs>
        <linearGradient id="logoBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8ab4ff"/>
          <stop offset="0.5" stopColor="#c79bff"/>
          <stop offset="1" stopColor="#38c4d8"/>
        </linearGradient>
        <linearGradient id="logoStroke" x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95"/>
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.75"/>
        </linearGradient>
        <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4"/>
        </filter>
      </defs>

      {/* rounded-square badge */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#logoBg)"/>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>

      {/* noise dots being filtered into the c */}
      <circle cx="9" cy="14" r="1.6" fill="#ffffff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="11" cy="34" r="1.4" fill="#ffffff" opacity="0.55">
        <animate attributeName="opacity" values="0.2;0.85;0.2" dur="2.2s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="7" cy="24" r="1.2" fill="#ffffff" opacity="0.45">
        <animate attributeName="opacity" values="0.15;0.8;0.15" dur="3s" begin="0.8s" repeatCount="indefinite"/>
      </circle>

      {/* the "c" — open on the right, signaling output */}
      <path
        d="M 36 16 A 12 12 0 1 0 36 32"
        fill="none"
        stroke="url(#logoStroke)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />

      {/* signal pulse leaving the c */}
      <circle cx="38" cy="24" r="2.2" fill="#ffffff">
        <animate attributeName="cx" values="36;42;36" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.2;1" dur="2.4s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}
