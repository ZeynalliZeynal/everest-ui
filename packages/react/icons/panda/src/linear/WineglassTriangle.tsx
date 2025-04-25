import * as React from "react";
import type { SVGProps } from "react";
const SvgWineglassTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 14.571 8.516-8.707C21.562 4.794 20.8 3 19.3 3H4.701C3.2 3 2.438 4.794 3.484 5.864zm0 0V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"
    />
  </svg>
);
export default SvgWineglassTriangle;
