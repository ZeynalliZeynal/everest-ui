import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.009 8c.036-2.48.22-3.885 1.163-4.828C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M17 19h-5" />
  </svg>
);
export default SvgDevices;
