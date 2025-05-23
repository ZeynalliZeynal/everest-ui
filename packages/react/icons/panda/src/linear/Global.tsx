import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 12c0 1.313-.104 2.614-.305 3.827-.2 1.213-.495 2.315-.867 3.244-.371.929-.812 1.665-1.297 2.168-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"
    />
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M2 12h20" />
  </svg>
);
export default SvgGlobal;
