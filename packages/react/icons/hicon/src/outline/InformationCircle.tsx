import * as React from "react";
import type { SVGProps } from "react";
const SvgInformationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgInformationCircle;
