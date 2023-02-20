import { useState } from 'react'

import './BMI.css'
import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const BMI = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const [bmi, setBmi] = useState(0)
  const [health, setHealth] = useState('')
  const [range, setRange] = useState('')

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchBMI = async () => {
     let { info:  {bmi, health, healthy_bmi_range } } = await fetchData('calc', `bmi?weight=${weight}&height=${height}`)
    
     setBmi(bmi)
     setHealth(health)
     setRange(healthy_bmi_range)
    }

    fetchBMI();
  }

  return (
    <div className='calculator-container'>

      <div className='calculator-container_info'>
        <CalculatorInfoCard 
          title={'body mass index'}
          text={"BMI stands for Body Mass Index, and it is a measure of body fat based on a person's height and weight. It is important because it provides an estimate of a person's overall health and risk of developing certain health problems. A high BMI can indicate a higher risk of obesity, heart disease, diabetes, and other chronic health conditions. Conversely, a low BMI may indicate malnourishment or an underlying medical condition. While BMI is not a perfect measure of health, it can be a useful screening tool to help identify potential health issues and guide further assessment and treatment."}
        />
      </div>

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

        <div className='calculator-results'>
          <p>BMI:</p>
          <p>{bmi}</p>
        </div>
        <div className='calculator-results'>
          <p>Health:</p>
          <p>{health}</p>
        </div>
        <div className='calculator-results'>
          <p>Healthy Range:</p>
          <p>{range}</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default BMI