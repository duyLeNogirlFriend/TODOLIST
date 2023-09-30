import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
const PageLoader = () => {
  return (
    <MutatingDots 
    height="100"
    width="100"
    color="#0e8080"
    secondaryColor= '#0e8080'
    radius='9.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />
  )
}

export default PageLoader