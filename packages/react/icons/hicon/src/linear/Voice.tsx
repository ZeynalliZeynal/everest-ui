import * as React from "react";
import type { SVGProps } from "react";
const SvgVoice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 8v8m3-7v6m3-4v2M9 9v6m-3-4v2"
    />
  </svg>
);
export default SvgVoice;
