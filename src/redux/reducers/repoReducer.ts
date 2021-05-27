import { Action } from '../actions'
import { ActionType } from "../types";

interface RepoInterface {
    loading: boolean
    error: string | null
    data: {}
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepoInterface = initialState, action: Action): RepoInterface => {
    switch (action.type) {
        case ActionType.SEARCH_REPO:
            return {loading: true, error: null, data: []}
        case ActionType.SEARCH_REPO_SUCCESS:
            return {loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPO_ERROR:
            return {loading: false, error: action.payload, data: []}
        default:
            return state
    }
}

export default reducer
