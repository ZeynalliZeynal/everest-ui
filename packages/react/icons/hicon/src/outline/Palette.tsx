import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M11.812 1.25C5.979 1.25 1.25 5.979 1.25 11.812v.384a10.1 10.1 0 0 0 8.294 9.938c2.122.386 3.976-1.468 3.59-3.59l-.396-2.178c-.39-2.145 1.483-4.018 3.628-3.628l2.178.396c2.122.386 3.976-1.468 3.59-3.59a10.1 10.1 0 0 0-9.938-8.294zM2.75 11.812a9.06 9.06 0 0 1 9.062-9.062h.384a8.6 8.6 0 0 1 8.462 7.062 1.588 1.588 0 0 1-1.846 1.846l-2.178-.396c-3.175-.577-5.95 2.197-5.372 5.372l.396 2.178a1.588 1.588 0 0 1-1.846 1.846 8.6 8.6 0 0 1-7.062-8.462z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M14 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgPalette;
