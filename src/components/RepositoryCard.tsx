import { Repository } from '../__generated__/graphql'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
} from '@mui/material'

import { FavoriteBorderOutlined } from '@mui/icons-material'

import { toggleRepository } from '../store/repository/repositorySlice'
import { useAppDispatch } from '../store/hooks'

interface RepositoryCardProps {
    repository: Repository
}

function RepositoryCard({ repository }: RepositoryCardProps) {
    const dispatch = useAppDispatch()
    const handleToggleRepository = () => {
        dispatch(toggleRepository(repository))
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
                                gap: '1rem',
                            }}
                        >
                            <Avatar
                                alt="Repository owner avatar"
                                src={repository.owner.avatarUrl}
                                sx={{ width: 50, height: 50 }}
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
                                {repository.name}
                            </Typography>
                        </Box>

                        <FavoriteBorderOutlined
                            onClick={handleToggleRepository}
                        />
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
