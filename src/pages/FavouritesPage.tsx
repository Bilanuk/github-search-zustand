import { Box, Typography } from '@mui/material'
import { selectFavouritesRepositories } from '../store/repository/repositorySlice'
import { useAppSelector } from '../store/hooks'
import RepositoryCard from '../components/RepositoryCard'
import { Repository } from '../__generated__/graphql'
import React from 'react'

function FavouritesPage() {
    const favouritesRepositories = useAppSelector(selectFavouritesRepositories)

    return (
        <Box>
            {favouritesRepositories.length === 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '200px',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h4"
                        color="text.secondary"
                    >
                        No favourites repositories
                    </Typography>
                </Box>
            )}
            {favouritesRepositories.length > 0 && (
                <div>
                    {favouritesRepositories.map((repository: any) => (
                        <RepositoryCard
                            key={repository.id}
                            repository={repository as Repository}
                            displayRating={true}
                        />
                    ))}
                </div>
            )}
        </Box>
    )
}

export default FavouritesPage
