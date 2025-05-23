import * as React from "react";
import type { SVGProps } from "react";
const SvgEarth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M6 4.71c.78.711 2.388 2.653 2.575 4.737C8.75 11.396 10.035 12.98 12 13c.755.008 1.518-.537 1.516-1.292 0-.233-.039-.472-.099-.692A1.41 1.41 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278.421-.303.806-.623.975-.88.469-.71.937-2.131.703-2.842M22 13c-.33.931-.562 3.375-4.282 3.414 0 0-3.293 0-4.281 1.862-.791 1.49-.33 3.103 0 3.724"
    />
  </svg>
);
export default SvgEarth;
