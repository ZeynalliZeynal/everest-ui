import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.708 3.055a2.917 2.917 0 0 1 4.114 3.367l-2.372 8.855a2.917 2.917 0 1 1-5.634-1.51l.949-3.542a.75.75 0 1 0-1.45-.388l-.948 3.542a4.417 4.417 0 1 0 8.532 2.286l2.373-8.854a4.417 4.417 0 0 0-7.714-3.906.75.75 0 1 0 1.17.939c.267-.333.603-.601.98-.789"
    />
    <path
      fill="currentColor"
      d="M8.223 9.276a2.917 2.917 0 1 1 5.635 1.51l-.95 3.542a.75.75 0 1 0 1.45.388l.948-3.542a4.417 4.417 0 1 0-8.532-2.286l-2.372 8.854a4.417 4.417 0 0 0 7.713 3.906.75.75 0 0 0-1.17-.939 2.93 2.93 0 0 1-3.032.994A2.917 2.917 0 0 1 5.85 18.13z"
    />
  </svg>
);
export default SvgAttachment;
