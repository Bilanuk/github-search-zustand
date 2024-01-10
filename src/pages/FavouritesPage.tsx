import { Box, Typography } from '@mui/material'
import RepositoryCard from '../components/RepositoryCard'
import { Repository } from '../__generated__/graphql'
import React from 'react'
import { useRepositoryStore } from '../store/repositoryStore'

function FavouritesPage() {
    const repositories = useRepositoryStore((state) => state.repositories)

    return (
        <Box>
            {repositories.length === 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '200px',
                    }}
                >
                    <Typography
                        variant='h4'
                        component='h4'
                        color='text.secondary'
                    >
                        No favourites repositories
                    </Typography>
                </Box>
            )}
            {repositories.length > 0 && (
                <div>
                    {repositories.map((repository: any) => (
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
