import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayAdd = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 1.31-.25 2.57-.72 3.72-.65-.45-1.44-.72-2.28-.72-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06q.06.105.15.21A9.8 9.8 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.38 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57zM23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.9 3.9 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19M20.49 18.98h-2.98M19 17.52v2.99"
    />
  </svg>
);
export default SvgPlayAdd;
