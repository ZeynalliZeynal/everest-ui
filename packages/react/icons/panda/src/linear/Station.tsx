import * as React from "react";
import type { SVGProps } from "react";
const SvgStation = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.141 2.078a9.97 9.97 0 0 1 2.859 7 9.97 9.97 0 0 1-2.922 7.064M5 16.22a9.97 9.97 0 0 1-3-7.142A9.97 9.97 0 0 1 4.936 2M16.285 5.122C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044C6.69 12.057 6 10.634 6 9.06c0-1.555.673-2.963 1.762-3.982"
    />
    <circle cx={12} cy={9.078} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5"
    />
  </svg>
);
export default SvgStation;
