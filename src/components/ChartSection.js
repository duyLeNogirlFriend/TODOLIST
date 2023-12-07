import React, {memo, useState, useEffect} from 'react'
import bg from '../assets/bg.jpg'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js'



export const ChartSection = () => {
    const [data, setData] = useState(null)
    return (
        <div className='px-[60px] mt-12 border border-red-500 relative'>
            <img src={bg} className='w-full object-contain rounded-md ' ></img>
            <div className='absolute top-0 left-[60px] right-[60px] bottom-0 bg-gradient-to-r from-cyan-500 to-[#0e8080] opacity-[80%]'></div>
            <div className='absolute top-0 left-[60px] right-[60px] bottom-0 p-5'>
                <h3 className='text-2xl font-bold text-white'>
                    #zingchart
                </h3>
                <div className='flex'> 
                    <div className='flex-4 border border-red-500'>Rank</div>
                    <div className='flex-6 border border-yellow-500'>Chart</div>
                        {/* <Line data={data}/>  */}
                </div>
            </div>
        </div>
  )
}
export default memo(ChartSection)
