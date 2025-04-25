import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.213 10.174 2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.229 2.636l-.04.15c-.153.572-.23.858-.095 1.086l.007.012c.14.226.438.305 1.033.465 1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.186 1.385l-2.015 1.605c-1.302 1.037-1.953 1.556-2.363 1.3s-.197-1.05.229-2.636l.04-.15c.153-.572.23-.858.095-1.086l-.007-.012c-.14-.226-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.376.34-.712 1.186-1.385Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
  </svg>
);
export default SvgBoltCircle;
