import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper3 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 16.507V10c0-1.886 0-2.828-.586-3.414S19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.33 2.33 0 0 0 22 16.507ZM18 16h-4"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028.079.065a3 3 0 0 0 2.069.66M18.5 2l-.523.523-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6"
    />
  </svg>
);
export default SvgDropper3;
