import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
      <rect y={10} width={60} height={40} rx={3} fill="#FC0" />
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M56.923 10H3.077A3.086 3.086 0 000 13.077v33.846A3.086 3.086 0 003.077 50h53.846A3.086 3.086 0 0060 46.923V13.077A3.086 3.086 0 0056.923 10zm-1.155 2.307l-23.998 18c-.431.33-1.094.535-1.77.532-.676.003-1.338-.203-1.77-.531l-23.998-18h51.536zM42.95 31.495L56.026 47.65c.013.017.03.029.043.044H3.931c.014-.016.03-.027.043-.044L17.05 31.495a1.154 1.154 0 00-1.794-1.452L2.307 46.039V13.75l24.539 18.405c.922.687 2.045.989 3.154.992 1.107-.002 2.23-.305 3.154-.992L57.692 13.75v32.289L44.743 30.043a1.153 1.153 0 10-1.794 1.452z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h60v60H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
