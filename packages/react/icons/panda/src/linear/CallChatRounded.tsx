import * as React from "react";
import type { SVGProps } from "react";
const SvgCallChatRounded = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 12a5 5 0 1 0-4.478-2.774.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m8.038 7.316.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z"
    />
  </svg>
);
export default SvgCallChatRounded;
