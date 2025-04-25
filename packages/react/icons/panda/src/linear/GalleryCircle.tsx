import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={15} cy={9} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 17.6 17.776 15.6a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.47 1.286"
    />
    <circle cx={12} cy={12} r={10} stroke="#000" strokeWidth={1.5} />
  </svg>
);
export default SvgGalleryCircle;
