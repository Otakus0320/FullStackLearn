import {createVote} from "../reducers/anecdoteReducer.js";
import {useDispatch} from "react-redux";
import {setNotification} from "../reducers/notificationReducer.js";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addVote = (event) => {
        event.preventDefault()
        const content = event.target.vote.value
        event.target.vote.value = ''
        dispatch(createVote(content))
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