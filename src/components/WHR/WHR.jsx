import { useState } from 'react'

import './WHR.css'
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
          text={"The waist-hip ratio or waist-to-hip ratio (WHR) is the dimensionless ratio of the circumference of the waist to that of the hips. This is calculated as waist measurement divided by hip measurement (W/H). For example, a person with a 30″ (76 cm) waist and 38″ (97 cm) hips has a waist-hip ratio of about 0.78. The WHR has been used as an indicator or measure of health, fertility, and the risk of developing serious health conditions. WHR correlates with perceptions of physical attractiveness."}
        />
      </div>

      <div className='calculator'>
        <form onSubmit={calcSubmitHandler}>
          <label htmlFor='waist'>WAIST</label>
          <input 
            name='waist' 
            type='number'  
            value={waist}
            onChange={ e => setWaist(e.target.value) }
            required
          />

          <label htmlFor='hip'>HIP</label>
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