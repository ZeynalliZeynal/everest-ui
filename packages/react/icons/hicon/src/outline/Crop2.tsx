import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.568 2a.75.75 0 1 0-1.5 0v1.068H2a.75.75 0 0 0 0 1.5h1.068v5.671c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.894 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h5.67V22a.75.75 0 0 0 1.5 0v-1.068H22a.75.75 0 0 0 0-1.5h-1.068V13.76c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.894-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19H4.57zm.177 13.568c-.175-1.3-.177-3.008-.177-5.386V4.568h5.614c2.378 0 4.086.002 5.386.177 1.279.171 2.05.498 2.619 1.068s.897 1.34 1.068 2.619c.175 1.3.177 3.008.177 5.386v5.614h-5.614c-2.378 0-4.086-.002-5.386-.177-1.279-.171-2.05-.498-2.619-1.068s-.897-1.34-1.068-2.619"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrop2;
