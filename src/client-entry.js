import {hydrate,render} from "react-dom"
import React from "react"
import App from "./components/App.jsx"
import Helpers from "./helpers"

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

let renderHydrate = render
if(Helpers.USE_SSR){
    renderHydrate = hydrate
}
renderHydrate( 
    <App store={preloadedState} />,    
    document.getElementById("app")
)