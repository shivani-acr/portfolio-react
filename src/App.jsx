import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Hero from './Components/Hero/Hero'
import ChatPage from './Components/ChatPage/ChatPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Sputhnika-Shivani" element={<ChatPage />} />
      </Routes>
    </Router>
  )
}

export default App
