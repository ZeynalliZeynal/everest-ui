import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 20v-1.5M5 20v-1.5"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15ZM21 12c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"
    />
  </svg>
);
export default SvgBed;
