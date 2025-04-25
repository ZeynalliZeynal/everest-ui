import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.045 18.508C2.682 17.145 2 16.463 2 15.616c0-.848.682-1.53 2.045-2.893l8.678-8.678C14.087 2.682 14.768 2 15.616 2s1.529.682 2.892 2.045l1.447 1.447C21.318 6.855 22 7.537 22 8.384s-.682 1.53-2.045 2.893l-8.678 8.678C9.913 21.318 9.23 22 8.384 22s-1.529-.682-2.892-2.045z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.464 8.464 9.88 9.88M12.707 4.222l1.414 1.414M4.222 12.707l1.414 1.414M6.343 10.586l2.121 2.121M10.586 6.343l2.121 2.122"
    />
  </svg>
);
export default SvgRuler;
