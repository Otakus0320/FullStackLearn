import {useDispatch, useSelector} from "react-redux";
import {addVotes} from "../reducers/anecdoteReducer.js";
import {setNotification} from "../reducers/notificationReducer.js";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({votes, filter}) => {
        if(filter === ""){
            return votes
        }else {
            return votes.filter((item) => item.content.includes(filter))
        }
    })
    const vote = (id) => {
        dispatch(addVotes(id))
        dispatch(setNotification("you voted ".concat(
            (anecdotes.find((item) => item.id === id)).content))
        )
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList