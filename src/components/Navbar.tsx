import React from 'react'
import { AppBar, Tab, Tabs } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <AppBar position="static" sx={{ marginBottom: '1rem' }}>
            <Tabs centered={true}>
                <Tab component={NavLink} to="/search" label="Search" />
                <Tab component={NavLink} to="/favourites" label="Favourites" />
                <Tab component={NavLink} to="/graphiql" label="Graphiql" />
            </Tabs>
        </AppBar>
    )
}

export default Navbar
