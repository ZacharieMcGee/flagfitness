import './ExerciseCard.css'

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='exercise-card'>
      <div className='exercise-card_content'>
        <img src='#' alt='#'/>
        <p></p>
        <div className='exercise-card_content-chips'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard