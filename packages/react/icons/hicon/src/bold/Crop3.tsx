import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop3 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.568 2a.75.75 0 1 0-1.5 0v.818a.25.25 0 0 1-.25.25H2a.75.75 0 0 0 0 1.5h.818a1.75 1.75 0 0 0 1.75-1.75zM21.182 19.432a1.75 1.75 0 0 0-1.75 1.75V22a.75.75 0 0 0 1.5 0v-.818a.25.25 0 0 1 .25-.25H22a.75.75 0 0 0 0-1.5zM10.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.818 10.182V5.11A2.5 2.5 0 0 0 5.11 3.818h5.072c4.714 0 7.07 0 8.535 1.465 1.465 1.464 1.465 3.821 1.465 8.535v5.072a2.5 2.5 0 0 0-1.292 1.292h-5.072c-4.714 0-7.07 0-8.535-1.465-1.465-1.464-1.465-3.821-1.465-8.535M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrop3;
