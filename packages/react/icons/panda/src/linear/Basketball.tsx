import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketball = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.34 17C6.1 21.783 12.216 23.42 17 20.66a9.96 9.96 0 0 0 4.196-4.731 9.99 9.99 0 0 0-.536-8.93 9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.95 20.573S16.01 13.982 14 10.5 7.05 3.427 7.05 3.427"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.237M16.414 3.209c-1.488 4.42-8.74 9.303-14.125 8.243"
    />
  </svg>
);
export default SvgBasketball;
