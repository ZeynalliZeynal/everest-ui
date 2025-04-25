import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"
    />
  </svg>
);
export default SvgFullScreen;
