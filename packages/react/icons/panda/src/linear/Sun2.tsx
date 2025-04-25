import * as React from "react";
import type { SVGProps } from "react";
const SvgSun2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.222l-2.222 2.032M4.222 4.222l2.222 2.032M6.444 17.556l-2.222 2.222M19.778 19.778l-2.222-2.222"
    />
  </svg>
);
export default SvgSun2;
