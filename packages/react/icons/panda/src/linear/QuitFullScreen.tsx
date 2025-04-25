import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"
    />
  </svg>
);
export default SvgQuitFullScreen;
