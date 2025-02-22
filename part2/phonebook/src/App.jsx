import { useState } from 'react'
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '040-123456'},
        { name: 'Ada Lovelace', phone: '39-44-5323523'},
        { name: 'Dan Abramov', phone: '12-43-234345'},
        { name: 'Mary Poppendieck', phone: '39-23-6423122'}
    ])
    const [filter, setFilter] = useState("")
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h3>Add a new</h3>
            <PersonForm persons={persons} setPersons={setPersons} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App