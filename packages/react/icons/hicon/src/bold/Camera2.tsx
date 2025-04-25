import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25.25a2.5 2.5 0 0 0-2.5 2.5v.179a.82.82 0 0 1-.821.821A4.68 4.68 0 0 0 1.25 8.429v4.61c0 1.604 0 2.86.095 3.865.098 1.023.3 1.861.752 2.6a5.75 5.75 0 0 0 1.899 1.899c.738.452 1.577.654 2.6.752 1.004.095 2.261.095 3.865.095h3.078c1.604 0 2.86 0 3.865-.096 1.023-.097 1.861-.299 2.6-.751a5.75 5.75 0 0 0 1.899-1.899c.452-.739.654-1.577.752-2.6.095-1.004.095-2.261.095-3.865V8.43a4.68 4.68 0 0 0-4.679-4.679.82.82 0 0 1-.821-.821V2.75a2.5 2.5 0 0 0-2.5-2.5zm-2 12.25a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M18 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera2;
