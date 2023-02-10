import { Routes, Route } from 'react-router-dom'

import { Navbar, Footer } from './components'
import { LandingPage } from './pages'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<LandingPage />}/>
          {/* <Route path={import.meta.env.BASE_URL}/>/>
          <Route path={import.meta.env.BASE_URL}/>/> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
