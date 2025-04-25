import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M22 3H2M22 21H2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"
    />
  </svg>
);
export default SvgAlignVerticalSpacing;
