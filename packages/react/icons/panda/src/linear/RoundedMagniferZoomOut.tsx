import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={11} cy={11} r={9} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 11h4M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z"
    />
  </svg>
);
export default SvgRoundedMagniferZoomOut;
