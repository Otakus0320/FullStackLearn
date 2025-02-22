import { useState } from 'react'

const Person = ({name}) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const person = {name: newName }
        setPersons([...persons, person])
        setNewName('')
    }

    const handelNewName = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handelNewName} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(({name}) => (<Person key={name} name={name}/>))}
            </div>
        </div>
    )
}

export default App