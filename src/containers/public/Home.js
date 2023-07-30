import React from 'react'
import { Header, Slider } from '../../components'
import * as apis from '../../apis'
import { useEffect } from 'react'

const Home = () => {

  return (
    <div className='overflow-y-auto '>
      <div className='h-[70px] px-[60px] flex items-center'>
        <Header/>       
      </div>
      <Slider/>
    </div>
  )
}

export default Home