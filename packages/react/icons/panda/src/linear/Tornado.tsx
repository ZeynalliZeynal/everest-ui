import * as React from "react";
import type { SVGProps } from "react";
const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3c-4.97 0-9 .672-9 1.5S7.03 6 12 6s9-.672 9-1.5c0-.52-1.588-.978-4-1.247M20 8s-2.791 1-8.276 1S4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5M16 16.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245M11.719 19.46q.575.039 1.281.04a9.3 9.3 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5"
    />
  </svg>
);
export default SvgTornado;
