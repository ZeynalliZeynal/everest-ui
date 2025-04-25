import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.731 1.49c-1.196-.494-2.356-.185-3.182.544-.806.713-1.299 1.821-1.299 2.999v.966c0 2.9 2.35 5.25 5.25 5.25h.966c1.177 0 2.286-.493 2.998-1.3.73-.825 1.04-1.986.544-3.181A9.75 9.75 0 0 0 17.73 1.49M14.75 5.034c0-.774.328-1.464.793-1.875.445-.393 1.006-.533 1.614-.281a8.25 8.25 0 0 1 4.465 4.465c.252.607.112 1.169-.282 1.614-.41.465-1.1.793-1.874.793H18.5a3.75 3.75 0 0 1-3.75-3.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.75 6.499c0-1.46-1.237-2.886-2.899-2.51a9.75 9.75 0 1 0 11.66 11.659c.375-1.663-1.052-2.9-2.511-2.9h-2a4.25 4.25 0 0 1-4.25-4.25zM9.182 5.452c.492-.112 1.068.297 1.068 1.047v2a5.75 5.75 0 0 0 5.75 5.75h2c.75 0 1.158.575 1.047 1.068a8.25 8.25 0 1 1-9.865-9.865"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGraph;
