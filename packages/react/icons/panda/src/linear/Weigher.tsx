import * as React from "react";
import type { SVGProps } from "react";
const SvgWeigher = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 18h8M16.412 9.97l.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.248 0l-.425.07a2 2 0 0 0-1.528 2.716l.665 1.664c.236.59.871.914 1.487.76 1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.486-.76ZM10.18 9.929l-.675-1.883"
    />
  </svg>
);
export default SvgWeigher;
