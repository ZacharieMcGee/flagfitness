import { useState } from 'react'

import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const TDEE = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [age, setAge] = useState(0)
  const [activityLevel, setActivityLevel] = useState('se')
  const [gender, setGender] = useState('male')

  const [tdee, setTdee] = useState('')

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchTDEE = async () => {
     let { info:  { tdee } } = await fetchData('calc', `tdee?weight=${weight}&height=${height}&activitylevel=${activityLevel}&age=${age}&gender=${gender}`)
    
     setTdee(tdee)
    }

    fetchTDEE();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
      <CalculatorInfoCard 
          title={'Total Daily Energy Expenditure'}
          text={"Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier."}
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

          <label htmlFor='al'>ACTIVITY LEVEL</label>
          <select
            name='al' 
            type='number'  
            value={activityLevel}
            onChange={ e => setActivityLevel(e.target.value) }
            required
          >
            <option value='se'>Sedentary</option>
            <option value='la'>Lightly Active</option>
            <option value='ma'>Moderately Active</option>
            <option value='va'>Very Active</option>
          </select>

          <label htmlFor='age'>Age</label>
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
          <p>TDEE:</p>
          <p>{tdee}</p>
        </div>
        
      </div>
    </div>
  )
}

export default TDEE