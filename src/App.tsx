import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BMICalculator from './pages/BMICalculator'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMICalculator />} />
      </Routes>
    </main>
  )
}

export default App
