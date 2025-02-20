import { useState } from 'react'

const Button = ({onClick, text}) => (
        <button onClick={onClick}>{text}</button>
    )

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    let total = good + neutral + bad
    if (total <= 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }else{
        return (
            <table>
                <tbody>
                    <StatisticLine value={good} text="good"/>
                    <StatisticLine value={neutral} text="neutral"/>
                    <StatisticLine value={bad} text="bad"/>
                    <StatisticLine value={total} text="all"/>
                    <StatisticLine value={(good - bad)/total} text="average"/>
                    <StatisticLine value={good/total*100 + " %"} text="positive"/>
                </tbody>
            </table>
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
            <h1>give feedback</h1>
            <Button onClick={setToValueGood(good+1)} text="good"/>
            <Button onClick={setToValueNeutral(neutral+1)} text="neutral"/>
            <Button onClick={setToValueBad(bad+1)} text="bad"/>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App