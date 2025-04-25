import * as React from "react";
import type { SVGProps } from "react";
const SvgRunningRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={18.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.4 22v-.9590000000000001a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.96 2.96 0 0 0-2.271.05l-.522.23c-.54.237-.809.356-1.072.487q-.658.327-1.275.725c-.247.16-.487.33-.967.672L4 9.636M9 17l-.26.311A7.47 7.47 0 0 1 3 20M16 12a8.25 8.25 0 0 0 4 0"
    />
  </svg>
);
export default SvgRunningRound;
