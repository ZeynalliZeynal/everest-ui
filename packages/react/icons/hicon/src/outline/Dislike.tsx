import * as React from "react";
import type { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M5.5 3.25A3.25 3.25 0 0 0 2.25 6.5v8a3.25 3.25 0 0 0 6.119 1.529l.29.472 2.278 3.702a2.2 2.2 0 0 0 4.047-1.487l-.243-1.58a2.07 2.07 0 0 1 2.047-2.386h.69c3.095 0 5.107-3.257 3.723-6.024l-1.148-2.297A5.75 5.75 0 0 0 14.91 3.25H12a4.74 4.74 0 0 0-3.642 1.7A3.25 3.25 0 0 0 5.5 3.25M7.25 6.5a1.75 1.75 0 1 0-3.5 0v8a1.75 1.75 0 1 0 3.5 0zm1.606 7.03c-.102-.448-.106-.92-.106-2.096V8A3.25 3.25 0 0 1 12 4.75h2.91c1.61 0 3.081.91 3.801 2.35l1.149 2.296c.885 1.77-.402 3.854-2.382 3.854h-.69a3.57 3.57 0 0 0-3.53 4.114l.244 1.58a.7.7 0 0 1-1.288.473l-2.23-3.625c-.616-1-.86-1.406-1.008-1.84a4 4 0 0 1-.12-.422"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDislike;
