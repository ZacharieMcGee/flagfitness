import React from 'react'
import './ExerciseCardSkeleton.css'

const ExerciseCardSkeleton = () => {
  return (
    <div className='exercise-card_skeleton'>
      <div className='exercise-card_skeleton-img'></div>
      <p></p>
      <div className='exercise-card_skeleton-chips'>
        <div className='exercise-card_skeleton-chips_chip'></div>
        <div className='exercise-card_skeleton-chips_chip'></div>
      </div>
    </div>
  )
}

export default ExerciseCardSkeleton 