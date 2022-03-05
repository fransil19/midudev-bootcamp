import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td><td>{value} {text==='positive' ? '%' : ''}</td>
    </tr>
  )
}

const Statistics = ({stats}) => {
  const all = stats[0]+stats[1]+stats[2]
  const average = ((stats[0]-stats[2])/(stats[0]+stats[2]+stats[1])).toFixed(2)
  const positive = ((stats[0]/(stats[0]+stats[2]+stats[1]))*100).toFixed(2)
  return (
    <div>
      <table>
        <Statistic text="good" value={stats[0]}/>
        <Statistic text="neutral" value={stats[1]}/>
        <Statistic text="bad" value={stats[2]}/>
        <Statistic text="all" value={all}/>
        <Statistic text="average" value={average}/>
        <Statistic text="positive" value={positive}/>
        {/* <p>good {stats[0]}</p>
        <p>neutral {stats[1]}</p>
        <p>bad {stats[2]}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive}%</p> */}
      </table>
    </div>
  )
}



const WarningNoComments = () => <h1>No feedback given</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood((prevstate) => prevstate +1)

  }

  const handleClickNeutral = () => {
    setNeutral((prevstate) => prevstate +1)
  }

  const handleClickBad = () => {
    setBad((prevstate) => prevstate +1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" handleClick={handleClickGood}/>
      <Button name="neutral" handleClick={handleClickNeutral}/>
      <Button name="bad" handleClick={handleClickBad}/>
     {/*  <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button> */}
      <h1>Statistics</h1>
      {good === 0 && neutral === 0 && bad === 0
        ? <WarningNoComments />
        :  <Statistics stats={[good,neutral,bad]}/>
      }
      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p> */}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
