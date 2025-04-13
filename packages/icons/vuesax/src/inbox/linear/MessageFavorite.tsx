import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageFavorite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8v5q0 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8q0-6 6-6h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.2 4.62c-.33-.99.06-2.21 1.14-2.55.56-.17 1.26-.03 1.66.5.38-.55 1.1-.67 1.66-.5 1.08.33 1.47 1.56 1.14 2.55C20.29 6.19 18.5 7 18 7s-2.27-.8-2.8-2.38"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.997 11h.008M11.996 11h.008M7.995 11h.008"
    />
  </svg>
);
export default SvgMessageFavorite;
