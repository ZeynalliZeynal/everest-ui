import * as React from "react";
import type { SVGProps } from "react";
const SvgTickCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.559-12.5a.75.75 0 1 0-1.118-1l-3.369 3.763c-.683.762-1.142 1.273-1.535 1.604-.375.314-.595.383-.787.383s-.412-.069-.787-.383c-.393-.33-.852-.842-1.535-1.604l-.87-.97a.75.75 0 0 0-1.117 1l.907 1.012c.635.71 1.166 1.303 1.65 1.71.513.43 1.066.735 1.752.735s1.239-.304 1.752-.735c.484-.407 1.015-1 1.65-1.71z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTickCircle;
