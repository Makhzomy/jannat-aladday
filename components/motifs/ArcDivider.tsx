/**
 * A cropped slice of the same globe grid, used flat as a section divider
 * so the signature motif reads as one consistent device across the page.
 */
export default function ArcDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 20c66 -18 134 -18 200 0s134 18 200 0" />
      <path d="M0 28c66 -12 134 -12 200 0s134 12 200 0" opacity="0.6" />
      <line x1="0" y1="20" x2="400" y2="20" opacity="0.35" />
    </svg>
  );
}
