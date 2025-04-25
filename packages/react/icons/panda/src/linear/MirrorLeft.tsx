import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3h-1C7.229 3 5.343 3 4.172 4.172S3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h1"
    />
    <path
      stroke="#000"
      strokeDasharray="2.5 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 2v20" />
  </svg>
);
export default SvgMirrorLeft;
