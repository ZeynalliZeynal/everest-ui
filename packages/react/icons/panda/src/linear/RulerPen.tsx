import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 22c-1.886 0-2.828 0-3.414-.586S12 19.886 12 18V6c0-1.886 0-2.828.586-3.414S14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 5.8v-.95C2 3.276 3.343 2 5 2s3 1.276 3 2.85v.95m-6 0s1.125.95 3 .95 3-.95 3-.95m-6 0v9.734c0 .591 0 .887.038 1.177q.067.516.25 1.005c.102.275.241.54.52 1.069l1.18 2.242M8 5.8v9.734c0 .591 0 .887-.038 1.177q-.066.516-.25 1.005c-.102.275-.241.54-.52 1.069l-1.18 2.242m0 0-.288.548A.81.81 0 0 1 5 22a.81.81 0 0 1-.724-.425l-.288-.548m2.024 0H3.988"
    />
  </svg>
);
export default SvgRulerPen;
