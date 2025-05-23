import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterTick = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.74 4.74 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.03 14.75 1.17 1.17 2.53-2.34"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02"
    />
  </svg>
);
export default SvgFilterTick;
