import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeWiFi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12.204c0-2.288 0-3.432.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.24C9.889 2.622 10.892 2 12 2s2.11.623 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.916 22 12.204v1.521c0 3.901 0 5.852-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"
    />
  </svg>
);
export default SvgHomeWiFi;
