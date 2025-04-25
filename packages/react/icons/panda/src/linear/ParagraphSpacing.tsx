import * as React from "react";
import type { SVGProps } from "react";
const SvgParagraphSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 21h16M4 3h16M12 5.5l3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3"
    />
  </svg>
);
export default SvgParagraphSpacing;
