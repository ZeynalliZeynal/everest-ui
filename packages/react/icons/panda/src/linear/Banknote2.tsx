import * as React from "react";
import type { SVGProps } from "react";
const SvgBanknote2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11s0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11Z"
    />
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M19 8.076c.975.096 1.632.313 2.122.803C22 9.757 22 11.172 22 14s0 4.243-.878 5.121c-.88.88-2.293.88-5.122.88h-5c-2.828 0-4.242 0-5.121-.88-.49-.49-.707-1.146-.803-2.121"
    />
    <path
      stroke="#1C274C"
      strokeWidth={1.5}
      d="M13 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 13V9M5 13V9"
    />
  </svg>
);
export default SvgBanknote2;
