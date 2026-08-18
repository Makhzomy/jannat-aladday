/**
 * The signature motif: the meridian/parallel grid from inside the logo's
 * shield, extracted as a standalone line drawing. Used sparingly — see
 * the three call sites (hero watermark, section divider, category grid
 * frame) — this is the one recurring device, so it stays quiet everywhere
 * else.
 */
export default function GlobeGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="98" />
      <ellipse cx="100" cy="100" rx="98" ry="34" />
      <ellipse cx="100" cy="100" rx="98" ry="66" />
      <line x1="2" y1="100" x2="198" y2="100" />
      <path d="M100 2C55 2 24 46 24 100s31 98 76 98" />
      <path d="M100 2c45 0 76 44 76 98s-31 98-76 98" />
      <path d="M100 2v196" />
    </svg>
  );
}
