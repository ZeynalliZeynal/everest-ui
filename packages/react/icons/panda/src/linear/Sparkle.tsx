import * as React from "react";
import type { SVGProps } from "react";
const SvgSparkle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92 1.697 1.697"
    />
  </svg>
);
export default SvgSparkle;
