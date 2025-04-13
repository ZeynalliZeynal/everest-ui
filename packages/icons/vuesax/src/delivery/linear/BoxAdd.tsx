import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45A3.9 3.9 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88 1 0 1.9.36 2.6.97.12.09.23.2.33.31C22.59 16 23 16.95 23 18M20.49 17.98h-2.98M19 16.52v2.99"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.61 9.17v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73"
    />
  </svg>
);
export default SvgBoxAdd;
