import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.75 10.036 8.5-2.55v4.992a3.75 3.75 0 1 0 1.5 3v-12c0-1.498-1.45-2.57-2.882-2.128l-4.581 1.41-2.043.583A2.75 2.75 0 0 0 9.25 5.987v9.49a3.75 3.75 0 1 0 1.5 3zm7.559-7.253a.727.727 0 0 1 .941.695V5.92l-8.5 2.55V5.987c0-.558.37-1.049.907-1.202l2.056-.588zM17 13.228a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m-10 3a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMusic;
