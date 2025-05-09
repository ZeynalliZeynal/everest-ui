import * as React from "react";
import type { SVGProps } from "react";
const SvgTreadmillRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={15} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 16v-.974c0-.118 0-.177-.002-.234a3 3 0 0 0-.992-2.117c-.042-.038-.087-.076-.178-.152-.134-.111-.2-.167-.252-.216a2 2 0 0 1-.125-2.75c.047-.055.108-.116.231-.239l.33-.33a1.904 1.904 0 0 0-2.356-2.96L4.5 8M3 15.5h.379c1.358 0 2.66-.54 3.621-1.5M12.5 10a4.74 4.74 0 0 0 3 0"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.489 22H3.087a1.087 1.087 0 0 1-.188-2.157l16.157-2.828A2.511 2.511 0 1 1 19.489 22Z"
    />
    <path
      fill="#000"
      d="m19.122 10.021-.742-.111zm3.025-2.286a.75.75 0 1 0-.294-1.47zm-3.405 9.876 1.121-7.478-1.483-.223-1.122 7.479zm1.121-7.478a2.88 2.88 0 0 1 2.284-2.398l-.294-1.47A4.38 4.38 0 0 0 18.38 9.91z"
    />
  </svg>
);
export default SvgTreadmillRound;
