import { Repository } from '../__generated__/graphql'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Typography,
} from '@mui/material'

interface RepositoryCardProps {
    repository: Repository
}

function RepositoryCard({ repository }: RepositoryCardProps) {
    return (
        <Card sx={{ minWidth: 275, marginTop: '1rem' }}>
            <CardContent>
                <Box>
                    <CardContent
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
                            sx={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {repository.name}
                        </Typography>
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
