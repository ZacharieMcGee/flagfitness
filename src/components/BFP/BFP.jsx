import React from 'react'

import './BFP.css'
import { CalculatorInfoCard } from '../../components'

const BFP = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'Body Fat Percentage'}
        text={"Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function. Commonly also termed as Resting Metabolic Rate (RMR), which is the calories burned if you stayed in bed all day.  In either case, many utilize the basal metabolic rate formula to calculate their body's metabolism rate."}
      />
    </div>
  )
}

export default BFP