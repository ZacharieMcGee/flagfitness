import { useState } from 'react'

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
          text={'Ideal Body Weight (IBW) is a weight range that is considered to be healthy for a particular height, age, and gender. It is important because it provides a target weight that can be used to maintain good health and reduce the risk of chronic diseases. A healthy weight can also improve physical appearance and athletic performance. However, it is important to note that the ideal body weight is a general guideline and does not take into account individual differences such as body composition or lifestyle factors. Additionally, focusing solely on achieving a certain number on the scale can be counterproductive and may lead to unhealthy habits or a negative body image. It is important to maintain a balanced approach to weight management, incorporating healthy eating habits, regular physical activity, and other lifestyle factors that promote overall health and well-being.'}
        />
      </div>
      <div className='calculator'>
        <form onSubmit={calcSubmitHandler}>
          <label htmlFor='weight'>WEIGHT (KG)</label>
          <input 
            name='weight' 
            type='number'  
            value={weight}
            onChange={ e => setWeight(e.target.value) }
            required
          />

          <label htmlFor='height'>HEIGHT (CM)</label>
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