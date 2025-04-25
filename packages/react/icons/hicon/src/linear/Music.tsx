import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 18.478a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0v-9m10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0v-9m-10 3 10-3m-10 3V5.987a2 2 0 0 1 1.45-1.923l2.05-.586 4.588-1.412A1.477 1.477 0 0 1 20 3.478v3"
    />
  </svg>
);
export default SvgMusic;
