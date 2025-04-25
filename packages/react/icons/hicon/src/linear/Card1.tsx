import * as React from "react";
import type { SVGProps } from "react";
const SvgCard1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 17h-4m7.989-7c.011.577.011 1.236.011 2 0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C17.2 20 15.8 20 13 20h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 16.2 3 14.8 3 12c0-.764 0-1.423.011-2m17.978 0c-.03-1.54-.138-2.492-.534-3.27a5 5 0 0 0-2.185-2.185C17.2 4 15.8 4 13 4h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 6.73c-.396.778-.504 1.73-.534 3.27m17.978 0H3.011"
    />
  </svg>
);
export default SvgCard1;
