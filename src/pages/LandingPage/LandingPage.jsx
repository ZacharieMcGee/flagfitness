import { Link } from 'react-router-dom'
import { GiBiceps, GiMeat } from 'react-icons/gi'

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
{/* 
      <div className='content-section'>
        <ContentCard1 type={1}/>
        <ContentCard1 type={2}/>
        <ContentCard1 type={3}/>
      </div>

      <div className='content-section'>
        <ContentCard1 type={4}/>
        <ContentCard1 type={2}/>
        <ContentCard1 type={1}/>
      </div> */}

      <div className='content-section section-1'>
        <div className='content-section_card'>
          <h3>Qorem ipsum  sit amet, consectetur.</h3>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
          <br /><br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas.</p>
          <Button1 text={'exercises'}/>
        </div>

        <div className='content-section_card' >
          <ContentSubcard 
            title={'Vorem consectetur'}
            text={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.'}
            icon={<GiBiceps />}
          />
          <ContentSubcard 
            title={'Sorem ipsum'}
            text={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.'}
            icon={<GiMeat />}
          />
        </div>

        <div className='content-section_card pullup'></div>
      </div>

      <div className='content-section section-2'>
        <div className='content-section_card' style={{ color: 'white' }}>
          <h3>Qorem ipsum  sit amet, consectetur.</h3>
          <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
          <br /><br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas.</p>
          <Button1 text={'exercises'}/>
        </div>

        <div className='content-section_card' >
          <ContentSubcard 
            title={'Vorem consectetur'}
            text={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.'}
            icon={<GiBiceps />}
          />
          <ContentSubcard 
            title={'Sorem ipsum'}
            text={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.'}
            icon={<GiMeat />}
          />
        </div>

        <div className='content-section_card tape'></div>
      </div>

      <Footer />
      
    </div>
  )
}

export default LandingPage