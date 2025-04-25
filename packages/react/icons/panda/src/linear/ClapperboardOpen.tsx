import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zM4.001 11c-.483-1.806-.725-2.709-.517-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275.06.225.091.337.097.435a1 1 0 0 1-.555.962c-.088.044-.2.074-.425.134z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.7 2.941-.637 5.348M8.422 4.624l-.638 5.347"
    />
  </svg>
);
export default SvgClapperboardOpen;
