import {createSlice} from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0)

const voteSlice = createSlice({
  name: "votes",
  initialState: [],
  reducers: {
    createVote(state, action) {
      console.log(state)
      const content = action.payload
      state.push({
        content: content,
        id: getId(),
        votes: 0
      })
    },
    addVotes(state, action) {
      const id = action.payload
      const voteToChange = state.find(vote => vote.id === id)
      if (voteToChange) voteToChange.votes += 1
      state.sort((a, b) => b.votes - a.votes)
    },
    appendVotes(state, action) {
      state.push(action.payload)
    },
    setVotes(state, action) {
      return action.payload
    }
  }
})

export const {createVote, addVotes, appendVotes, setVotes} = voteSlice.actions;
export default voteSlice.reducer