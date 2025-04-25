import * as React from "react";
import type { SVGProps } from "react";
const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 10v4m-1.732-3 3.464 2m0-2-3.465 2M6.732 10v4M5 11l3.464 2m0-2L5 13M17.268 10v4m-1.732-3L19 13m0-2-3.464 2"
    />
  </svg>
);
export default SvgPassword;
