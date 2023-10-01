import React from 'react'
import { Header, Slider, Section, NewRelease } from '../../components'
import * as apis from '../../apis'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const {chill,life_loving,remix,moody,popular_artist, top_100, album_hot, week_chart} = useSelector(state => state.app)
  
  return (
    <div className='overflow-y-auto '>   
      <Slider/>
      <NewRelease/>
      <Section data={chill}/>
      <Section data={life_loving}/>
      <Section data={remix}/>
      <Section data={moody}/>
      <Section data={popular_artist}/>
      <Section data={top_100}/>
      <Section data={album_hot}/>
    </div>
  )
}

export default Home