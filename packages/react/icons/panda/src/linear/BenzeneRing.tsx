import * as React from "react";
import type { SVGProps } from "react";
const SvgBenzeneRing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362s.27 1.069.27 2.241v3.518c0 1.172 0 1.758-.27 2.241-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.985-.586-1.479-.88-1.75-1.362S5 14.931 5 13.759V10.24C5 9.07 5 8.483 5.27 8c.271-.483.765-.776 1.75-1.362z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8 2 6M19 8l3-2M5 16l-3 2"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12 16.884 4-2.384"
    />
  </svg>
);
export default SvgBenzeneRing;
