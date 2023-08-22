import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArrSlider } from '../utils/fn'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'


const Slider = () => {

    const {banner} = useSelector(state => state.app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickBanner = (item) => {      
        if(item?.type === 1){
            dispatch(actions.setCurrentSongId(item.encodeId))
            dispatch(actions.checkPlaying(true))
            dispatch(actions.setPlayList(null))
        } else if ( item?.type === 4){
            const albumPath = item?.link?.split('.')[0] //tach phan duoi html ra
            navigate(albumPath)
        } else {
            dispatch(actions.setPlayList(null))
        }
      
    }
     // ainimation for banner
     useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
        let min = 0
        let max = 2
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                // Hide or Show images
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            // Add animation by adding classnames
            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
        }, 10000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])

    
    return (
        <div className='flex gap-4 px-[60px] pt-8 cursor-pointer'>
            {banner?.map(item => (
                <img key={item.encodeId} 
                src={item.banner} 
                className='slider-item flex-1 object-contain w-[33%] rounded-[8px]'
                onClick={() => handleClickBanner(item)}
                />

            ))}
             
            
        </div>
    )
}

export default Slider