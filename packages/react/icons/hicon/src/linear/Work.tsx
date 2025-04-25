import * as React from "react";
import type { SVGProps } from "react";
const SvgWork = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M7 6a5 5 0 0 1 10 0v.012M7 6c.628-.012 1.333 0 2.16 0h5.68c.822 0 1.535 0 2.16.012M7 6c-1.719.033-2.782.167-3.608.623a5 5 0 0 0-2.161 2.365m0 0 3.577 3.577c3.333 3.333 5 5 7.07 5 2.072 0 3.738-1.667 7.072-5l3.632-3.633a.7.7 0 0 1 .118-.094m-21.469.15-.04.094c-.494 1.19-.323 2.727.018 5.801.28 2.517.42 3.775 1 4.725a5 5 0 0 0 2.145 1.92C5.362 22 6.628 22 9.16 22h5.68c2.532 0 3.798 0 4.806-.472a5 5 0 0 0 2.145-1.92c.58-.95.72-2.208 1-4.725.341-3.074.512-4.611.018-5.801a5 5 0 0 0-.11-.244M17 6.012c1.726.032 2.78.154 3.608.61A5 5 0 0 1 22.7 8.839"
    />
  </svg>
);
export default SvgWork;
