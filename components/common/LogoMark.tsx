interface LogoMarkProps {
  className?: string;
}

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ha-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D5EF7" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="18"
        fill="#101827"
        stroke="url(#ha-gradient)"
        strokeWidth="2"
      />

      <path
        d="M18 46V18H23V29H41V18H46V46H41V34H23V46H18Z"
        fill="url(#ha-gradient)"
      />

      <path
        d="M34 46L45 18H50L39 46H34Z"
        fill="url(#ha-gradient)"
        opacity=".95"
      />
    </svg>
  );
}