import * as React from "react";
import type { SVGProps } from "react";
const SvgCall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.112 2.975a2.75 2.75 0 0 0-3.721 0c-.044.04-.09.086-.15.145l-.897.898A3.74 3.74 0 0 0 2.34 7.47a18.66 18.66 0 0 0 14.17 14.17 3.74 3.74 0 0 0 3.452-1.005l.898-.898c.06-.06.105-.105.145-.148a2.75 2.75 0 0 0-.145-3.87l-1.47-1.47a3.51 3.51 0 0 0-3.883-.735c-.757.33-1.639.163-2.223-.421l-2.397-2.397a2.01 2.01 0 0 1-.42-2.223A3.51 3.51 0 0 0 9.73 4.59L8.26 3.12a5 5 0 0 0-.148-.145"
    />
  </svg>
);
export default SvgCall;
