import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore} from "redux";
import reducer from "./reducer.js";
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
    root.render(<App store={store} renderApp={renderApp} />)
}
renderApp()


