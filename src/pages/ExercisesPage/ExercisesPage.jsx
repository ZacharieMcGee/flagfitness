import './ExercisesPage'
import { useState, useEffect } from 'react'

import { fetchData } from '../../../utils/fetchData.js'

const ExercisesPage = () => {
  const [exercises, setExercises] = useState(null)

  console.log(exercises);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = await fetchData('ex', 'exercises')
      setExercises(exerciseData)
    }

    fetchExerciseData();
  }, [])

  return (
    <div className='exercises-page'>ExercisesPage</div>
  )
}

export default ExercisesPage