import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../queries'
import RepositoryCard from './RepositoryCard'

interface SearchResultProps {
    query: string
}

function SearchResult({ query }: SearchResultProps) {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        variables: { query: `${query} in:name` },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)
    return (
        <div>
            {data?.search?.repos?.map((repository: any) => (
                <RepositoryCard key={repository.id} repository={repository} />
            ))}
        </div>
    )
}

export default SearchResult
