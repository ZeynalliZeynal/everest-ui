import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={6} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 18.678l-.393.393M19.07 19.07l-.392-.392M5.322 5.322l-.393-.393"
    />
  </svg>
);
export default SvgSun;
