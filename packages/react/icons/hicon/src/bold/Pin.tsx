import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.48 3.433a5.75 5.75 0 0 1 9.96 5.75l-.108.187a7.75 7.75 0 0 1 .42 7.198c-.157.348-.377.728-.758 1.388l-.039.067a1.75 1.75 0 0 1-2.288.806 3 3 0 0 1-.24-.128l-6.191-3.575-3.625 6.28a.75.75 0 1 1-1.3-.75l3.626-6.28-6.192-3.574c-.079-.045-.16-.093-.231-.144a1.75 1.75 0 0 1-.575-2.144c.036-.08.083-.162.129-.24l.039-.068c.38-.66.6-1.04.822-1.35A7.75 7.75 0 0 1 8.372 3.62z"
    />
  </svg>
);
export default SvgPin;
