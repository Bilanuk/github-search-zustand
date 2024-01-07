import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Rating,
    Typography,
} from '@mui/material'

import { FavoriteBorderOutlined } from '@mui/icons-material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'

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

    return (
        <Card sx={{ minWidth: 275, marginTop: '1rem' }}>
            <CardContent>
                <Box>
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
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
                                gap: '5px',
                            }}
                        >
                            {isFavourite ? (
                                <FavoriteSharpIcon
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
                    </CardContent>
                </Box>
                <Divider />
                <Box>
                    <CardContent>
                        {repository.description ? (
                            <Typography variant="body2" color="text.primary">
                                {repository.description}
                            </Typography>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                No description
                            </Typography>
                        )}
                    </CardContent>
                </Box>
            </CardContent>
        </Card>
    )
}

export default RepositoryCard
