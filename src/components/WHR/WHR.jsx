import React from 'react'

import './WHR.css'


import { CalculatorInfoCard } from '../../components'

const WHR = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'Wasit-Hip Ratio'}
        text={"The waist-hip ratio or waist-to-hip ratio (WHR) is the dimensionless ratio of the circumference of the waist to that of the hips. This is calculated as waist measurement divided by hip measurement (W/H). For example, a person with a 30″ (76 cm) waist and 38″ (97 cm) hips has a waist-hip ratio of about 0.78. The WHR has been used as an indicator or measure of health, fertility, and the risk of developing serious health conditions. WHR correlates with perceptions of physical attractiveness."}
      />
    </div>
  )
}


export default WHR