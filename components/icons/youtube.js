import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M58.764 15.597a7.517 7.517 0 00-5.288-5.288C48.78 9.024 29.999 9.024 29.999 9.024s-18.78 0-23.475 1.236c-2.52.691-4.597 2.767-5.288 5.337C0 20.292 0 30.028 0 30.028s0 9.786 1.236 14.432a7.518 7.518 0 005.288 5.288C11.268 51.033 30 51.033 30 51.033s18.78 0 23.476-1.236a7.517 7.517 0 005.288-5.288C60 39.814 60 30.078 60 30.078s.05-9.786-1.236-14.481z"
          fill="red"
        />
        <path d="M24.02 39.023l15.617-8.995-15.617-8.995v17.99z" fill="#fff" />
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
