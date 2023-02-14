import './ExercisesPage.css'
import { useState, useEffect } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

import { fetchData } from '../../../utils/fetchData.js'
import { ExerciseCard } from '../../components'

const ExercisesPage = () => {
  const [exercises, setExercises] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')


  console.log(exercises);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = await fetchData('ex', 'exercises')
      setExercises(exerciseData)
    }

    fetchExerciseData();
  }, [])

  const searchHandler = e => {
    e.preventDefault()
    if (searchTerm) {  
      console.log('search for', searchTerm)
    }
  }

  return (
    <div className='exercises-page'>
      <div className='exercises-page_search'>
        <h1>EXERCISES</h1>
        <form  
          className='exercises-page_search-bar'
          onSubmit={searchHandler}
        >
          <input
            className='exercises-page_search-bar_input'
            type='search' 
            placeholder='SEARCH EXERCISES...' 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            type='submit'
            className='exercises-page_search-bar_icon'
          >
            <HiMagnifyingGlass />
          </button>
        </form>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore natus facere numquam. Nesciunt explicabo repudiandae suscipit ut illum dolores esse odio nam a quidem, dolorum voluptas veniam.</p>
      </div>

      <div className='exercise-page_grid'>
        { 
          exercises?.map(exercise => (
            <ExerciseCard exercise={exercise}/>
          ))
        }
      </div>
    </div>
  )
}

export default ExercisesPage