import React, { useState } from 'react';

interface AnimatedLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  inverted?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = '',
  size = 44,
  showText = false,
  inverted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDashing, setIsDashing] = useState(false);

  const triggerDash = () => {
    setIsDashing(true);
    setTimeout(() => setIsDashing(false), 900);
  };

  return (
    <div
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerDash}
      title="Poawk Property Movers - Click to animate!"
    >
      {/* Animated Logo Container */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Ambient speed glow */}
        <div 
          className={`absolute -inset-1 rounded-xl bg-sky-500/30 blur-md transition-all duration-300 pointer-events-none ${
            isHovered || isDashing ? 'opacity-100 scale-125' : 'opacity-0 scale-90'
          }`} 
        />

        {/* SVG Vector with discrete animated layers */}
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full relative z-10 drop-shadow-sm transition-transform duration-300 ${
            isDashing ? 'scale-110 translate-x-1' : isHovered ? 'scale-105' : 'scale-100'
          }`}
        >
          <defs>
            <linearGradient id="poawkBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007cd8" />
              <stop offset="100%" stopColor="#0056aa" />
            </linearGradient>

            <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#007cd8" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="shineLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Roof (Triangle) with subtle floating suspension */}
          <g 
            className={`transition-all duration-400 origin-bottom ${
              isHovered ? '-translate-y-1.5' : 'animate-gentle-float'
            }`}
          >
            <polygon
              points="80,16 146,62 14,62"
              fill={inverted ? '#38bdf8' : 'url(#poawkBlueGrad)'}
            />
            {/* Architectural peak highlight */}
            <polygon
              points="80,16 146,62 138,62 80,22 22,62 14,62"
              fill="#ffffff"
              opacity="0.25"
            />
          </g>

          {/* Horizontal Speed Streaks (Dashing forward) */}
          <g className={`transition-all duration-300 ${isDashing ? 'translate-x-2' : ''}`}>
            {/* Dash line 1 */}
            <rect
              x={isDashing ? "6" : isHovered ? "2" : "0"}
              y="74"
              width="24"
              height="3.5"
              rx="1.75"
              fill="url(#speedGrad)"
              className="transition-all duration-300"
            />
            {/* Dash line 2 */}
            <rect
              x={isDashing ? "14" : isHovered ? "8" : "6"}
              y="82"
              width="20"
              height="3.5"
              rx="1.75"
              fill="url(#speedGrad)"
              className="transition-all duration-300"
            />
            {/* Dash line 3 */}
            <rect
              x={isDashing ? "4" : isHovered ? "1" : "-2"}
              y="90"
              width="28"
              height="3.5"
              rx="1.75"
              fill="url(#speedGrad)"
              className="transition-all duration-300"
            />
            {/* Dash line 4 */}
            <rect
              x={isDashing ? "16" : isHovered ? "10" : "8"}
              y="98"
              width="16"
              height="3.5"
              rx="1.75"
              fill="url(#speedGrad)"
              className="transition-all duration-300"
            />
          </g>

          {/* Moving Circle (Velocity wheel) - Rolls on hover & dash */}
          <g 
            className="transition-transform duration-500 origin-[58px_86px]"
            style={{
              transform: isDashing 
                ? 'translateX(4px) rotate(180deg)' 
                : isHovered 
                  ? 'translateX(2px) rotate(60deg)' 
                  : 'translateX(0) rotate(0deg)'
            }}
          >
            <circle
              cx="58"
              cy="86"
              r="22"
              fill={inverted ? '#38bdf8' : 'url(#poawkBlueGrad)'}
            />
            {/* Inner dynamic bevel */}
            <circle
              cx="54"
              cy="82"
              r="17"
              fill="#ffffff"
              opacity="0.15"
            />
            {/* Motion reflection dot */}
            <circle
              cx="65"
              cy="79"
              r="4.5"
              fill="#ffffff"
              opacity="0.6"
            />
          </g>

          {/* Right Cube (Property building / cargo box) */}
          <g className={`transition-all duration-300 origin-center ${isHovered ? 'scale-102' : ''}`}>
            <rect
              x="92"
              y="68"
              width="36"
              height="36"
              rx="2"
              fill={inverted ? '#38bdf8' : 'url(#poawkBlueGrad)'}
            />
            {/* Pillar Capital Overhang */}
            <rect
              x="88"
              y="66"
              width="44"
              height="5.5"
              rx="1.2"
              fill={inverted ? '#0284c7' : '#004285'}
            />
            {/* Subtle inner box shadow */}
            <rect
              x="94"
              y="73"
              width="32"
              height="28"
              fill="#ffffff"
              opacity="0.1"
            />
          </g>

          {/* Ground Platform / Base Bar */}
          <rect
            x="14"
            y="110"
            width={isHovered ? '136' : '132'}
            height="8"
            rx="2"
            fill={inverted ? '#38bdf8' : 'url(#poawkBlueGrad)'}
            className="transition-all duration-300"
          />

          {/* Shimmer sweep effect */}
          {(isHovered || isDashing) && (
            <rect
              x="-40"
              y="10"
              width="50"
              height="120"
              fill="url(#shineLight)"
              transform="skewX(-25)"
              className="animate-[shimmer_0.9s_infinite]"
            />
          )}
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-extrabold tracking-tight leading-tight transition-colors ${
            inverted 
              ? 'text-white group-hover:text-sky-300' 
              : 'text-slate-900 group-hover:text-sky-600'
          }`}>
            Poawk Property Movers
          </span>
          <span className={`text-2xs font-bold tracking-wider uppercase ${
            inverted ? 'text-sky-300' : 'text-sky-700'
          }`}>
            What Can't We Move?
          </span>
        </div>
      )}
    </div>
  );
};
