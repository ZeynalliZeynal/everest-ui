import * as React from "react";
import type { SVGProps } from "react";
const SvgOntology = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#17191C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.9 19.7c-1.7 1.5-4 2.4-6.5 2.3-5.2-.1-9.2-4.6-9.2-9.8v-7c0-.4.5-.7.9-.4zM6.2 4.3c1.7-1.5 4-2.4 6.4-2.3 5.1.1 9.1 4.5 9.1 9.7v7c0 .4-.5.7-.9.4z"
    />
  </svg>
);
export default SvgOntology;
