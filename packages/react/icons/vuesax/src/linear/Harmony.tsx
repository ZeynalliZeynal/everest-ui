import * as React from "react";
import type { SVGProps } from "react";
const SvgHarmony = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 5.7c0 1.7-.8 3.3-2.3 4.2-1.3.8-3.2 1.6-5.7 1.9V5.7c0-2 1.7-3.7 3.7-3.7h.5C20.3 2 22 3.7 22 5.7Z"
    />
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 8v10.3c0 2.1-1.7 3.7-3.7 3.7h-.5c-2.1 0-3.7-1.7-3.7-3.7v-6.4C19.6 11.2 22 8 22 8ZM2 18.3c0-1.7.8-3.3 2.3-4.2 1.3-.8 3.2-1.6 5.7-1.9v6.1c0 2.1-1.7 3.7-3.7 3.7h-.6c-2 0-3.7-1.7-3.7-3.7Z"
    />
    <path
      stroke="#17191C"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 16V5.7C2 3.7 3.7 2 5.7 2h.5C8.3 2 10 3.7 10 5.7v6.4c-5.6.7-8 3.9-8 3.9ZM10 12.1c.6-.1 1.3-.1 2-.1s1.4 0 2-.1"
    />
  </svg>
);
export default SvgHarmony;
