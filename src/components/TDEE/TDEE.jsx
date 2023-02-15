import React from 'react'


import { CalculatorInfoCard } from '../../components'

const TDEE = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'Total Daily Energy Expenditure'}
        text={"Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier."}
      />
    </div>
  )
}

export default TDEE