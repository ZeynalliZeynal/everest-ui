import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChair = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 8 6 22M15 8l3 14M17 17H7"
    />
  </svg>
);
export default SvgBarChair;
