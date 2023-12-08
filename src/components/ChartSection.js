import React, {memo, useState, useEffect} from 'react'
import bg from '../assets/bg.jpg'
import { Line} from 'react-chartjs-2'
import { Chart,  registerables} from 'chart.js'
import { useSelector } from 'react-redux'


export const ChartSection = () => {
    const [data, setData] = useState(null)
    const {chart, rank} = useSelector(state => state.app)
    console.log("chart", chart, "rank", rank)
    useEffect(() => {
        const labels = chart?.times?.filter(item => +item.hour % 2 === 0)?.map(item => item.hour)
        const datasets = []
        if(chart?.items){
            for(let i = 0; i < 3; i++ ){
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]?.filter(item => +item % 2 === 0)?.map(item => item.counter) 
                })
            }
            setData({labels, datasets})
        }
    }, [chart])
    
    const options = {
        responsive: true,
        pointRadius: 0,
        aspectRatio: 4,
        scales: {
            y: {
                ticks: { display: false },
                grid: { borderDash: [1, 4], color: 'gray' }
            },
            x: {
                ticks: { color: 'blue' },
                grid: { color: 'transparent' }
            }
        },
        plugins: {
            legend: false
        }
    };
    Chart.register(...registerables);
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
                    <div className='flex-6 border border-yellow-500'> 
                        {data && <Line data={data} options={options}  />}
                    </div>
                       
                </div>
            </div>
        </div>
  )
}
export default memo(ChartSection)
