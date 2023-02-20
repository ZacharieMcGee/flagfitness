import './ExercisesPage.css'
import { useState, useEffect } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlineDoubleLeft, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { fetchData } from '../../utils/fetchData.js'
import { ExerciseCard, ExerciseCardSkeleton } from '../../components'

const ExercisesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [exercises, setExercises] = useState(null)
  const [searchedExercises, setSearchedExercises] = useState(null)

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
      const searchedExercises = exercises.filter(
        exercise => exercise.name.toLowerCase().includes(searchTerm)
        || exercise.target.toLowerCase().includes(searchTerm)
        || exercise.equipment.toLowerCase().includes(searchTerm)
        || exercise.bodyPart.toLowerCase().includes(searchTerm)
      )

      setSearchTerm('');
      setExercises(searchedExercises);
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const pageRight = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
        <p>Browse 1200+ exercises here and find exactly what you're looking for.</p>
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
            onClick={() => {
              setCurrentPage(1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }
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
            onClick={() => {
              setCurrentPage(currentPage + 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {currentPage + 1}
          </div>
        }

        {(currentPage + 2) < numOfPages &&
          <div 
            className='exercise-page_pagination-icon num'
            onClick={() => {
              setCurrentPage(currentPage + 2)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {currentPage + 2}
          </div>
        }

        <div className='exercise-page_pagination-icon dots'>
          ...
        </div>

        <div 
          className='exercise-page_pagination-icon num'
          onClick={() => {
            setCurrentPage(numOfPages)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
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