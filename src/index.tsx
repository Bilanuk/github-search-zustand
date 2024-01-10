import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const container = document.getElementById('root')!
const root = createRoot(container)

const client = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_API,
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache(),
})

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
)
