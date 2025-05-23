import * as React from "react";
import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M8.75 19a.75.75 0 0 0-1.5 0zm2.5-7v8h1.5v-8zm-2.5 8v-1h-1.5v1zM12 12.75h9.524v-1.5H12zm.476-11.5h-.952v1.5h.952zm-10 11.5H12v-1.5H2.476zM1.25 11.524c0 .677.549 1.226 1.226 1.226v-1.5c.151 0 .274.123.274.274zm21.5 0c0-5.674-4.6-10.274-10.274-10.274v1.5a8.774 8.774 0 0 1 8.774 8.774zm-1.226 1.226c.677 0 1.226-.549 1.226-1.226h-1.5c0-.151.123-.274.274-.274zM10 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 22.75zm1.524-20C5.85 1.25 1.25 5.85 1.25 11.524h1.5a8.774 8.774 0 0 1 8.774-8.774zM11.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 20z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.914 12C16.635 9.289 15.554 2 12 2S7.365 9.289 7.086 12"
    />
  </svg>
);
export default SvgUmbrella;
