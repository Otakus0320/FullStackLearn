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

const StatisticLine = (props) => {
    return (
        <div>
            <p>{props.text} {props.value}</p>
        </div>
    )
}

const Statistics = (props) => {
    let total = props.good + props.neutral + props.bad
    if (total <= 0) {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }else{
        return (
            <div>
                <h2>statistics</h2>
                <StatisticLine value={props.good} text="good"/>
                <StatisticLine value={props.neutral} text="neutral"/>
                <StatisticLine value={props.bad} text="bad"/>
                <StatisticLine value={total} text="all"/>
                <StatisticLine value={(props.good - props.bad)/total} text="average"/>
                <StatisticLine value={props.good/total*100 + " %"} text="positive"/>

            </div>
        )
    }

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

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App