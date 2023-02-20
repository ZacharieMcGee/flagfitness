import { Link } from 'react-router-dom'
import { GiBiceps, GiMeat } from 'react-icons/gi'
import { IoScaleSharp, IoCalculatorSharp } from 'react-icons/io5'

import './LandingPage.css'
import HeroCard from '../../assets/hero-card.png'
import HeroDetail from '../../assets/hero-detail.png'
import { Button1, ContentSubcard, Footer } from '../../components'

const LandingPage = () => {
  
  return (
    <div>
      <div className='hero-section'>
        <div className='hero-container'>
          <div className='hero-card'>
            <div className='hero-card_content'>
              <h1>YOUR HEALTH SHOULD BE PRIORITY NUMBER 1</h1>
              <p>Getting fit has never been easier. Find the exercises and fitness calculators you need right here.</p>
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

      <div className='content-section section-1'>
        <div className='content-section_card'>
          <h3>The Importance of Fitness</h3>
          <p>Fitness is crucial to living a healthy and fulfilling life. Engaging in regular physical activity can offer numerous benefits to both the body and mind.
          <br /><br />
          Regular exercise can help build and maintain strong bones and muscles, improve cardiovascular health, and reduce the risk of chronic diseases such as diabetes, obesity, and heart disease. In addition, staying active can boost the immune system, increase energy levels, and improve sleep quality.</p>
          <Button1 text={'exercises'}/>
        </div>

        <div className='content-section_card' >
          <ContentSubcard 
            title={'Obvious Benefits'}
            text={'Exercise is beneficial because it can improve physical health, mental health, and overall quality of life.'}
            icon={<GiBiceps />}
          />
          <ContentSubcard 
            title={'Importance of Intake'}
            text={'A healthy diet is beneficial because it can provide essential nutrients, help maintain a healthy weight, and reduce the risk of chronic diseases.'}
            icon={<GiMeat />}
          />
        </div>

        <div className='content-section_card pullup'></div>
      </div>

      <div className='content-section section-2'>
        <div className='content-section_card' style={{ color: 'white' }}>
          <h3>Staying Healhty is About Making Informed Decisions</h3>
          <p>Being health conscious can help prevent chronic diseases. Making healthy choices such as eating a nutritious diet, engaging in regular exercise, and avoiding unhealthy habits like smoking can reduce the risk of conditions such as heart disease, diabetes, and cancer.
          <br /><br />
          By taking care of your physical and mental health, you can feel better and more energetic, and reduce the risk of health problems that can impact your ability to enjoy life to the fullest.</p>
          <Button1 text={'calculators'}/>
        </div>

        <div className='content-section_card' >
          <ContentSubcard 
            title={'Pay Attention'}
            text={'It is important to keep track of your health to identify potential health issues early, prevent future health problems, and maintain overall well-being.'}
            icon={<IoScaleSharp />}
          />
          <ContentSubcard 
            title={'More Than Numbers'}
            text={'It is important to calculate your macros to ensure that you are consuming the right amounts of macronutrients (proteins, carbohydrates, and fats) to support your fitness goals and overall health.'}
            icon={<IoCalculatorSharp />}
          />
        </div>

        <div className='content-section_card tape'></div>
      </div>
      
    </div>
  )
}

export default LandingPage