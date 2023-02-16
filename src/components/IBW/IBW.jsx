import { useState } from 'react'

import './IBW.css'
import { CalculatorInfoCard } from '../../components'
import { fetchData } from '../../utils/fetchData'

const IBW = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [gender, setGender] = useState('male')

  const [robinson, setRobinson] = useState(0)
  const [miller, setMiller] = useState(0)
  const [devine, setDevine] = useState(0)
  const [hamwi, setHamwi] = useState(0)

  const calcSubmitHandler = e => {
    e.preventDefault()

    const fetchIBW = async () => {
     let { info:  { robinson, miller, devine, hamwi }} = await fetchData('calc', `ibw?weight=${weight}&height=${height}&gender=${gender}`)
    
     setRobinson(robinson)
     setMiller(miller)
     setDevine(devine)
     setHamwi(hamwi)
    }

    fetchIBW();
  }

  return (
    <div className='calculator-container'>
      <div className='calculator-container_info'>
        <CalculatorInfoCard 
          title={'Ideal Body Weight'}
          text={'The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons.'}
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
          <p>ROBINSON:</p>
          <p>{robinson}</p>
        </div>
        <div className='calculator-results'>
          <p>MILLER:</p>
          <p>{miller}</p>
        </div>
        <div className='calculator-results'>
          <p>DEVINE:</p>
          <p>{devine}</p>
        </div>
        <div className='calculator-results'>
          <p>HAMWI:</p>
          <p>{hamwi}</p>
        </div>
      </div>
    </div>
  )
}

export default IBW