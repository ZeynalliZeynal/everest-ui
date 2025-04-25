import * as React from "react";
import type { SVGProps } from "react";
const SvgSoundwave = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4v16M16 7v10M8 7v10M20 11v2M4 11v2"
    />
  </svg>
);
export default SvgSoundwave;
