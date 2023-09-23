import React from 'react'
import { useNavigate } from 'react-router-dom'


const SectionItem = ({data}) => {
  const navigate = useNavigate()

  return (
    <div className='h-auto w-full ' 
    onClick={() => {
      navigate(data.link?.split('.')[0])
    }}
   >
        <img src={data.thumbnail} className='rounded-lg'/>
        {/* <h2 className='font-bold text-[20px]'> {data.title}</h2> */}
        <p className='text-gray-500 text-[15px] font-[20px] pt-3'>{`${data.sortDescription?.slice(0,60)}...`}</p>
    </div>
  )
}

export default SectionItem