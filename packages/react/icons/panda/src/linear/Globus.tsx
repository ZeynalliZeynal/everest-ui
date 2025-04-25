import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={10} r={7} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 16.562A10.29 10.29 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687 22 6.633 20.672 3.888 18.562 2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M7 4.553c.585.552 1.79 2.063 1.931 3.684.131 1.515 1.096 2.746 2.569 2.763.566.006 1.139-.418 1.137-1.005 0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772.316-.236.604-.484.732-.684.35-.553.702-1.658.526-2.211M19 11c-.22.62-.375 2.25-2.855 2.276 0 0-2.195 0-2.854 1.241-.527.993-.22 2.07 0 2.483"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 22v-2M12 22h-2M14 22h-2"
    />
  </svg>
);
export default SvgGlobus;
