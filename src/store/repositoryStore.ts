import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce from 'immer'

import { Repository } from '../__generated__/graphql'

export interface RepositoryWithRating extends Repository {
    rating?: number | null
}

type RepositoryState = {
    repositories: RepositoryWithRating[]
}

type RepositoryActions = {
    toggleRepository: (repository: RepositoryWithRating) => void
    updateRepositoryRating: (id: string, rating: number) => void
}

export const useRepositoryStore = create<RepositoryState & RepositoryActions>()(devtools((set) => ({
    repositories: [],
    toggleRepository: (repository) => {
        set((state) => produce(state, (draft) => {
            const index = draft.repositories.findIndex(
                (repo) => repo.id === repository.id,
            )

            if (index === -1) {
                draft.repositories.push(repository)
            } else {
                draft.repositories = draft.repositories.filter(
                    (repo) => repo.id !== repository.id,
                )
            }
        }))
    },
    updateRepositoryRating: (id, rating) => {
        set((state) => produce(state, (draft) => {
            const index = draft.repositories.findIndex(
                (repo) => repo.id === id,
            )
            if (index !== -1) {
                draft.repositories[index].rating = rating
            }
        }))
    },
})))