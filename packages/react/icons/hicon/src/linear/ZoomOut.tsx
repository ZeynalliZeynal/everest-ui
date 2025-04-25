import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 9.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm5.53 6.72a.75.75 0 0 0-1.06 1.06zm2.94 5.06a.75.75 0 0 0 1.06-1.06zM8 10v.75h6v-1.5H8zm11 8-.53.53 4 4L23 22l.53-.53-4-4zm-8 1v-.75A8.25 8.25 0 0 1 2.75 10h-1.5c0 5.385 4.365 9.75 9.75 9.75zm9-9h-.75A8.25 8.25 0 0 1 11 18.25v1.5c5.385 0 9.75-4.365 9.75-9.75zm-9-9v.75A8.25 8.25 0 0 1 19.25 10h1.5c0-5.385-4.365-9.75-9.75-9.75zm0 0V.25C5.615.25 1.25 4.615 1.25 10h1.5A8.25 8.25 0 0 1 11 1.75z"
    />
  </svg>
);
export default SvgZoomOut;
