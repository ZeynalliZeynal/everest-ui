import * as React from "react";
import type { SVGProps } from "react";
const SvgSad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.666 17.345c.269-.519.829-1.179 1.606-1.707.77-.524 1.709-.888 2.728-.888s1.958.364 2.728.888c.777.528 1.337 1.188 1.606 1.707a.75.75 0 1 0 1.332-.69c-.398-.767-1.138-1.607-2.094-2.257-.963-.655-2.191-1.148-3.572-1.148-1.38 0-2.609.493-3.572 1.148-.956.65-1.696 1.49-2.094 2.257a.75.75 0 1 0 1.332.69"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgSad;
