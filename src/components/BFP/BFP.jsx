import { useState } from 'react'

import './BFP.css'
import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const BFP = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('male')

  const [bfp, setBfp] = useState(0)
  const [fatMass, setFatMass] = useState(0)
  const [leanMass, setLeanMass] = useState(0)
  
  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchBFP = async () => {
     let { info:  { bfp, fat_mass, lean_mass }} = await fetchData('calc', `bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`)
    
     setBfp(bfp)
     setFatMass(fat_mass)
     setLeanMass(lean_mass)
    }

    fetchBFP();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
      <CalculatorInfoCard 
          title={'Body Fat Percentage'}
          text={"Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function. Commonly also termed as Resting Metabolic Rate (RMR), which is the calories burned if you stayed in bed all day.  In either case, many utilize the basal metabolic rate formula to calculate their body's metabolism rate."}
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
          <p>BFP:</p>
          <p>{bfp}</p>
        </div>
        <div className='calculator-results'>
          <p>Fat Mass:</p>
          <p>{fatMass}</p>
        </div>
        <div className='calculator-results'>
          <p>Lean Mass:</p>
          <p>{leanMass}</p>
        </div>
      </div>
    </div>
  )
}

export default BFP