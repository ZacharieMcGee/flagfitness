import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import './HorScrollbar.css'
import { ExerciseCard } from '../../components'

const HorScrollbar = ({ title, exercises }) => {
  // console.log(exercises)

  return (
    <div className='horscrollbar'>
      <h2>{title}</h2>
      <div className='horscrollbar-flex'>
        <div 
          className='horscrollbar-left'
          onClick={() => {}}
        >
          <AiOutlineLeft />
        </div>
        <div className='horscrollbar-items'>
          { 
            exercises?.slice(0, 10)?.map(item => <ExerciseCard exercise={item} key={item.id} />)
          }
        </div>
        <div 
          className='horscrollbar-right'
          onClick={() => {}}
        >
          <AiOutlineRight />
        </div>
      </div>
      
    </div>
  )
}

export default HorScrollbar