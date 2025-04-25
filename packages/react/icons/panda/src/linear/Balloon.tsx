import * as React from "react";
import type { SVGProps } from "react";
const SvgBalloon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68C4.595 13.954 7.859 17.964 12 18Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022.654-.128 1.051-.772.858-1.39-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022-.654-.128-1.051-.772-.858-1.39.033-.105.109-.242.261-.515M12 20.35v2.15"
    />
  </svg>
);
export default SvgBalloon;
