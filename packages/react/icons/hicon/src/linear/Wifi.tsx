import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 16.2-.4-.4a5.09 5.09 0 0 0-7.2 0l-.4.4m11-4-.7-.7a8.91 8.91 0 0 0-12.6 0l-.7.7m18-4-1.1-1.1c-5.468-5.467-14.332-5.467-19.8 0L1 8.2"
    />
    <path fill="currentColor" d="M13 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgWifi;
