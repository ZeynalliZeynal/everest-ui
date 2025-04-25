import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <circle cx={12} cy={12} r={4} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgRecordCircle;
