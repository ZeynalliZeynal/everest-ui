import * as React from "react";
import type { SVGProps } from "react";
const SvgMeditation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 17 2.589-1.308A.75.75 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.937a6 6 0 0 1 1.986 0C15.863 9.566 18 12.08 18 15.02c0 .284.16.545.411.672L21 17"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.5 16-1.042 1.389-.063.084a2 2 0 0 1-1.034.686l-.102.026-1.485.371A2.34 2.34 0 0 0 4 20.83C4 21.476 4.524 22 5.171 22h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0 2-1.5m-2 1.5 2.54.952c.61.229.914.343 1.229.417q.245.057.493.09c.321.041.647.041 1.298.041h2.269c.647 0 1.171-.524 1.171-1.171a2.34 2.34 0 0 0-1.774-2.273l-1.485-.37-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16"
    />
  </svg>
);
export default SvgMeditation;
