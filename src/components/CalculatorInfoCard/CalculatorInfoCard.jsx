import React from 'react'

import './CalculatorInfoCard.css'

const CalculatorInfoCard = ({ title, text }) => {
  return (
    <div className='calculator-info'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default CalculatorInfoCard