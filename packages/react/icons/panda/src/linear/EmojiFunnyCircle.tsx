import * as React from "react";
import type { SVGProps } from "react";
const SvgEmojiFunnyCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2"
    />
    <ellipse
      cx={14.509}
      cy={9.775}
      fill="#000"
      rx={1}
      ry={1.5}
      transform="rotate(-15 14.51 9.775)"
    />
    <ellipse
      cx={8.714}
      cy={11.328}
      fill="#000"
      rx={1}
      ry={1.5}
      transform="rotate(-15 8.714 11.328)"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.936"
    />
  </svg>
);
export default SvgEmojiFunnyCircle;
