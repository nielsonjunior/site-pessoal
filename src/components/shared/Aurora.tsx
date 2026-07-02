/**
 * Fundo "aurora" — ondas de luz (verde-água → verde neon → azul) sobre fundo
 * escuro. Usado no novo tema premium do site (hero e seções escuras).
 * Puramente decorativo (aria-hidden); não captura cliques.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* brilho radial no topo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 6%, rgba(30,99,196,.55) 0%, rgba(20,45,120,.25) 32%, transparent 60%), radial-gradient(90% 70% at 10% 2%, rgba(14,42,114,.6) 0%, transparent 55%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="aurora-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2b6bff" stopOpacity="0" />
            <stop offset="40%" stopColor="#37E6C8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#B9F227" stopOpacity="1" />
            <stop offset="100%" stopColor="#2b6bff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aurora-wave2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2b6bff" stopOpacity="0" />
            <stop offset="50%" stopColor="#5fd0ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2b6bff" stopOpacity="0" />
          </linearGradient>
          <filter id="aurora-blur1">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="aurora-blur2">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <g filter="url(#aurora-blur2)" opacity="0.7">
          <path
            d="M-50,470 C250,560 430,300 640,340 C860,382 980,560 1260,470"
            fill="none"
            stroke="url(#aurora-wave)"
            strokeWidth="10"
          />
        </g>
        <path
          d="M-50,470 C250,560 430,300 640,340 C860,382 980,560 1260,470"
          fill="none"
          stroke="url(#aurora-wave)"
          strokeWidth="2.4"
          filter="url(#aurora-blur1)"
        />
        <path
          d="M-50,510 C260,600 440,360 660,392 C880,424 1000,600 1260,520"
          fill="none"
          stroke="url(#aurora-wave2)"
          strokeWidth="1.6"
          filter="url(#aurora-blur1)"
          opacity="0.8"
        />
        <g filter="url(#aurora-blur2)" opacity="0.3">
          <path
            d="M-50,250 C260,150 470,300 700,250 C930,205 1050,120 1260,200"
            fill="none"
            stroke="url(#aurora-wave2)"
            strokeWidth="8"
          />
        </g>
      </svg>
    </div>
  );
}
