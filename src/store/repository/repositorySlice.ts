import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Repository } from '../../__generated__/graphql'

export interface RepositoryWithRating extends Repository {
    rating?: number
}

export interface RepositoryState {
    favouritesRepositories: RepositoryWithRating[]
}

const initialState: RepositoryState = {
    favouritesRepositories: [],
}

export const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        addRepository: (state, action: PayloadAction<RepositoryWithRating>) => {
            state.favouritesRepositories.push(action.payload)
        },
        removeRepository: (
            state,
            action: PayloadAction<RepositoryWithRating>
        ) => {
            state.favouritesRepositories = state.favouritesRepositories.filter(
                (repository) => repository.id !== action.payload.id
            )
        },
        toggleRepository: (
            state,
            action: PayloadAction<RepositoryWithRating>
        ) => {
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
        updateRepositoryRating: (
            state,
            action: PayloadAction<{ id: string; rating: number }>
        ) => {
            const index = state.favouritesRepositories.findIndex(
                (repository) => repository.id === action.payload.id
            )
            if (index !== -1) {
                state.favouritesRepositories[index].rating =
                    action.payload.rating
            }
        },
    },
})

export const {
    addRepository,
    removeRepository,
    toggleRepository,
    updateRepositoryRating,
} = repositorySlice.actions

export const selectFavouritesRepositories = (state: RootState) =>
    state.repository.favouritesRepositories

export default repositorySlice.reducer
