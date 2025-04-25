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
      d="M7.728 5.533a.75.75 0 0 0-1.056-1.066L5.231 5.896c-.536.531-.983.974-1.302 1.371-.335.417-.59.854-.657 1.388a2.7 2.7 0 0 0 0 .69c.068.534.322.971.657 1.388.319.397.766.84 1.302 1.371l1.441 1.429a.75.75 0 1 0 1.056-1.066l-1.41-1.398c-.575-.57-.96-.953-1.22-1.275l-.034-.044H14a4.25 4.25 0 1 1 0 8.5H6a.75.75 0 0 0 0 1.5h8a5.75 5.75 0 1 0 0-11.5H5.064l.034-.044c.26-.322.645-.706 1.22-1.275z"
    />
  </svg>
);
export default SvgUndo;
