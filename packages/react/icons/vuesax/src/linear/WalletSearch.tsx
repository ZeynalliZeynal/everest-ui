import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletSearch = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7c-.3 0-.5 0-.8.1C3.6 7.4 2 9.3 2 12v1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.8 7H7c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8L10 3c1.4-1.4 3.6-1.4 5 0l1.8 1.8c.6.6.9 1.4 1 2.2M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3M5.802 21.4c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2 1.43 3.2 3.2 3.2M2 22l1-1"
    />
  </svg>
);
export default SvgWalletSearch;
