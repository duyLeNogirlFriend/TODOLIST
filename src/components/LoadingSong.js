import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { memo } from 'react'

const LoadingSong = () => {
  return (
        <RotatingLines
    strokeColor="grey"
    strokeWidth="2"
    animationDuration="0.75"
    width="20"
    visible={true}
/>
  )
}

export default memo(LoadingSong)