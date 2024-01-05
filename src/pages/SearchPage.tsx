import { useLazyQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../queries'
import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import RepositoryCard from '../components/RepositoryCard'
import { Repository } from '../__generated__/graphql'
import { Box, TextField } from '@mui/material'

function SearchPage() {
    const [query, setQuery] = useState<string>('')
    const [search, { loading, data }] = useLazyQuery(GET_REPOSITORIES)

    // Define the debounced search function
    const debouncedSearch = useCallback(
        debounce((searchQuery: string) => {
            if (searchQuery === '') {
                return
            }

            search({ variables: { query: `${searchQuery} in:name` } })
        }, 500),
        []
    )

    const handleInputChange = (newQuery: string) => {
        setQuery(newQuery)
        debouncedSearch(newQuery)
    }

    return (
        <Box>
            <TextField
                fullWidth
                label="Search..."
                id="fullWidth"
                value={query}
                onChange={(event) => handleInputChange(event.target.value)}
            />
            {loading && <p>Loading...</p>}
            {data && data?.search?.repos?.length === 0 && (
                <p>No repositories found</p>
            )}
            {data && (
                <div>
                    {data?.search?.repos?.map((repository: any) => (
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

export default SearchPage
