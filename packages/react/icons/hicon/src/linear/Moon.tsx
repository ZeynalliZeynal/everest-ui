import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12.27 12.389c4 6.928 11.515 4.899 6.732 7.66s-10.9 1.123-13.66-3.66C2.58 11.606 4.218 5.49 9.001 2.729s-.732 2.732 3.268 9.66Z"
    />
  </svg>
);
export default SvgMoon;
