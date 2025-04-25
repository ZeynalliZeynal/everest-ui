import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 22V12c0-1.886 0-2.828.586-3.414S5.114 8 7 8s2.828 0 3.414.586S11 10.114 11 12"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M17 22v-6c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v6"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M21 22V7.772c0-1.341 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.382-4.543-.785S13 5.15 13 7.772V12"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2M22 22H2M10 15h4M10 18h4"
    />
  </svg>
);
export default SvgCity;
