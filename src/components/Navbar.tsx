import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    margin-right: 1rem;
`

function Navbar() {
    return (
        <AppBar position="static" sx={{ marginBottom: '1rem' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <StyledLink to="/search">Search</StyledLink>
                <StyledLink to="/favourites">Favourites</StyledLink>
                <StyledLink to="/graphiql">Graphiql</StyledLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
