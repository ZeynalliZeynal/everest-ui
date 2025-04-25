import * as React from "react";
import type { SVGProps } from "react";
const SvgWirelessCharge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z"
    />
    <path fill="#000" d="M11.25 22a.75.75 0 0 0 1.5 0zm0-1v1h1.5v-1z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.857 7 10 10h4l-2.857 3"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"
    />
  </svg>
);
export default SvgWirelessCharge;
