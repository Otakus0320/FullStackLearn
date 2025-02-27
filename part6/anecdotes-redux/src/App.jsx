import { useSelector, useDispatch } from 'react-redux'
import {createVote} from "./reducers/anecdoteReducer.js";
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
        type: 'ADD_VOTE',
        payload: {id}
    })
  }

  const addVote = (event) => {
      event.preventDefault()
      const content = event.target.vote.value
      event.target.vote.value = ''
      dispatch(createVote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={addVote}>
        <div><input name="vote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App