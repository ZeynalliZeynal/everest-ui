import * as React from "react";
import type { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 20.5 2.673-4.729.345-.609m0 0c.316-.552.517-.881.718-1.128a5 5 0 0 1 6.775-.924c.34.242.72.62 1.474 1.375m-8.967.677L11.5 15c-1.195-.24-1.793-.359-2.342-.347a5 5 0 0 0-3.774 1.846c-.346.426-.62.971-1.164 2.062l-.11.22-.121.204m16.996-4.5C21 13.761 21 12.939 21 12c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939l.034.046m16.996-4.5c-.045 2.169-.224 3.469-.94 4.454a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.072-1.06M9 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </svg>
);
export default SvgImage;
