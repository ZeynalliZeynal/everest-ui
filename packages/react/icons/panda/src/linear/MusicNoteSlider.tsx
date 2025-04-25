import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNoteSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zM19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M13 14V8" />
    <circle cx={11} cy={14} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15 10a2 2 0 0 1-2-2"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5"
    />
  </svg>
);
export default SvgMusicNoteSlider;
