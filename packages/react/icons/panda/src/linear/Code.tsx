import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 7.83 1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973 0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5 12 12.415l-1.987 7.415M7 7.83 5.304 9.357C3.76 10.745 2.99 11.439 2.99 12.33c0 .89.771 1.585 2.314 2.973L7 16.83"
    />
  </svg>
);
export default SvgCode;
