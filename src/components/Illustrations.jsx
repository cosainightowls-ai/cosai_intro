// Small inline SVG illustrations used as feature/post imagery.

export function FilterIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig1" x1="0" x2="1"><stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#c79bff"/></linearGradient>
      </defs>
      <circle cx="14" cy="18" r="3" fill="#ff6b9d"/>
      <circle cx="22" cy="10" r="2" fill="#ffd166"/>
      <circle cx="10" cy="32" r="2.5" fill="#06d6a0"/>
      <circle cx="20" cy="26" r="2" fill="#8ab4ff"/>
      <circle cx="14" cy="46" r="3" fill="#c79bff"/>
      <path d="M 30 14 L 50 14 L 42 32 L 42 50 L 38 50 L 38 32 Z" fill="none" stroke="url(#ig1)" strokeWidth="2.2"/>
      <circle cx="58" cy="32" r="2" fill="#8ab4ff"/>
    </svg>
  )
}

export function BrainIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig2" x1="0" x2="1"><stop offset="0" stopColor="#c79bff"/><stop offset="1" stopColor="#8ab4ff"/></linearGradient>
      </defs>
      <path d="M 22 14 C 12 14 10 28 16 32 C 10 36 14 50 24 48 C 26 54 38 54 40 48 C 50 50 54 36 48 32 C 54 28 52 14 42 14 C 38 8 26 8 22 14 Z"
        fill="none" stroke="url(#ig2)" strokeWidth="2.2"/>
      <circle cx="26" cy="28" r="2" fill="#8ab4ff"/>
      <circle cx="38" cy="26" r="2" fill="#c79bff"/>
      <circle cx="32" cy="38" r="2" fill="#06d6a0"/>
      <line x1="26" y1="28" x2="32" y2="38" stroke="#8ab4ff" strokeWidth="1" opacity="0.6"/>
      <line x1="38" y1="26" x2="32" y2="38" stroke="#c79bff" strokeWidth="1" opacity="0.6"/>
    </svg>
  )
}

export function WeatherIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig3" x1="0" x2="1"><stop offset="0" stopColor="#ffd166"/><stop offset="1" stopColor="#ff8e72"/></linearGradient>
      </defs>
      <circle cx="22" cy="22" r="8" fill="url(#ig3)"/>
      <path d="M 26 38 C 18 38 16 46 22 48 L 46 48 C 54 48 54 38 46 38 C 46 32 36 32 36 38 C 32 32 24 34 26 38 Z"
        fill="none" stroke="#8ab4ff" strokeWidth="2.2"/>
      <line x1="34" y1="54" x2="32" y2="58" stroke="#8ab4ff" strokeWidth="2"/>
      <line x1="42" y1="54" x2="40" y2="58" stroke="#8ab4ff" strokeWidth="2"/>
    </svg>
  )
}

export function MoonIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig4" x1="0" x2="1"><stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#c79bff"/></linearGradient>
      </defs>
      <path d="M 42 14 C 30 14 22 22 22 34 C 22 46 30 54 42 54 C 32 50 26 42 26 34 C 26 26 32 18 42 14 Z" fill="url(#ig4)" opacity="0.9"/>
      <circle cx="14" cy="18" r="1.5" fill="#fff"/>
      <circle cx="50" cy="22" r="1" fill="#fff"/>
      <circle cx="18" cy="44" r="1" fill="#fff"/>
    </svg>
  )
}

export function BriefIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig5" x1="0" x2="1"><stop offset="0" stopColor="#06d6a0"/><stop offset="1" stopColor="#8ab4ff"/></linearGradient>
      </defs>
      <rect x="14" y="12" width="36" height="44" rx="4" fill="none" stroke="url(#ig5)" strokeWidth="2.2"/>
      <line x1="20" y1="22" x2="44" y2="22" stroke="#8ab4ff" strokeWidth="2.2"/>
      <line x1="20" y1="30" x2="40" y2="30" stroke="#c79bff" strokeWidth="2.2"/>
      <line x1="20" y1="38" x2="44" y2="38" stroke="#8ab4ff" strokeWidth="2.2" opacity="0.7"/>
      <line x1="20" y1="46" x2="36" y2="46" stroke="#c79bff" strokeWidth="2.2" opacity="0.7"/>
      <circle cx="48" cy="14" r="5" fill="#06d6a0"/>
    </svg>
  )
}

export function ShieldIcon () {
  return (
    <svg viewBox="0 0 64 64" className="ill" aria-hidden="true">
      <defs>
        <linearGradient id="ig6" x1="0" x2="1"><stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#06d6a0"/></linearGradient>
      </defs>
      <path d="M 32 10 L 50 18 L 50 32 C 50 44 42 52 32 56 C 22 52 14 44 14 32 L 14 18 Z"
        fill="none" stroke="url(#ig6)" strokeWidth="2.2"/>
      <path d="M 24 32 L 30 38 L 42 26" fill="none" stroke="url(#ig6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function PostArt ({ variant }) {
  const variants = {
    a: '#8ab4ff', b: '#c79bff', c: '#06d6a0', d: '#ffd166', e: '#ff6b9d', f: '#38c4d8'
  }
  const c = variants[variant] || '#8ab4ff'
  return (
    <svg viewBox="0 0 320 120" className="post-art" aria-hidden="true">
      <defs>
        <linearGradient id={`pa-${variant}`} x1="0" x2="1">
          <stop offset="0" stopColor={c} stopOpacity="0.6"/>
          <stop offset="1" stopColor={c} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="120" fill={`url(#pa-${variant})`}/>
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i}
          cx={20 + (i * 19) % 300}
          cy={20 + ((i * 37) % 80)}
          r={2 + (i % 4)}
          fill={c}
          opacity={0.3 + (i % 5) * 0.12}
        />
      ))}
      <path d="M 0 80 Q 80 60 160 80 T 320 80" fill="none" stroke={c} strokeWidth="2" opacity="0.7"/>
    </svg>
  )
}
