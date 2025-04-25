import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M6 16h12" />
  </svg>
);
export default SvgRecordMinimalistic;
