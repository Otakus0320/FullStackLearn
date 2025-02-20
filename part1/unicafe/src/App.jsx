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
            <p>{props.text} {props.count}</p>
        </div>
    )
}

const Average = ({good, bad, total}) => {
    let score = good - bad
    if (total <= 0) total = 1
    return (
        <div>
            <p>average {score/total}</p>
        </div>
    )
}

const Positive = ({good, total}) => {
    if (total <= 0) total = 1
    return (
        <div>
            <p>positive {good/total*100} %</p>
        </div>
    )
}

const TotalBoard = (props) => {
    console.log(props)
    let total = props.good + props.neutral + props.bad
    return (
        <div>
            <h2>statistics</h2>
            <Board count={props.good} text="good"/>
            <Board count={props.neutral} text="neutral"/>
            <Board count={props.bad} text="bad"/>
            <Board count={total} text="all"/>
            <Average good={props.good} bad={props.bad} total={total}/>
            <Positive good={props.good} total={total} text="positive"/>

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