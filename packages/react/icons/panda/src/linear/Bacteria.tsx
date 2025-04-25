import * as React from "react";
import type { SVGProps } from "react";
const SvgBacteria = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m4.5 11.5.414-1M14.465 7.172s1.243-.172 2.121.707c.879.878.707 2.121.707 2.121M9 9.293s-1.243.172-2.121-.707C6 7.708 6.172 6.465 6.172 6.465M19 13.137s-1.162.473-1.484 1.673c-.321 1.2.449 2.19.449 2.19M13.42 17.772 15 19M14.5 14v-2M12 5h-2M12.5 9.5l-1-1"
    />
  </svg>
);
export default SvgBacteria;
