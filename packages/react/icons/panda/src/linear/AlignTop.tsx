import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M2 3h20" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7ZM16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"
    />
  </svg>
);
export default SvgAlignTop;
