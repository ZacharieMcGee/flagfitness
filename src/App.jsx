import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components'
import { LandingPage, ExercisesPage, CalculatorsPage, BMI_Page } from './pages'

function App() {

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<LandingPage />}/>
          <Route path={`${import.meta.env.BASE_URL}exercises`} element={<ExercisesPage />} />
          <Route path={`${import.meta.env.BASE_URL}calculators`} element={<CalculatorsPage />} />
          <Route path={`${import.meta.env.BASE_URL}bmi`} element={<BMI_Page />}/>
        </Routes>
      </main>
  
    </div>
  )
}

export default App
