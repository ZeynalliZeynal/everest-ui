import * as React from "react";
import type { SVGProps } from "react";
const SvgAutonio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12 5.9-2.6 4.2h5.2zM8.6 11.9 6 16.1h5.1zM15.4 11.9l-2.5 4.2H18z"
    />
  </svg>
);
export default SvgAutonio;
