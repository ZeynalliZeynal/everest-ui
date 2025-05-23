import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudBolt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52"
    />
    <path
      stroke="#000"
      strokeWidth={1.5}
      d="m9.626 17.454 1.148-1.554c.743-1.004 1.114-1.506 1.46-1.4s.346.722.346 1.954v.116c0 .444 0 .666.142.806l.008.007c.145.136.376.136.838.136.832 0 1.249 0 1.39.253l.006.012c.133.256-.108.582-.59 1.234l-1.148 1.554c-.743 1.004-1.114 1.506-1.46 1.4s-.346-.722-.346-1.954v-.116c0-.444 0-.666-.142-.806l-.008-.007c-.145-.136-.376-.136-.838-.136-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.582.59-1.234Z"
    />
  </svg>
);
export default SvgCloudBolt;
