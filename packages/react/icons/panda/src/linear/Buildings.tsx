import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M21 22V6c0-1.886 0-2.828-.586-3.414S18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 22V9c0-1.886 0-2.828-.586-3.414S12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v13"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 22v-3M6 8h6M6 11h6M6 14h6"
    />
  </svg>
);
export default SvgBuildings;
