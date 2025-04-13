import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.9 22H7.1C5.4 22 4 20.61 4 18.9V5.1C4 3.4 5.39 2 7.1 2h9.8C18.6 2 20 3.39 20 5.1v13.8c0 1.71-1.39 3.1-3.1 3.1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 13h-13c-.83 0-1.5-.67-1.5-1.5v-2C4 8.67 4.67 8 5.5 8h13c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M8.495 17.7h.008M15.495 17.7h.009"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 5h5"
    />
  </svg>
);
export default SvgBus;
