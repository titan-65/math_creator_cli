export interface SearchRepoAction {
    type: string;
    payload?: any
}

export interface SearchRepoSuccessAction {
    type: string;
    payload: [{}]
}

export interface SearchRepoErrorAction {
    type: string;
    payload: string;
}

