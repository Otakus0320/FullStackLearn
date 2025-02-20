import { useState } from 'react'

const Title = () => {
    return (
        <div>
            <h1>give feedback</h1>
        </div>
    )
}

const Button = (props) => (
        <button onClick={props.onClick}>{props.text}</button>
    )

const Board = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

const TotalBoard = (props) => {
    return (
        <div>
            <h2>statistics</h2>
            <Board text={props.good} />
            <Board text={props.neutral} />
            <Board text={props.bad} />

        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToValueGood = (newValue) => () => {
        setGood(newValue)
    }

    const setToValueNeutral = (newValue) => () => {
        setNeutral(newValue)
    }

    const setToValueBad = (newValue) => () => {
        setBad(newValue)
    }

    return (
        <div>
            <Title />
            <Button onClick={setToValueGood(good+1)} text="good"/>
            <Button onClick={setToValueNeutral(neutral+1)} text="neutral"/>
            <Button onClick={setToValueBad(bad+1)} text="bad"/>

            <TotalBoard good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App