import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../../types/'
import { Action } from '../'

export const searchRepoAction = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPO
        })

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const response = data.objects.map((result: any) => {
                return result.package
            })

            dispatch({
                type: ActionType.SEARCH_REPO_SUCCESS,
                payload: response
            })
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPO_ERROR,
                payload: err.message
            })
        }
    }
}
