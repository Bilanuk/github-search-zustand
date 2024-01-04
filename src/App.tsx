import React from 'react'
import { Counter } from './components/Counter'
import './styles/App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GraphiQLPage from './pages/GraphiQLPage'
import SearchPage from './pages/SearchPage'
import FavouritesPage from './pages/FavouritesPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/graphiql" element={<GraphiQLPage />} />
          <Route path="/" element={<Navigate to="/graphiql" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
