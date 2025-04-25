import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 17.75a.75.75 0 0 0 0-1.5zm8-1.5a.75.75 0 0 0 0 1.5zm0-10a.75.75 0 0 0 0 1.5zm-8 1.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zM8 17v-.75A4.25 4.25 0 0 1 3.75 12h-1.5A5.75 5.75 0 0 0 8 17.75zm13-5h-.75A4.25 4.25 0 0 1 16 16.25v1.5A5.75 5.75 0 0 0 21.75 12zm-5-5v.75A4.25 4.25 0 0 1 20.25 12h1.5A5.75 5.75 0 0 0 16 6.25zM8 7v-.75A5.75 5.75 0 0 0 2.25 12h1.5A4.25 4.25 0 0 1 8 7.75zm0 5v.75h8v-1.5H8z"
    />
  </svg>
);
export default SvgLink;
