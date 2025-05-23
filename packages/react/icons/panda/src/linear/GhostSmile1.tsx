import * as React from "react";
import type { SVGProps } from "react";
const SvgGhostSmile1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"
    />
    <ellipse cx={15} cy={9.5} fill="#000" rx={1} ry={1.5} />
    <ellipse cx={9} cy={9.5} fill="#000" rx={1} ry={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z"
    />
  </svg>
);
export default SvgGhostSmile1;
