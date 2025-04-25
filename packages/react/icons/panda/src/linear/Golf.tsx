import * as React from "react";
import type { SVGProps } from "react";
const SvgGolf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <ellipse
      cx={12}
      cy={18.5}
      stroke="#000"
      strokeWidth={1.5}
      rx={10}
      ry={3.5}
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 18V2M12 3.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"
    />
  </svg>
);
export default SvgGolf;
