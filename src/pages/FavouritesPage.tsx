import { Box } from '@mui/material'
import { selectFavouritesRepositories } from '../store/repository/repositorySlice'
import { useAppSelector } from '../store/hooks'
import RepositoryCard from '../components/RepositoryCard'
import { Repository } from '../__generated__/graphql'
import React from 'react'

function FavouritesPage() {
    const favouritesRepositories = useAppSelector(selectFavouritesRepositories)

    return (
        <Box>
            <h1>Favourites Page</h1>

            {favouritesRepositories.length === 0 && (
                <p>No favourites repositories</p>
            )}
            {favouritesRepositories.length > 0 && (
                <div>
                    {favouritesRepositories.map((repository: any) => (
                        <RepositoryCard
                            key={repository.id}
                            repository={repository as Repository}
                        />
                    ))}
                </div>
            )}
        </Box>
    )
}

export default FavouritesPage
