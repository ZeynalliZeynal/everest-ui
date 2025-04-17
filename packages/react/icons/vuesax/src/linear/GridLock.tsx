import * as React from "react";
import type { SVGProps } from "react";
const SvgGridLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M2.03 8.5H22M2.03 15.5H12M8.51 21.99V2.01M15.51 11.99V2.01"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2"
    />
  </svg>
);
export default SvgGridLock;
