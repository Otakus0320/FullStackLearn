import {useDispatch, useSelector} from "react-redux";
import {addVotes} from "../reducers/anecdoteReducer.js";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({votes, filter}) => {
        if(filter === ""){
            return votes
        }else {
            console.log(votes)
            return votes.filter((item) => item.content.includes(filter))
        }
    })
    const vote = (id) => {
        dispatch(addVotes(id))
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