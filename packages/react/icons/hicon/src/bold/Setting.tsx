import * as React from "react";
import type { SVGProps } from "react";
const SvgSetting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.585 3.232c.98-3.436 5.85-3.436 6.83 0a2.05 2.05 0 0 0 2.47 1.426c3.466-.868 5.9 3.348 3.415 5.915a2.05 2.05 0 0 0 0 2.853c2.485 2.567.051 6.783-3.414 5.915a2.05 2.05 0 0 0-2.471 1.426c-.98 3.436-5.85 3.436-6.83 0a2.05 2.05 0 0 0-2.47-1.426c-3.466.868-5.9-3.348-3.415-5.915.77-.795.77-2.058 0-2.853C.215 8.006 2.649 3.79 6.114 4.658a2.05 2.05 0 0 0 2.471-1.426M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSetting;
