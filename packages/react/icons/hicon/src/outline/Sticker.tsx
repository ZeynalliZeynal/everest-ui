import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75q1.104-.002 2.15-.215a10.76 10.76 0 0 0 8.385-8.386q.213-1.044.215-2.149c0-5.937-4.813-10.75-10.75-10.75M2.75 12a9.25 9.25 0 1 1 18.416 1.25c-1.029.003-1.871.015-2.575.076-.851.074-1.56.223-2.201.55a5.75 5.75 0 0 0-2.513 2.514c-.328.642-.477 1.35-.551 2.201-.061.704-.073 1.546-.075 2.575A9.25 9.25 0 0 1 2.75 12m15.97 2.82c.569-.049 1.25-.064 2.114-.068a9.27 9.27 0 0 1-6.082 6.082c.004-.864.02-1.545.068-2.113.066-.756.189-1.25.393-1.65a4.25 4.25 0 0 1 1.858-1.858c.4-.204.894-.327 1.65-.393"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSticker;
