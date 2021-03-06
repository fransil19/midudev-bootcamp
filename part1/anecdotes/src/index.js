import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* const MostVoted = ({anecdotes,points}) => {
  const value = Math.max(...points)
  const copy = [...points]
  const index = copy.indexOf(value)
  return <p>{anecdotes[index]}</p>
}
 */
const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleClickNext = () => {
    setSelected(Math.round(Math.random()*5))
  }

  const handleClickVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  
  const value = Math.max(...points)
  const copy = [...points]
  const index = copy.indexOf(value)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {/* <MostVoted anecdotes={anecdotes} points={points}/> */}
      <p>{anecdotes[index]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)