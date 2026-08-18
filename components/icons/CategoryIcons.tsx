import type { SVGProps } from "react";
import type { CategoryId } from "@/content/types";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function PaperIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M15 3v4h4" />
      <path d="M8 12h8M8 15.5h8M8 8.5h3" />
    </svg>
  );
}

function WritingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1-4.5L15.5 5A2.1 2.1 0 0 1 18.5 8L8 18.5 4 20Z" />
      <path d="M13 7l4 4" />
      <path d="M4 20l1-4.5 3.5 3.5L4 20Z" />
    </svg>
  );
}

function FilingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6a1 1 0 0 1 1-1h4l2 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z" />
      <path d="M4 10h16" />
    </svg>
  );
}

function OfficeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="16" height="5" rx="1" />
      <path d="M7 10v3.5a1 1 0 0 0 1 1h.01M17 10v3.5a1 1 0 0 1-1 1h-.01" />
      <path d="M9 19l1.5-4.5h3L15 19" />
      <path d="M12 14.5V19" />
    </svg>
  );
}

function SchoolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <rect x="5" y="8" width="14" height="13" rx="2.5" />
      <path d="M9 12.5h6M12 12.5V17" />
    </svg>
  );
}

function PresentationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20l4-4 4 4" />
      <path d="M7 12l3-3 2.5 2.5L17 7" />
    </svg>
  );
}

export const categoryIcons: Record<CategoryId, (props: IconProps) => React.JSX.Element> = {
  paper: PaperIcon,
  writing: WritingIcon,
  filing: FilingIcon,
  office: OfficeIcon,
  school: SchoolIcon,
  presentation: PresentationIcon,
};
