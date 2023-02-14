import './ExerciseCard.css'

const ExerciseCard = ({ exercise }) => {
  const { gifUrl, target, bodyPart, name } = exercise;

  return (
    <div className='exercise-card'>
      <div className='exercise-card_content'>
        <img src={gifUrl} alt={name}/>
        <p>{name}</p>
        <div className='exercise-card_content-chips'>
          <div className='exercise-card_content-chips_chip'>{target}</div>
          <div className='exercise-card_content-chips_chip'>{bodyPart}</div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard