import { createStore, applyMiddleware, compose } from "redux"
import promise from "redux-promise"
import rootReducer from "./rootReducer";

const middleware = [promise]

let composeEnhancers = compose;
if(typeof(window)!="undefined"){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
}