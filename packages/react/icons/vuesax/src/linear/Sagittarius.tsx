import * as React from "react";
import type { SVGProps } from "react";
const SvgSagittarius = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3h9v9M21 3 3 21M6.6 6.6l10.8 10.8"
    />
  </svg>
);
export default SvgSagittarius;
