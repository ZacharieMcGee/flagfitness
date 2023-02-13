import { Link } from 'react-router-dom'

import './LandingPage.css'
import HeroCard from '../../assets/hero-card.png'
import HeroDetail from '../../assets/hero-detail.png'
import { ContentCard1, Button1 } from '../../components'


const LandingPage = () => {
  
  return (
    <div>
      <div className='hero-section'>
        <div className='hero-container'>
          <div className='hero-card'>
            <div className='hero-card_content'>
              <h1>YOUR HEALTH SHOULD BE PRIORITY NUMBER 1</h1>
              <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className='hero-card_btns'>
                <Button1 text={'exercises'} />
                <Button1 text={'calculators'} />
              </div>
            </div>

            <div className='hero-card_bg'>
              <img className='hero-card_bg-img' src={HeroCard} alt='#' /> 
            </div>
          </div>
        </div>

        <div className='hero-section_detail'>
          <img className='hero-section_detail-img' src={HeroDetail} alt='#' />
        </div>
      </div>

      <div className='content-section'>
        <ContentCard1 type={1}/>
        <ContentCard1 type={2}/>
        <ContentCard1 type={3}/>
      </div>

      <div className='content-section'>
        <ContentCard1 type={4}/>
        <ContentCard1 type={2}/>
        <ContentCard1 type={1}/>
      </div>
        
    </div>
  )
}

export default LandingPage