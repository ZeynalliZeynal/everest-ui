import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 18.844c0 1.19-1.007 2.156-2.25 2.156S10 20.035 10 18.844s1.007-2.157 2.25-2.157 2.25.966 2.25 2.157Zm0 0v-6.469m7.5 4.313c0 1.19-1.007 2.156-2.25 2.156s-2.25-.966-2.25-2.157c0-1.19 1.007-2.156 2.25-2.156s2.25.966 2.25 2.156Zm0 0v-6.47m-7.5 2.157 7.5-2.156m-7.5 2.156v-2.51c0-.641.444-1.205 1.088-1.382l1.537-.42 3.441-1.015c.713-.21 1.434.3 1.434 1.014v2.157M18 3H2m8 6H2m6 6H2m4 6H2"
    />
  </svg>
);
export default SvgMusicFilter;
