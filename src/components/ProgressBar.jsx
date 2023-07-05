import React from 'react'

const ProgressBar = ({width = "w-full"}) => {
  return (
    <div className={` w-full bg-white h-3`}>
      <div className={`h-full ${width} bg-red`}></div>
    </div>
  )
}
export default ProgressBar;