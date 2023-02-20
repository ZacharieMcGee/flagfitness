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
          text={'Basal Metabolic Rate (BMR) is the number of calories that the body burns at rest to maintain basic bodily functions such as breathing, circulating blood, and regulating body temperature. BMR is important because it provides an estimate of the minimum number of calories a person needs to consume to sustain their current weight and prevent weight gain or loss. Knowing your BMR can be helpful when creating a weight loss or weight gain plan, as it allows you to calculate the number of calories you need to consume or burn through physical activity to reach your goals. BMR can also be affected by factors such as age, gender, and muscle mass, and may change over time due to changes in body composition or lifestyle habits.'}
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