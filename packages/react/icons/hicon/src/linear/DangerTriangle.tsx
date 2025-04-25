import * as React from "react";
import type { SVGProps } from "react";
const SvgDangerTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 7v6m0 8c-4.547 0-6.82 0-8.135-.955a5 5 0 0 1-2.034-3.522c-.17-1.616.967-3.585 3.24-7.523s3.411-5.907 4.895-6.568a5 5 0 0 1 4.068 0c1.484.661 2.62 2.63 4.894 6.568s3.41 5.907 3.24 7.523a5 5 0 0 1-2.033 3.522C18.821 21 16.547 21 12 21Z"
    />
    <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgDangerTriangle;
