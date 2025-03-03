import {createVote} from "../reducers/anecdoteReducer.js";
import {useDispatch} from "react-redux";
import {setNotification} from "../reducers/notificationReducer.js";
import anecdotes from "../services/anecdotes.js";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addVote = async (event) => {
        event.preventDefault()
        const content = event.target.vote.value
        event.target.vote.value = ''
        const text = await anecdotes.createNew(content)
        dispatch(createVote(text))
        dispatch(setNotification("you added ".concat(content)))
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addVote}>
                <div><input name="vote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm