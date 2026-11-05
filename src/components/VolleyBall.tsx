import { useId } from "react";

type Props = {
  className?: string;
  mono?: boolean; // single-colour line version (for small icons)
  color?: string;
};

export default function VolleyBall({ className = "", mono = false, color = "#14306b" }: Props) {
  const uid = useId().replace(/:/g, "");

  if (mono) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
        <circle cx="50" cy="50" r="45" />
        <g>
          <path d="M8 36 C30 22 62 30 92 62" />
          <path d="M8 36 C30 22 62 30 92 62" transform="rotate(120 50 50)" />
          <path d="M8 36 C30 22 62 30 92 62" transform="rotate(240 50 50)" />
          <path d="M20 78 C38 56 50 46 56 6" opacity=".9" />
          <path d="M20 78 C38 56 50 46 56 6" transform="rotate(120 50 50)" opacity=".9" />
          <path d="M20 78 C38 56 50 46 56 6" transform="rotate(240 50 50)" opacity=".9" />
        </g>
      </svg>
    );
  }

  const band = "M-8 36 C25 14 62 26 108 64 L108 84 C62 48 28 40 -8 60 Z";

  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <clipPath id={`c${uid}`}>
          <circle cx="50" cy="50" r="46" />
        </clipPath>
        <radialGradient id={`y${uid}`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ffe28a" />
          <stop offset="60%" stopColor="#f2b83b" />
          <stop offset="100%" stopColor="#d4932a" />
        </radialGradient>
        <radialGradient id={`b${uid}`} cx="35%" cy="30%" r="90%">
          <stop offset="0%" stopColor="#4d8ae6" />
          <stop offset="60%" stopColor="#1f55b8" />
          <stop offset="100%" stopColor="#0f3585" />
        </radialGradient>
        <radialGradient id={`s${uid}`} cx="32%" cy="26%" r="55%">
          <stop offset="0%" stopColor="#fff" stopOpacity=".7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`d${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#0b1f4a" stopOpacity=".35" />
        </radialGradient>
      </defs>
      <g clipPath={`url(#c${uid})`}>
        <rect width="100" height="100" fill={`url(#y${uid})`} />
        <path d={band} fill={`url(#b${uid})`} />
        <path d={band} fill={`url(#b${uid})`} transform="rotate(120 50 50)" />
        <path d={band} fill={`url(#b${uid})`} transform="rotate(240 50 50)" />
        {/* seams */}
        <g fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity=".95">
          <path d="M-8 36 C25 14 62 26 108 64" />
          <path d="M-8 60 C28 40 62 48 108 84" />
          <path d="M-8 36 C25 14 62 26 108 64" transform="rotate(120 50 50)" />
          <path d="M-8 60 C28 40 62 48 108 84" transform="rotate(120 50 50)" />
          <path d="M-8 36 C25 14 62 26 108 64" transform="rotate(240 50 50)" />
          <path d="M-8 60 C28 40 62 48 108 84" transform="rotate(240 50 50)" />
        </g>
        <rect width="100" height="100" fill={`url(#d${uid})`} />
        <rect width="100" height="100" fill={`url(#s${uid})`} />
      </g>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#0b1f4a" strokeWidth="2.4" />
    </svg>
  );
}
