import * as React from "react";
import type { SVGProps } from "react";
const SvgLampSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.03 2.48 4.18 18.33M5.25 13c-.42-.97-.67-2.02-.67-3.1 0-4.91 4.22-8.78 9.02-7.73 1.46.32 2.76 1.1 3.76 2.18M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16c-.48-.3-.93-.67-1.36-1.1M8.5 22c2.29-.65 4.71-.65 7 0"
    />
  </svg>
);
export default SvgLampSlash;
