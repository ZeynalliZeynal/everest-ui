import * as React from "react";
import type { SVGProps } from "react";
const SvgSmsStar = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 11.5v4c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.48 2.82.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0"
    />
  </svg>
);
export default SvgSmsStar;
