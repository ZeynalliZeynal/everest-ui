import * as React from "react";
import type { SVGProps } from "react";
const SvgRunning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={18.5} cy={4.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564S5.31 20 4.157 20H3"
    />
    <path
      fill="#000"
      d="m5.436 8.82-.37-.651zm-1.807.164a.75.75 0 0 0 .742 1.305zm12.121 1.142-.624.415zm.063.093.624-.416zm-4.844-3.565.077-.746zm-.23-.018-.033.75zm-.584.038-.103-.743zM21 12.75a.75.75 0 0 0 0-1.5zM5.065 8.17l-1.436.815.742 1.305 1.435-.816zm10.061 2.372.063.094 1.248-.832-.063-.094zm-4.08-4.633a5 5 0 0 0-.273-.02l-.066 1.498q.073.002.184.014zm-5.24 3.565c2.319-1.317 3.386-1.91 4.451-2.056l-.205-1.486c-1.419.196-2.779.983-4.987 2.238zm13.335 3.277H21v-1.5h-1.86zm-8.368-6.863a4 4 0 0 0-.72.044l.204 1.486c.178-.025.322-.037.45-.031zm4.416 4.748a4.75 4.75 0 0 0 3.952 2.115v-1.5a3.25 3.25 0 0 1-2.704-1.447zm1.185-.926c-1.177-1.766-2.945-3.554-5.328-3.801L10.891 7.4c1.703.176 3.134 1.49 4.235 3.141z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14 8.5-2.22 2.776c-.837 1.045-1.255 1.568-1.322 2.137a2 2 0 0 0 .117.945c.205.536.738.94 1.806 1.749.813.616 1.219.923 1.494 1.326a3 3 0 0 1 .37.744c.155.462.155.972.155 1.992V22"
    />
  </svg>
);
export default SvgRunning;
