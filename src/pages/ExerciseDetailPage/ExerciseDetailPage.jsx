import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoBodySharp } from 'react-icons/io5'
import { GiArcheryTarget } from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'


import './ExerciseDetailPage.css'
import { fetchData } from '../../utils/fetchData'
import { CalculatorInfoCard, HorScrollbar } from '../../components';

const ExerciseDetailPage = () => {
  const [exercise, setExercise] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  let { id } = useParams();

  console.log(exercise, exerciseVideos, targetMuscleExercises, equipmentExercises)

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseData = await fetchData('ex', `exercises/exercise/${id}`)
      setExercise(exerciseData)

      const exerciseVideosData = await fetchData('yt', `search?query=${exerciseData.name} exercise`)
      setExerciseVideos(exerciseVideosData.contents.slice(0, 3))

      const targetMuscleData = await fetchData('ex', `exercises/target/${exerciseData.target}`)
      setTargetMuscleExercises(targetMuscleData)

      const equipmentExercisesData = await fetchData('ex', `exercises/equipment/${exerciseData.equipment}`)
      setEquipmentExercises(equipmentExercisesData)
      
    }

    fetchExerciseData()
    
  }, [])

  if (!exercise) return 'Loading...';

  return (
    <div className='exercise-page'>
      <h1>{exercise?.name?.toUpperCase()}</h1>

      <div className='exercise-page_snippet'>
        <div style={{ backgroundImage: `url(${exercise?.gifUrl})`}} className='exercise-page_snippet-img'>
          {/* <img src={exercise?.gifUrl} alt={exercise?.name} /> */}
        </div>
        <div className='exercise-page_snippet-icons'>
          <div className='exercise-page_snippet-icons_icon'>
            <div>
              <IoBodySharp />
            </div>
            <p>{exercise?.bodyPart?.toUpperCase()}</p>
          </div>
          <div className='exercise-page_snippet-icons_icon'>
            <div>
              <GiArcheryTarget />
            </div>
            <p>{exercise?.target?.toUpperCase()}</p>
          </div>
          <div className='exercise-page_snippet-icons_icon'>
            <div>
              <BiDumbbell />
            </div>
            <p>{exercise?.equipment?.toUpperCase()}</p>
          </div>
        </div>
      </div>

      <div className='exercise-page_videos'>
        <h2>Related Videos</h2>
        <div className='exercise-page_videos-flex'>
        {
          exerciseVideos.map((item, idx) => (

            <a 
            key={idx}
            className='exercise-page_videos-video'
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <p>{item.video.title}</p>
            <p>{item.video.channelName}</p>
          </a>
          ))
        }
        </div>
      </div>

      <HorScrollbar 
        title={'Related Exercises By Target Muscle'}
        exercises={targetMuscleExercises}
      />

      <HorScrollbar
        title={'Related Exercises by Equipment'} 
        exercises={equipmentExercises}
      />
    </div>
  )
}

export default ExerciseDetailPage 