import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M2 21h20" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M7.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 15.902 5 15.435 5 14.5v-9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 3 6.565 3 7.5 3s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 4.098 10 4.565 10 5.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 17 8.435 17 7.5 17ZM16.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201Z"
    />
  </svg>
);
export default SvgAlignBottom;
