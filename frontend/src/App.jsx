import './App.css'
import { Routes, Route } from "react-router-dom"

import Forms from './components/forms/Forms'
import RoomPage from './pages/roomPage/RoomPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
