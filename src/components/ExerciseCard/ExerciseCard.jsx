import { useNavigate } from 'react-router-dom'

import './ExerciseCard.css'

const ExerciseCard = ({ exercise = 'skel' }) => {
  // if (!isSkel) {
  //   let { gifUrl, target, bodyPart, name, id } = exercise;
  // }
  const navigate = useNavigate();

  // () => navigate(`${import.meta.env.BASE_URL}/exercises/${id}`)

  // const handler = () => {
  //   console.log(import.meta.env.BASE_URL, navigate)
  // }

  return (
    <div 
      className='exercise-card' 
      onClick={() => navigate(`${import.meta.env.BASE_URL}exercises/${exercise?.id}`)}
    >
      <div className='exercise-card_content'>
        { 
        exercise?.gifUrl 
          ? <img src={exercise.gifUrl} alt={exercise.name}/>
          : <div className='image-skel'>Lorm</div>
        }
        <p>{exercise.name || 'lorem'}</p>
        <div className='exercise-card_content-chips'>
          <div className='exercise-card_content-chips_chip'>{exercise.target || 'lorem'}</div>
          <div className='exercise-card_content-chips_chip'>{exercise.bodyPart || 'lorem'}</div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard