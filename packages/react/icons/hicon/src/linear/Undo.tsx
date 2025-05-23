import * as React from "react";
import type { SVGProps } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9v.75zm1 9.25a.75.75 0 0 0 0 1.5zm.672-4.717a.75.75 0 1 0 1.056-1.066zm-.882-1.93-.528.532zm0-5.205-.528-.533zm1.938-.865a.75.75 0 1 0-1.056-1.066zM4.016 9.25l-.744.094zm0-.502-.744-.095zM5 9v.75h9v-1.5H5zm9 10v-.75H6v1.5h8zm5-5h-.75A4.25 4.25 0 0 1 14 18.25v1.5A5.75 5.75 0 0 0 19.75 14zm-5-5v.75A4.25 4.25 0 0 1 18.25 14h1.5A5.75 5.75 0 0 0 14 8.25zm-6.8 4 .528-.533-1.41-1.398-.528.533-.528.533 1.41 1.398zM5.79 6.398l.528.533 1.41-1.398L7.2 5l-.528-.533-1.41 1.398zm0 5.204.528-.533c-.575-.57-.96-.953-1.22-1.275-.25-.311-.32-.492-.338-.638l-.744.095-.744.095c.068.533.322.97.657 1.387.325.404.783.857 1.333 1.402zm0-5.204-.528-.533c-.55.545-1.008.998-1.333 1.402-.335.417-.59.854-.657 1.388l.744.094.744.095c.019-.146.089-.327.338-.638.26-.322.645-.706 1.22-1.275zM4.016 9.25l.744-.095A1 1 0 0 1 4.75 9h-1.5q0 .172.022.345zM4 9h.75q0-.078.01-.156l-.744-.095-.744-.095Q3.25 8.827 3.25 9zm1 0v-.75H4v1.5h1z"
    />
  </svg>
);
export default SvgUndo;
