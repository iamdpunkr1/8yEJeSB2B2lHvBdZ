import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BMICalculator from './pages/BMICalculator'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/8yEJeSB2B2lHvBdZ/" element={<Home />} />
        <Route path="/8yEJeSB2B2lHvBdZ/bmi" element={<BMICalculator />} />
      </Routes>
    </main>
  )
}

export default App
