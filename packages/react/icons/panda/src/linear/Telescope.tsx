import * as React from "react";
import type { SVGProps } from "react";
const SvgTelescope = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.243 6.184-3.684 2.09c-.831.472-1.247.708-1.355 1.112s.134.816.618 1.64l.595 1.015c.472.802.707 1.203 1.103 1.309s.8-.124 1.61-.583l3.735-2.12m-7.809-.924-3.632 2.061c-.857.486-1.285.73-1.397 1.142s.135.833.629 1.675c.494.841.741 1.262 1.161 1.373s.848-.133 1.704-.619l3.633-2.062m12.19-8.108-1.049-1.786c-.494-.841-.741-1.262-1.16-1.373-.42-.11-.848.133-1.705.619l-3.683 2.09c-.832.472-1.247.708-1.355 1.112-.109.405.133.817.617 1.64l1.12 1.908c.471.802.707 1.203 1.103 1.309s.8-.124 1.609-.583l3.735-2.12c.857-.486 1.285-.729 1.397-1.141s-.135-.833-.629-1.675Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12 12.5 4 9.5M12 12.5 8 22"
    />
  </svg>
);
export default SvgTelescope;
