import { Avatar, Box, Card, Divider, Rating, Typography } from '@mui/material'

import { FavoriteBorderOutlined } from '@mui/icons-material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'

import {
    RepositoryWithRating,
    selectFavouritesRepositories,
    toggleRepository,
    updateRepositoryRating,
} from '../store/repository/repositorySlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

interface RepositoryCardProps {
    repository: RepositoryWithRating
    displayRating?: boolean
}

function RepositoryCard({
    repository,
    displayRating = false,
}: RepositoryCardProps) {
    const dispatch = useAppDispatch()
    const favoritesRepositories = useAppSelector(selectFavouritesRepositories)

    const isFavourite = favoritesRepositories.some(
        (repo) => repo.id === repository.id
    )

    const handleToggleRepository = () => {
        dispatch(toggleRepository(repository))
    }

    const handleRatingChange = (value: number | null) => {
        if (value === null) {
            return
        }

        dispatch(updateRepositoryRating({ ...repository, rating: value }))
    }

    const formatDate = (dateString: string) => {
        const formattedDate = new Date(dateString).toLocaleDateString(
            undefined,
            { year: 'numeric', month: 'long', day: 'numeric' }
        )
        return formattedDate
    }

    return (
        <Card sx={{ minWidth: 275, marginTop: '1rem' }} variant={'outlined'}>
            <Box
                sx={{
                    padding: '12px',
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#2F81F7',
                            }}
                        >
                            <Avatar
                                alt="Repository owner avatar"
                                src={repository.owner.avatarUrl}
                                sx={{
                                    width: 50,
                                    height: 50,
                                    marginRight: '1rem',
                                }}
                            />
                            <Typography
                                variant="h5"
                                component="a"
                                href={repository.url}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                {repository.owner.login}/
                            </Typography>
                            <Typography
                                variant="h5"
                                component="a"
                                href={repository.url}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontWeight: 'bold',
                                }}
                            >
                                {repository.name}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'end',
                                gap: '10px',
                            }}
                        >
                            {isFavourite ? (
                                <FavoriteSharpIcon
                                    sx={{ color: '#FAAF00' }}
                                    onClick={handleToggleRepository}
                                />
                            ) : (
                                <FavoriteBorderOutlined
                                    onClick={handleToggleRepository}
                                />
                            )}
                            {displayRating && (
                                <Rating
                                    name="read-only"
                                    value={repository.rating || null}
                                    onChange={(event, newValue) =>
                                        handleRatingChange(newValue)
                                    }
                                />
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="body2"
                        color={repository.description ? 'text.primary' : 'gray'}
                        sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    >
                        {repository.description || 'No description'}
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: '1rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor:
                                        repository.primaryLanguage?.color ||
                                        'gray',
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                {repository.primaryLanguage?.name ||
                                    'No language'}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                backgroundColor: 'gray',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                {repository.stargazerCount}
                            </Typography>
                            <StarOutlineRoundedIcon
                                sx={{ color: 'text.secondary' }}
                            />
                        </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        Updated on {formatDate(repository.updatedAt)}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default RepositoryCard
