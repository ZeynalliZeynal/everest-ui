import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465 2.31-.924 3.465-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124-.197.493-.295.739-.465.932q-.065.075-.139.139c-.193.17-.44.268-.932.465Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
  </svg>
);
export default SvgCompassSquare;
