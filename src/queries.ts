import { gql } from './__generated__'

const GET_REPOSITORIES = gql(/* GraphQL */ `
    query Repository($query: String!) {
        search(type: REPOSITORY, query: $query, first: 5) {
            pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
            }
            repos: nodes {
                ... on Repository {
                    id
                    name
                    description
                    url
                    stargazerCount
                    forkCount
                    pushedAt
                    isArchived
                    updatedAt
                    createdAt
                    primaryLanguage {
                        id
                        name
                        color
                    }
                    owner {
                        id
                        login
                        url
                        avatarUrl
                    }
                    isInOrganization
                }
            }
        }
    }
`)

export { GET_REPOSITORIES }
