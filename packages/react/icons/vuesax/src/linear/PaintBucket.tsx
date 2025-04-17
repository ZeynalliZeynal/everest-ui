import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintBucket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#paint-bucket_svg__a)"
    >
      <path d="m3.77 15.56 3.46 3.46c2.43 2.43 3.26 2.39 5.66 0l5.57-5.57c1.94-1.94 2.43-3.23 0-5.66L15 4.33c-2.59-2.59-3.72-1.94-5.66 0L3.77 9.9c-2.39 2.4-2.59 3.07 0 5.66M19.2 16.79l-.66 1.09c-.93 1.55-.21 2.82 1.6 2.82s2.53-1.27 1.6-2.82l-.66-1.09c-.52-.86-1.37-.86-1.88 0" />
      <path d="M2 12.24a33.3 33.3 0 0 1 17-.13l.5.13" />
    </g>
    <defs>
      <clipPath id="paint-bucket_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaintBucket;
