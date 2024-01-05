import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Repository } from '../../__generated__/graphql'

export interface RepositoryState {
    favouritesRepositories: Repository[]
}

const initialState: RepositoryState = {
    favouritesRepositories: [],
}

export const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        addRepository: (state, action: PayloadAction<Repository>) => {
            state.favouritesRepositories.push(action.payload)
        },
        removeRepository: (state, action: PayloadAction<Repository>) => {
            state.favouritesRepositories = state.favouritesRepositories.filter(
                (repository) => repository.id !== action.payload.id
            )
        },
        toggleRepository: (state, action: PayloadAction<Repository>) => {
            const index = state.favouritesRepositories.findIndex(
                (repository) => repository.id === action.payload.id
            )
            if (index === -1) {
                state.favouritesRepositories.push(action.payload)
            } else {
                state.favouritesRepositories =
                    state.favouritesRepositories.filter(
                        (repository) => repository.id !== action.payload.id
                    )
            }
        },
    },
})

export const { addRepository, removeRepository, toggleRepository } =
    repositorySlice.actions

export const selectFavouritesRepositories = (state: RootState) =>
    state.repository.favouritesRepositories

export default repositorySlice.reducer
