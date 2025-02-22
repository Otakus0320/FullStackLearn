import { useState } from 'react'
import Person from "./components/Person.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '12345678'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const person = {
            name: newName,
            phone: newPhone
        }
        if (persons.some(({name}) => name === newName)){
            alert(`${newName} is already added to phone book!`)
        }else {
            setPersons([...persons, person])
        }
        setNewName('')
        setNewPhone('')
    }

    const handelNewName = (event) => {
        setNewName(event.target.value)
    }

    const handelNewPhone = (event) => {
        setNewPhone(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    <div>name: <input value={newName} onChange={handelNewName} /></div>
                    <div>number: <input value={newPhone} onChange={handelNewPhone} /></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(({name, phone}) => (<Person key={name} name={name} phone={phone} />))}
            </div>
        </div>
    )
}

export default App