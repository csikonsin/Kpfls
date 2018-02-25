import { combineReducers } from "redux"


function modules(state = [], action){
    return state
}


function cms(state = {} , action){
    return state
}

const rootReducer = combineReducers({
    modules,
    cms
})

export default rootReducer