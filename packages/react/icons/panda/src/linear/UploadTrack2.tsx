import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M13 15V7" />
    <circle cx={11} cy={15} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 10a3 3 0 0 1-3-3"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
    />
  </svg>
);
export default SvgUploadTrack2;
