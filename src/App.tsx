import React from 'react'
import { Counter } from './components/Counter'
import './styles/App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GraphiQLPage from './pages/GraphiQLPage'
import SearchPage from './pages/SearchPage'
import FavouritesPage from './pages/FavouritesPage'
import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/graphiql" element={<GraphiQLPage />} />
                        <Route path="/" element={<Navigate to="/graphiql" />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route
                            path="/favourites"
                            element={<FavouritesPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}

export default App
