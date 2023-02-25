
//import
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navber'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
//css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <div style={{ marginTop: '0', paddingTop: '0' }}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      

    </BrowserRouter>
  )
}

export default App
