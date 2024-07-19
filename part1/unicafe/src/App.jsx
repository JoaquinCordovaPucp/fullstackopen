import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1 
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }
  
  const handleBad = () => {
    const updatedBad = bad + 1 
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad } />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
  
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
    )
}

const Statistics = ({good, bad, total, neutral}) => {
  if(total === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <>
    <table>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={total} />
      <StatisticLine text={"average"} value={(good + (bad * -1))/ total} />
      <StatisticLine text={"positive"} value={(good / total) * 100 +  "%"} />
      </table>
    </>
  )
}

export default App