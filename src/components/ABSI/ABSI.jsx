import { useState } from 'react'

import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const ABSI = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [waist, setWaist] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('male')

  const [absi, setAbsi] = useState('')
  const [absiZ, setAbsiZ] = useState('')
  const [mortalityRisk, setMortalityRisk] = useState('')

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchABSI = async () => {
     let { info:  { absi, absiZ, mortalityRisk } } = await fetchData('calc', `absi?weight=${weight}&height=${height}&waist=${waist}&age=${age}&gender=${gender}`)
    
     setAbsi(absi)
     setAbsiZ(absiZ)
     setMortalityRisk(mortalityRisk)
    }

    fetchABSI();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
        <CalculatorInfoCard 
          title={'A Body Shape Index'}
          text={"The ABSI calculator estimates the risk of premature mortality based on the A Body Shape Index (ABSI). The ABSI formula requires only a few variables: age, sex, body height, body mass, and waist circumference."}
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

          <label htmlFor='waist'>WAIST</label>
          <input 
            name='waist' 
            type='number'  
            value={waist}
            onChange={ e => setWaist(e.target.value) }
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
          <p>ABSI:</p>
          <p>{absi}</p>
        </div>
        <div className='calculator-results'>
          <p>ABSIZ:</p>
          <p>{absiZ}</p>
        </div>
        <div className='calculator-results'>
          <p>Mortality Risk:</p>
          <p>{mortalityRisk}</p>
        </div>
      </div>
    </div>
  )
}

export default ABSI