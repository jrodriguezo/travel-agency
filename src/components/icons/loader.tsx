import * as React from "react";

const Loader: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <circle cx="35" cy="100" r="15" stroke="#000" strokeWidth="15">
      <animate
        attributeName="cx"
        begin="0"
        calcMode="spline"
        dur="2"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        values="35;165;165;35;35"
      ></animate>
    </circle>
    <circle
      cx="35"
      cy="100"
      r="15"
      stroke="#000"
      strokeWidth="15"
      opacity="0.8"
    >
      <animate
        attributeName="cx"
        begin="0.05"
        calcMode="spline"
        dur="2"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        values="35;165;165;35;35"
      ></animate>
    </circle>
    <circle
      cx="35"
      cy="100"
      r="15"
      stroke="#000"
      strokeWidth="15"
      opacity="0.6"
    >
      <animate
        attributeName="cx"
        begin="0.1"
        calcMode="spline"
        dur="2"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        values="35;165;165;35;35"
      ></animate>
    </circle>
    <circle
      cx="35"
      cy="100"
      r="15"
      stroke="#000"
      strokeWidth="15"
      opacity="0.4"
    >
      <animate
        attributeName="cx"
        begin="0.15"
        calcMode="spline"
        dur="2"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        values="35;165;165;35;35"
      ></animate>
    </circle>
    <circle
      cx="35"
      cy="100"
      r="15"
      stroke="#000"
      strokeWidth="15"
      opacity="0.2"
    >
      <animate
        attributeName="cx"
        begin="0.2"
        calcMode="spline"
        dur="2"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        values="35;165;165;35;35"
      ></animate>
    </circle>
  </svg>
);

export default Loader;
