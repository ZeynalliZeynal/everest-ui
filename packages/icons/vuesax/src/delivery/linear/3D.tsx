import * as React from "react";
import type { SVGProps } from "react";
const Svg3D = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.7 9.26 5.3 3.07 5.26-3.05M12 17.77v-5.45"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.76 6.29-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01"
    />
  </svg>
);
export default Svg3D;
