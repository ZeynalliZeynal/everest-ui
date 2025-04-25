import * as React from "react";
import type { SVGProps } from "react";
const SvgGarage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 22H2M3 22V11.347a3 3 0 0 1 1.007-2.242l6-5.334a3 3 0 0 1 3.986 0l6 5.334A3 3 0 0 1 21 11.347V22M10 9h4M9 15.5h6M9 18.5h6"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6"
    />
  </svg>
);
export default SvgGarage;
