import { Link } from 'react-router-dom'

import './LandingPage.css'
import HeroCard from '../../assets/hero-card.png'

const LandingPage = () => {
  const baseUrl = import.meta.env.BASE_URL
  
  return (
    <div>
      <div className='hero-section'>

        <div className='hero-container'>

          <div className='hero-card'>
            <div className='hero-card_content'>
              <h1>YOUR HEALTH SHOULD BE PRIORITY NUMBER 1</h1>
              <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='hero-card_btns'>
                <Link className='btn'>EXERCISES</Link>
                <Link
                className='btn inverted'>CALCULATORS</Link>
              </div>
            </div>

            <div className='hero-card_bg'>
              <img className='hero-card_bg-img' src={HeroCard} alt='#' /> 
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LandingPage