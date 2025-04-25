import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketExpired = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.936 20H6.82a4.1 4.1 0 0 1-3.565-2.07l-.187-.329a1.17 1.17 0 0 1 .255-1.47l.525-.451c1.446-1.241.813-3.605-1.06-3.957l-.532-.1a1.41 1.41 0 0 1-1.103-1.022 4.444 4.444 0 0 1 3.142-5.443v0C5.703 4.78 6.407 4.592 7 4.808a2 2 0 0 1 .602.347c.483.405.672 1.109 1.049 2.517l.46 1.717.826 3.208m0 7.403h8.556a4.444 4.444 0 0 0 4.444-4.444c0-.544-.311-1.039-.801-1.274l-.487-.234c-1.719-.825-1.719-3.271 0-4.096l.487-.234c.49-.235.801-.73.801-1.274A4.444 4.444 0 0 0 18.492 4h-4.556c-1.885 0-2.828 0-3.414.586S9.936 6.114 9.936 8v5"
    />
    <path
      stroke="currentColor"
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.936 8v12"
    />
  </svg>
);
export default SvgTicketExpired;
