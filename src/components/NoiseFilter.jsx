export default function NoiseFilter () {
  const noiseDots = Array.from({ length: 38 }, (_, i) => {
    const cx = 20 + Math.random() * 130
    const cy = 20 + Math.random() * 280
    const r = 2 + Math.random() * 6
    const colors = ['#ff6b9d', '#ffd166', '#06d6a0', '#8ab4ff', '#c79bff', '#ff8e72']
    const fill = colors[i % colors.length]
    const dur = 3 + Math.random() * 4
    const delay = Math.random() * 3
    return { cx, cy, r, fill, dur, delay, key: i }
  })

  const signalDots = [
    { cy: 70, fill: '#8ab4ff' },
    { cy: 130, fill: '#c79bff' },
    { cy: 190, fill: '#06d6a0' },
    { cy: 250, fill: '#ffd166' }
  ]

  return (
    <svg viewBox="0 0 460 320" className="noise-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="lensGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#8ab4ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#c79bff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="streamGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#8ab4ff" stopOpacity="0" />
          <stop offset="1" stopColor="#c79bff" stopOpacity="0.5" />
        </linearGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* noise cloud */}
      <g filter="url(#soft)" className="noise-cloud">
        {noiseDots.map(d => (
          <circle
            key={d.key}
            cx={d.cx} cy={d.cy} r={d.r}
            fill={d.fill}
            opacity="0.85"
          >
            <animate attributeName="opacity"
              values="0.4;0.95;0.4"
              dur={`${d.dur}s`}
              begin={`${d.delay}s`}
              repeatCount="indefinite" />
            <animate attributeName="cx"
              values={`${d.cx};${d.cx + (Math.random() * 14 - 7)};${d.cx}`}
              dur={`${d.dur + 1}s`}
              begin={`${d.delay}s`}
              repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      {/* funnel / lens */}
      <g>
        <path
          d="M 170 30 L 290 30 L 250 160 L 250 200 L 290 290 L 170 290 L 210 200 L 210 160 Z"
          fill="rgba(255,255,255,0.04)"
          stroke="url(#lensGrad)"
          strokeWidth="2"
        />
        <circle cx="230" cy="180" r="22" fill="none" stroke="url(#lensGrad)" strokeWidth="2">
          <animate attributeName="r" values="20;24;20" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="230" cy="180" r="6" fill="url(#lensGrad)" />
      </g>

      {/* signal stream */}
      <g>
        {signalDots.map((d, i) => (
          <g key={i}>
            <circle cx="380" cy={d.cy} r="8" fill={d.fill} opacity="0.9">
              <animate attributeName="cx"
                values="290;380;380"
                dur="2.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite" />
              <animate attributeName="opacity"
                values="0;1;0.9"
                dur="2.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <line x1="290" y1="160" x2="440" y2="160" stroke="url(#streamGrad)" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
      </g>
    </svg>
  )
}
