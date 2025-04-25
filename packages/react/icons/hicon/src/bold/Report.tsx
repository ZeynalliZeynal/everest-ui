import * as React from "react";
import type { SVGProps } from "react";
const SvgReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.955 2.25c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152V21a.75.75 0 0 0 1.5 0v-6.25h11.448a2.552 2.552 0 0 0 1.446-4.655l-.281-.193a1.7 1.7 0 0 1 0-2.804l.28-.193a2.552 2.552 0 0 0-1.445-4.655z"
    />
  </svg>
);
export default SvgReport;
