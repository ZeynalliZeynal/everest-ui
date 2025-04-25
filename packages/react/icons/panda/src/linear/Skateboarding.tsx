import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboarding = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17"
    />
    <circle cx={7} cy={21} r={1} fill="#000" />
    <circle cx={17} cy={21} r={1} fill="#000" />
    <circle cx={19} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.343-2.423l-.15-.095c-.097-.06-.146-.09-.177-.112a2 2 0 0 1-.184-3.168c.029-.025.068-.056.145-.118l.446-.357a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.25 8.25 0 0 0 4 0"
    />
  </svg>
);
export default SvgSkateboarding;
