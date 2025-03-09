import {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Menu from "./components/Menu.jsx"
import About from './components/About'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
import Notification from "./components/Notification.jsx"

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: 1
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'https://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: 2
        }
    ])

    const [notification, setNotification] = useState('')

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000)
        setAnecdotes(anecdotes.concat(anecdote))
    }

    const anecdoteById = (id) =>
        anecdotes.find(a => a.id === id)

    const vote = (id) => {
        const anecdote = anecdoteById(id)

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
    }

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 2000);

            // 清理定时器
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <Router>
            <h1>Software anecdotes</h1>
            <Menu/>
            {notification && <Notification notification={notification} />}

            <Routes>
                <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
                <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />}/>
                <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App
