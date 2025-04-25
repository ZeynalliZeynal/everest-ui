import * as React from "react";
import type { SVGProps } from "react";
const SvgTennis = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731 9.99 9.99 0 0 0-.537-8.93 9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.196 2.071s-.232 3.599 2.268 7.93 5.733 5.928 5.733 5.928M2.803 8.071s3.233 1.599 5.733 5.93 2.268 7.928 2.268 7.928"
    />
  </svg>
);
export default SvgTennis;
