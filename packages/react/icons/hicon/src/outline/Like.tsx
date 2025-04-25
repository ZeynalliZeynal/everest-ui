import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M12 21.25a4.74 4.74 0 0 1-3.642-1.7A3.25 3.25 0 0 1 2.25 18v-8a3.25 3.25 0 0 1 6.119-1.529L8.659 8l2.278-3.702a2.2 2.2 0 0 1 4.047 1.487l-.243 1.58a2.07 2.07 0 0 0 2.047 2.386h.69c3.095 0 5.107 3.257 3.723 6.024l-1.148 2.298a5.75 5.75 0 0 1-5.143 3.178zm.214-16.167a.7.7 0 0 1 1.288.473l-.243 1.58a3.57 3.57 0 0 0 3.53 4.114h.689c1.98 0 3.267 2.083 2.382 3.854L18.71 17.4a4.25 4.25 0 0 1-3.801 2.349H12a3.25 3.25 0 0 1-3.25-3.25v-3.434c0-1.176.004-1.648.106-2.096q.05-.214.12-.421c.147-.435.392-.84 1.008-1.841zM5.5 8.25c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 1 1-3.5 0v-8c0-.966.784-1.75 1.75-1.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLike;
