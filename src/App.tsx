import React from 'react'
import './styles/App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GraphiQLPage from './pages/GraphiQLPage'
import SearchPage from './pages/SearchPage'
import FavouritesPage from './pages/FavouritesPage'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

function MainLayout() {
    return (
        <div className="App">
            <Navbar />
            <Container maxWidth="md">
                <Routes>
                    <Route path="/" element={<Navigate to="/search" />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </Container>
        </div>
    )
}

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/graphiql" element={<GraphiQLPage />} />
                    <Route path="/*" element={<MainLayout />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
