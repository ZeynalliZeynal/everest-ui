import * as React from "react";
import type { SVGProps } from "react";
const SvgPen2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M4 22h16" />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m13.888 3.663.742-.742a3.146 3.146 0 1 1 4.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966 2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13-6.817 6.817c-.462.462-.692.692-.947.891q-.451.352-.969.599c-.291.139-.601.242-1.22.448l-2.626.876m0 0-.641.213a.848.848 0 0 1-1.073-1.073l.213-.641m1.501 1.5-1.5-1.5"
    />
  </svg>
);
export default SvgPen2;
