import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674c.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9v3.077L14 14"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.049 2.692l-.082.368"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m16.778 5.5-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692l-.08.368M16.778 18.5l-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44s-.715-1.19-1.049-2.692l-.082-.368"
    />
  </svg>
);
export default SvgWatchSquare;
