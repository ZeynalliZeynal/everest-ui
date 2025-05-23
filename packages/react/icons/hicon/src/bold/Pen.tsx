import * as React from "react";
import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.149 3.108c1.453-.111 2.042-.15 2.567-.052a4.25 4.25 0 0 1 2.247 1.195c.375.38.672.89 1.392 2.158l1.067 1.878c.634 1.116.888 1.571 1.02 2.008a4.25 4.25 0 0 1-.472 3.493c-.243.386-.608.758-1.516 1.666s-1.28 1.273-1.666 1.516a4.25 4.25 0 0 1-3.493.472c-.437-.132-.892-.386-2.008-1.02l-1.878-1.067c-1.268-.72-1.777-1.017-2.158-1.392a4.25 4.25 0 0 1-1.195-2.247c-.098-.525-.06-1.114.052-2.567.148-1.925.218-2.705.482-3.323q.173-.401.419-.756l5.37 5.371q.06.06.13.104a1.713 1.713 0 1 0 1.035-1.036.8.8 0 0 0-.104-.128L5.07 4.01q.353-.247.756-.42c.618-.264 1.398-.334 3.323-.482M18.97 12.845a5.8 5.8 0 0 1-.73 1.742c-.345.547-.841 1.043-1.651 1.853l-.149.149c-.81.81-1.306 1.306-1.853 1.65a5.8 5.8 0 0 1-1.743.73l1.234 1.235a4.331 4.331 0 1 0 6.125-6.125z"
    />
  </svg>
);
export default SvgPen;
