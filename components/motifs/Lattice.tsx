/**
 * A quiet geometric lattice derived from Basra shanasheel woodwork —
 * the second, subtler Basra note (see brief). Confined to the footer so
 * it never competes with the globe-grid motif.
 */
export default function Lattice({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="shanasheel" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M20 0 L40 20 L20 40 L0 20 Z M20 0 L20 40 M0 20 L40 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#shanasheel)" />
    </svg>
  );
}
