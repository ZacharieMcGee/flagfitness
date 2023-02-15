import React from 'react'

import './BMR.css'
import { CalculatorInfoCard } from '../../components'

const BMR = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'Basal Metabolic Rate'}
        text={'The scientific term for body fat is "adipose tissue." Adipose tissue serves a number of important functions. Its primary purpose is to store lipids from which the body creates energy. In addition, it secretes a number of important hormones, and provides the body with some cushioning as well as insulation.'}
      />
      <div className='calculator'>
        <form onSubmit={calcSubmitHandler}>
          <label htmlFor='weight'>WEIGHT</label>
          <input 
            name='weight' 
            type='number'  
            value={weight}
            onChange={ e => setWeight(e.target.value) }
            required
          />

          <label htmlFor='height'>HEIGHT</label>
          <input 
            name='height' 
            type='number'  
            value={height}
            onChange={ e => setHeight(e.target.value) }
            required
          />
          <button type='submit'>CALCULATE</button>
        </form>

        {bmi}
        {health}
        {range}
      </div>
    </div>
  )
}

export default BMR