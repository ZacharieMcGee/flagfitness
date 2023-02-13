import { Link } from 'react-router-dom';

import './ContentCard1.css'
import { Button1 } from '../../components'
import { GiBiceps, GiMeat } from 'react-icons/gi'

const ContentCard1 = ({ type }) => {
  const baseUrl = import.meta.env.BASE_URL

  if ( type === 1 ) {
    return (
      <div className='content-card type-1'>
        <h3>Qorem ipsum  sit amet, consectetur.</h3>
        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
        <br /><br />
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas.</p>
        <Button1 text={'exercises'}/>
      </div>
    )
  } else if ( type === 2 ) {
    return (
      <div className='content-card type-2'>
        <div className='content-card_subcard'>
          <h4>Vorem consectetur</h4>
          <div className='content-card_subcard-flex'>
            <div className='content-card_subcard-flex_icon'>
              <GiBiceps />
            </div>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
          </div>
        </div>

        <div className='content-card_subcard'>
          <h4>Sorem ipsum</h4>
          <div className='content-card_subcard-flex'>
            <div className='content-card_subcard-flex_icon'>
              <GiMeat />
            </div>
            <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
          </div>
        </div>
      </div>
    )
  } else if ( type === 3 ) {
    return (
      <div className='content-card type-3'>
      </div>
    )
  } else {
    return (
      <div className='content-card type-4'>
      </div>
    )
  }

 
}

export default ContentCard1