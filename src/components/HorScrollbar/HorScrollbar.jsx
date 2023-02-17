import { useContext } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import './HorScrollbar.css'
import { ExerciseCard } from '../../components'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="arrow">
      <AiOutlineLeft />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="arrow">
      <AiOutlineRight />
    </div>
  );
};

const HorScrollbar = ({ title, exercises }) => {

  return (
    <div className='horscrollbar'>
      <h2>{title}</h2>
      <ScrollMenu 
        LeftArrow={LeftArrow} 
        RightArrow={RightArrow} 
        className='horscrollbar-flex'
      >
        { 
          exercises?.slice(0, 10)?.map(item => <ExerciseCard exercise={item} key={item.id} />)
        }
      </ScrollMenu>
      
    </div>
  )
}

export default HorScrollbar