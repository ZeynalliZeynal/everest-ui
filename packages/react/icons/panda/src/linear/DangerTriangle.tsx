import * as React from "react";
import type { SVGProps } from "react";
const SvgDangerTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 8v5" />
    <circle cx={12} cy={16} r={1} fill="#000" />
  </svg>
);
export default SvgDangerTriangle;
