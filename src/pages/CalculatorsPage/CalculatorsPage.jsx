import { useState } from 'react'

import './CalculatorsPage.css'
import { BMI } from '../../components'

const CalculatorsPage = () => {

  const [calcToShow, setCalcToShow] = useState('body mass index')

  const calculators = [
    'body mass index',
    'basal metabolic rate',
    'body fat percentage',
    'ideal body weight',
    'waist-hip ratio',
    'a body shape index',
    'total daily energy expenditure'
  ]

  return (
    <div className='calculators-page'>
      <div className='calculator-page_selection'>
        <h1>Calculators</h1>
        {
          calculators.map(calc => {
            <button onClick={() => setCalcToShow(calc)}>
              {calc}
            </button>
          })
        }
      </div>

      <div className='calculator-page_calc'>
        {
          (() => {
            switch (calcToShow) {
              case 'body mass index': return (<BMI />)
              case 'basal metabolic rate': return (<BMR />) 
              case 'body fat percentage': return (<BFP /> )
              case 'ideal body weight': return (<IBW /> )
              case 'waist-hip ratio': return (<WHR /> )
              case 'a body shape index': return (<ABSI /> )
              case 'total daily energy expenditure': return (<TDEE /> )
              default: return (<BMI /> )
            }
          })()
        } 
       
      </div>
    </div>
  )
}

export default CalculatorsPage