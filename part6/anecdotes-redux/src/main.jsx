import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from "./utils/store.js"
import anecdotesService from "./services/anecdotes.js"
import {appendVotes, setVotes} from "./reducers/anecdoteReducer.js"

anecdotesService.getAll().then(response => {
    store.dispatch(setVotes(response))
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)