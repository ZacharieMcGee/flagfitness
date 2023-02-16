import './ExercisesPage.css'
import { useState, useEffect } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { fetchData } from '../../utils/fetchData.js'
import { ExerciseCard, ExerciseCardSkeleton } from '../../components'

const ExercisesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [exercises, setExercises] = useState(null)

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

  
  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 15;
  
  let numOfPages = Math.ceil(exercises?.length / exercisesPerPage);
  let indexOfLastExercise = currentPage * exercisesPerPage;
  let indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  let currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise);
  
  const pageLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const pageRight = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1)
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
          currentExercises 
          ? currentExercises.map(exercise => (
            <ExerciseCard exercise={exercise} key={exercise.id}/>
          ))
          : Array.from({length: 15}, (_, idx) => (
            <ExerciseCardSkeleton key={idx}/>
          ))
        }
      </div>

      <div className='exercise-page_pagination'>

        {(currentPage !== 1) &&
          <div 
            className='exercise-page_pagination-icon arrow-left'
            onClick={() => setCurrentPage(1)}
          >
            <AiOutlineDoubleLeft />
          </div>
        }

        <div 
          className='exercise-page_pagination-icon arrow-left'
          onClick={pageLeft}
        >
          <AiOutlineLeft />
        </div>

        <div className='exercise-page_pagination-icon num'>
          {currentPage}
        </div>

        {(currentPage + 1) < numOfPages &&
          <div 
            className='exercise-page_pagination-icon num'
            onClick={() => currentPage + 1}
          >
            {currentPage + 1}
          </div>
        }

        {(currentPage + 2) < numOfPages &&
          <div 
            className='exercise-page_pagination-icon num'
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            {currentPage + 2}
          </div>
        }

        <div className='exercise-page_pagination-icon dots'>
          ...
        </div>

        <div 
          className='exercise-page_pagination-icon num'
          onClick={() =>setCurrentPage(numOfPages)}
        >
          {numOfPages}
        </div>

        <div 
          className='exercise-page_pagination-icon arrow-right'
          onClick={pageRight}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  )
}

export default ExercisesPage