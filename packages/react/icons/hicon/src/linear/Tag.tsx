import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.872 2.875c1.883-.594 2.824-.89 3.645-.874a5 5 0 0 1 4.18 2.413c.424.702.638 1.666 1.065 3.594.166.748.25 1.123.275 1.493a5 5 0 0 1-.362 2.247c-.14.344-.337.673-.73 1.332l-2.458 4.123c-.891 1.495-1.337 2.242-1.886 2.742a5 5 0 0 1-4.499 1.171c-.723-.168-1.477-.603-2.984-1.473s-2.261-1.306-2.769-1.848a5 5 0 0 1-1.234-4.481c.158-.726.582-1.486 1.432-3.005l2.34-4.19c.375-.67.562-1.004.79-1.298A5 5 0 0 1 9.44 3.384c.334-.163.7-.278 1.43-.51Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11.906 7.581a1.75 1.75 0 1 1 3.032 1.751 1.75 1.75 0 0 1-3.032-1.751Z"
    />
  </svg>
);
export default SvgTag;
