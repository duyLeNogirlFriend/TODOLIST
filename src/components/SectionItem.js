import React from 'react'

const SectionItem = ({data}) => {
  console.log(data.title)
  return (
    <div>
      hahah
        <img src={data.thumbnail}/>
    </div>
  )
}

export default SectionItem