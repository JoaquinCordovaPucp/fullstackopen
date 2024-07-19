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
      <p>
        good {good}
      </p>
      <p>
        neutral {neutral}
      </p>
      <p>
        bad {bad}
      </p>
      <p>
        all {total}
      </p>
      <Average good={good} bad={bad} neutral={neutral} total={total} />
      <Positive good={good} total={total} />
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Average = ({good, bad, total}) => {
  return(
    <p>
      average {(good + (bad * -1))/ total}
    </p>
  )
}

const Positive = ({good, total}) => {
  return (
    <p>
      Positive {(good / total) * 100}%
    </p>
  )
}

export default App