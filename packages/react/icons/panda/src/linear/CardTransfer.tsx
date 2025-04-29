import * as React from "react";
import type { SVGProps } from "react";
const SvgCardTransfer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 11c-.01-3.114-.108-4.765-1.172-5.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 14v6m0 0 2-2m-2 2-2-2m6.5 2v-6m0 0 2 2m-2-2-2 2"
    />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 16H6M2 10h20"
    />
  </svg>
);
export default SvgCardTransfer;
