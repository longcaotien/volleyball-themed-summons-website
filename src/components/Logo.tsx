import VolleyBall from "./VolleyBall";

/** Emblem logo: rotating text ring + shield + volleyball + wings */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(242,184,59,.55),transparent_65%)] blur-md anim-glow" />

      {/* rotating text ring */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 anim-spin-slow">
        <defs>
          <path id="ringPath" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="#f2b83b" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <text fontSize="13.5" fontWeight="700" letterSpacing="3.2" fill="#fff" fontFamily="Lora, serif">
          <textPath href="#ringPath">ĐỘI TUYỂN BÓNG CHUYỀN ★ 11TN2 ★ CÙNG NHAU ★</textPath>
        </text>
      </svg>

      {/* counter-rotating thin ring */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 anim-spin-rev">
        <circle cx="100" cy="100" r="64" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" strokeDasharray="1 5" strokeLinecap="round" />
      </svg>

      {/* shield + wings */}
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <linearGradient id="shieldG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fffdf4" />
            <stop offset="100%" stopColor="#f6efd6" />
          </linearGradient>
          <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe28a" />
            <stop offset="100%" stopColor="#d4932a" />
          </linearGradient>
        </defs>
        {/* wings */}
        <g fill="url(#goldG)" stroke="#8a5d10" strokeWidth=".8">
          <path d="M62 92 C40 86 28 74 22 60 C38 62 50 66 58 74 C46 70 38 70 32 72 C44 78 54 80 62 84Z" />
          <path d="M62 102 C42 100 30 94 22 84 C38 84 50 88 60 94 C50 92 42 92 36 94 C46 98 54 100 62 100Z" />
          <path d="M138 92 C160 86 172 74 178 60 C162 62 150 66 142 74 C154 70 162 70 168 72 C156 78 146 80 138 84Z" />
          <path d="M138 102 C158 100 170 94 178 84 C162 84 150 88 140 94 C150 92 158 92 164 94 C154 98 146 100 138 100Z" />
        </g>
        {/* shield */}
        <path
          d="M100 50 L140 62 V104 C140 128 122 144 100 154 C78 144 60 128 60 104 V62 Z"
          fill="url(#shieldG)"
          stroke="#0b1f4a"
          strokeWidth="3"
        />
        <path
          d="M100 57 L134 67 V103 C134 124 119 138 100 147 C81 138 66 124 66 103 V67 Z"
          fill="none"
          stroke="#14306b"
          strokeWidth="1.2"
          opacity=".6"
        />
        {/* top crown stars */}
        <g fill="#f2b83b" stroke="#8a5d10" strokeWidth=".5">
          {[78, 100, 122].map((x, i) => (
            <path
              key={x}
              transform={`translate(${x} ${i === 1 ? 36 : 40}) scale(${i === 1 ? 1.1 : 0.8})`}
              d="M0 -6 L1.8 -1.9 L6.2 -1.9 L2.7 0.9 L4 5.2 L0 2.6 L-4 5.2 L-2.7 0.9 L-6.2 -1.9 L-1.8 -1.9Z"
            />
          ))}
        </g>
        {/* 11TN2 ribbon */}
        <g>
          <path d="M56 132 L144 132 L152 142 L144 152 L56 152 L48 142Z" fill="#14306b" stroke="#0b1f4a" strokeWidth="1.5" />
          <text x="100" y="147.5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ffe28a" fontFamily="Playfair Display, serif" letterSpacing="1.5">
            11TN2
          </text>
        </g>
      </svg>

      {/* ball sitting in shield */}
      <div className="absolute left-1/2 top-[44%] h-[27%] w-[27%] -translate-x-1/2 -translate-y-1/2">
        <VolleyBall className="h-full w-full anim-spin-ball drop-shadow-md" />
      </div>
    </div>
  );
}
