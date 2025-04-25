import * as React from "react";
import type { SVGProps } from "react";
const SvgFaqCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.047 8.231c.512-1.537 2.54-1.866 3.512-.57.569.76.53 1.814-.096 2.528l-.919 1.05a5.23 5.23 0 0 0-1.294 3.444V15a.75.75 0 0 0 1.5 0v-.317c0-.903.328-1.776.923-2.456l.92-1.05a3.51 3.51 0 0 0 .165-4.416c-1.697-2.264-5.24-1.689-6.134.996l-.336 1.006a.75.75 0 1 0 1.424.474z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgFaqCircle;
