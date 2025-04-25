import * as React from "react";
import type { SVGProps } from "react";
const SvgTransmissionSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 9v6M12 9v6M8 12h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9"
    />
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="#000"
      strokeWidth={1.5}
      rx={5}
    />
  </svg>
);
export default SvgTransmissionSquare;
