import * as React from "react";
import type { SVGProps } from "react";
const SvgWidget2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13.5 17.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM21.5 6.5c0-1.886 0-2.828-.586-3.414S19.386 2.5 17.5 2.5s-2.828 0-3.414.586S13.5 4.614 13.5 6.5s0 2.828.586 3.414 1.528.586 3.414.586 2.828 0 3.414-.586.586-1.528.586-3.414ZM10.5 17.5c0-1.886 0-2.828-.586-3.414S8.386 13.5 6.5 13.5s-2.828 0-3.414.586S2.5 15.614 2.5 17.5s0 2.828.586 3.414 1.528.586 3.414.586 2.828 0 3.414-.586.586-1.528.586-3.414Z"
    />
  </svg>
);
export default SvgWidget2;
