import React from 'react'

import { CalculatorInfoCard } from '../../components'

const ABSI = () => {
  return (
    <div>
      <CalculatorInfoCard 
        title={'A Body Shape Index'}
        text={"The ABSI calculator estimates the risk of premature mortality based on the A Body Shape Index (ABSI). The ABSI formula requires only a few variables: age, sex, body height, body mass, and waist circumference."}
      />
    </div>
  )
}

export default ABSI