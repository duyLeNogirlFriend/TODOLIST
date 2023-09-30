import React from 'react'

const Button = ({text, style}) => {
  return (
    <button 
        type='button'
        className={style ? style : 'w-[100px] h-7 rounded-l-full rounded-r-full bg-main-500 hover:opacity-80'}
    >

    </button>
  )
}

export default Button