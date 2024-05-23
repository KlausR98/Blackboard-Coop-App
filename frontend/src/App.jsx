import './App.css'
import { Routes, Route } from "react-router-dom"

import RoomPage from './pages/RoomPage/RoomPage'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
