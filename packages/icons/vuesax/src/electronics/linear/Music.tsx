import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M5.48 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57s-3.57-1.63-3.57-3.57v-6.16C1.91 6.6 6.35 2.05 11.97 2.05S22.02 6.6 22.02 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57s-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.53 9.12h-.81a.61.61 0 0 0-.53.32l-.75 1.5c-.11.22-.42.22-.53 0l-1.84-3.67c-.11-.21-.41-.22-.52-.01l-.84 1.55c-.1.19-.3.31-.52.31h-.73"
    />
  </svg>
);
export default SvgMusic;
