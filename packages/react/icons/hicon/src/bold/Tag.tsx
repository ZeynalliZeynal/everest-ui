import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.556 7.956a1 1 0 1 0 1.732 1 1 1 0 0 0-1.732-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.812 2.107c1.724-.544 2.775-.875 3.72-.856a5.75 5.75 0 0 1 4.807 2.775c.489.81.727 1.885 1.118 3.65l.05.23c.154.691.248 1.116.278 1.543a5.75 5.75 0 0 1-.416 2.584c-.162.396-.385.77-.748 1.378l-2.567 4.306c-.817 1.37-1.316 2.207-1.949 2.783a5.75 5.75 0 0 1-5.173 1.347c-.833-.194-1.676-.681-3.058-1.48l-.262-.15c-1.382-.798-2.226-1.285-2.81-1.91a5.75 5.75 0 0 1-1.42-5.153c.182-.836.657-1.686 1.436-3.08L6.263 5.7c.346-.618.558-.998.82-1.337a5.75 5.75 0 0 1 2.03-1.653c.384-.187.8-.318 1.474-.53zm.445 5.1a2.5 2.5 0 1 0 4.33 2.5 2.5 2.5 0 0 0-4.33-2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
