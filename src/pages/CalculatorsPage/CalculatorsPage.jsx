import { useState } from 'react'

import { IoBodySharp, IoBedSharp, IoScaleSharp, IoHeartSharp } from 'react-icons/io5'
import { FaPercentage } from 'react-icons/fa'
import { BiHourglass } from 'react-icons/bi'
import { SlEnergy } from 'react-icons/sl'

import './CalculatorsPage.css'
// import calculators from '../../utils/constants.js'
import { BMI, BFP, BMR, IBW, WHR, ABSI, TDEE } from '../../components'

const CalculatorsPage = () => {

  const [calcToShow, setCalcToShow] = useState('body mass index')

  const calculators = [
    {
      name: 'body mass index',
      icon: <IoBodySharp />,
    },
    {
      name: 'basal metabolic rate',
      icon: <IoBedSharp />,
    },
    {
      name: 'body fat percentage',
      icon: <FaPercentage />,
    },
    {
      name: 'ideal body weight',
      icon: <IoScaleSharp />,
    },
    {
      name: 'waist-hip ratio',
      icon: <BiHourglass />,
    },
    {
      name: 'a body shape index',
      icon: <IoHeartSharp />,
    },
    {
      name: 'total daily energy expenditure',
      icon: <SlEnergy />,
    },
  ]

  const showCalculatorHandler = (calc) => {
    setCalcToShow(calc.name);
    window.scrollTo({top: 1200, behavior: 'smooth'})
  }

  return (
    <div className='calculators-page'>
      <div className='calculator-page_selection'>
        <h1>Calculators</h1>
        <div className='calculator-page_selection-btns'>
          {
            calculators.map((calc, idx) => (
              <button 
                onClick={() => showCalculatorHandler(calc)}
                key={idx}
              > 
              <div className='calculator-page_selection-btns-btn_icon'>
                {calc.icon}
              </div>
                {calc.name}
              </button>
            ))
          }
        </div>
      </div>

      {/* <div className='calculator-page_calc'> */}
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
       
      {/* </div> */}
    </div>
  )
}

export default CalculatorsPage