import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassBig = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.1 4.1 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083 1.221 1.797-.038 4.943-2.554 11.236-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267Z"
    />
    <circle cx={12} cy={12} r={3} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgCompassBig;
