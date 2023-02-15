import React from 'react'

import './IBW.css'

import { CalculatorInfoCard } from '../../components'

const IBW = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'Ideal Body Weight'}
        text={'The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons.'}
      />
    </div>
  )
}

export default IBW