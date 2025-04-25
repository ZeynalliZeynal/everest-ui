import * as React from "react";
import type { SVGProps } from "react";
const SvgReport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.955 2.25h10.243a2.552 2.552 0 0 1 1.446 4.655l-.281.193a1.7 1.7 0 0 0 0 2.804l.28.193a2.552 2.552 0 0 1-1.445 4.655H5.75V21a.75.75 0 0 1-1.5 0V4.955c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m-1.205 11h11.448a1.052 1.052 0 0 0 .596-1.919l-.281-.193c-1.85-1.272-1.85-4.004 0-5.276l.281-.193a1.052 1.052 0 0 0-.596-1.919H7c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001-.001.003-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReport;
