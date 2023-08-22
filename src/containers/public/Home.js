import React from 'react'
import { Header, Slider, Section } from '../../components'
import * as apis from '../../apis'
import { useEffect } from 'react'

const Home = () => {

  return (
    <div className='overflow-y-auto '>   
      <Slider/>
      <Section/>
    </div>
  )
}

export default Home