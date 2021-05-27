import { combineReducers } from "redux";
import repoReducer from "./repoReducer";

const reducers = combineReducers({
    packages: repoReducer
})

export default reducers


// Describes the type of information in the store
export type RootState = ReturnType<typeof reducers>
