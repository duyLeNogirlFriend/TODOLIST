import React from 'react'
import { memo } from 'react'
import { Audio } from 'react-loader-spinner'

const AudioLoader = () => {
  return (
    <Audio
  height="40"
  width="40"
  color="#fff"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
    />
  )
}
export default memo(AudioLoader)
