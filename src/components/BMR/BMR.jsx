import { useState } from 'react'

import './BMR.css'
import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const BMR = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('male')

  const [bmr, setBmr] = useState(0)

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchBMR = async () => {
     let { info:  { bmr }} = await fetchData('calc', `bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`)
    
     setBmr(bmr)
    }

    fetchBMR();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
        <CalculatorInfoCard 
          title={'Basal Metabolic Rate'}
          text={'The scientific term for body fat is "adipose tissue." Adipose tissue serves a number of important functions. Its primary purpose is to store lipids from which the body creates energy. In addition, it secretes a number of important hormones, and provides the body with some cushioning as well as insulation.'}
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

          <label htmlFor='age'>AGE</label>
          <input 
            name='age' 
            type='number'  
            value={age}
            onChange={ e => setAge(e.target.value) }
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
          <p>BMR:</p>
          <p>{bmr}</p>
        </div>
      </div>
    </div>
  )
}

export default BMR