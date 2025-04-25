import * as React from "react";
import type { SVGProps } from "react";
const SvgFuel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 13.087c0-2.096 0-3.145.553-3.94.554-.795 1.524-1.14 3.465-1.833l8-2.855c3.636-1.297 5.454-1.946 6.718-1.031C22 4.342 22 6.305 22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 14c0-1.414 0-2.121.44-2.56C9.878 11 10.585 11 12 11s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C9 16.122 9 15.415 9 14Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m15 11 1-1M9 11l-1-1M15 17l1 1M9 17l-1 1M5 7.06c0-1.305 0-1.957.338-2.407q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18"
    />
  </svg>
);
export default SvgFuel;
