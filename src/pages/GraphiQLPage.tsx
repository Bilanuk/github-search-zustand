import GraphiQL from 'graphiql'
import 'graphiql/graphiql.min.css'

import { GET_REPOSITORIES } from '../queries'
import { print } from 'graphql/language'

function GraphiQLPage() {
    const fetcher = async (params: any) => {
        const response = await fetch(process.env.REACT_APP_GITHUB_API!, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
        return await response.json()
    }

    return (
        <div style={{ height: '100vh' }}>
            <GraphiQL
                fetcher={fetcher}
                variables={'{"query": "Test in:name"}'}
                defaultQuery={print(GET_REPOSITORIES)}
            />
        </div>
    )
}

export default GraphiQLPage
