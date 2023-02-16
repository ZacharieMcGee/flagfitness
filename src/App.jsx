import { Routes, Route } from 'react-router-dom'

import { Navbar, Footer } from './components'
import { LandingPage, ExercisesPage, ExerciseDetailPage, CalculatorsPage } from './pages'

function App() {

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<LandingPage />}/>
          <Route path={`${import.meta.env.BASE_URL}exercises`} element={<ExercisesPage />} />
          <Route path={`${import.meta.env.BASE_URL}exercises/:id`} element={<ExerciseDetailPage />} />
          <Route path={`${import.meta.env.BASE_URL}calculators`} element={<CalculatorsPage />} />
        </Routes>
      </main>

      <Footer />
  
    </div>
  )
}

export default App
