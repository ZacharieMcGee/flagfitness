import { useState } from 'react'

import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const WHR = () => {
  const [waist, setWaist] = useState(0)
  const [hip, setHip] = useState(0)
  const [gender, setGender] = useState('male')

  const [whr, setWhr] = useState('')
  const [bodyShape, setBodyShape] = useState('')
  const [riskLevel, setRiskLevel] = useState('')

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchWHR = async () => {
     let { info:  {whr, bodyShape, riskLevel } } = await fetchData('calc', `whr?waist=${waist}&hip=${hip}&gender=${gender}`)
    
     setWhr(whr)
     setBodyShape(bodyShape)
     setRiskLevel(riskLevel)
    }

    fetchWHR();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
        <CalculatorInfoCard 
          title={'Waist-Hip Ratio'}
          text={"A Body Shape Index (ABSI) is a measure of body fat distribution that takes into account both height and waist circumference. It is calculated by dividing waist circumference by the square root of height and adjusting for weight. ABSI is important because it has been found to be a strong predictor of mortality and chronic diseases, even after accounting for other risk factors such as age, gender, and BMI."}
        />
      </div>

      <div className='calculator'>
        <form onSubmit={calcSubmitHandler}>
          <label htmlFor='waist'>WAIST (CM)</label>
          <input 
            name='waist' 
            type='number'  
            value={waist}
            onChange={ e => setWaist(e.target.value) }
            required
          />

          <label htmlFor='hip'>HIP (CM)</label>
          <input 
            name='hip' 
            type='number'  
            value={hip}
            onChange={ e => setHip(e.target.value) }
            required
          />

          <label htmlFor='gender'>GENDER</label>
          <select
            name='gender' 
            type='number'  
            value={gender}
            onChange={ e => setGender(e.target.value) }
            required
          >
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>
          
          <button type='submit'>CALCULATE</button>
        </form>

        <div className='calculator-results'>
          <p>WHR:</p>
          <p>{whr}</p>
        </div>
        <div className='calculator-results'>
          <p>Body Shape:</p>
          <p>{bodyShape}</p>
        </div>
        <div className='calculator-results'>
          <p>Risk Level:</p>
          <p>{riskLevel}</p>
        </div>
        
        
      </div>
    </div>
  )
}


export default WHR