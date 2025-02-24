import {useEffect, useState} from 'react'
import Persons from "./components/Persons.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Filter from "./components/Filter.jsx"
import AddPerson from "./components/AddPerson.jsx";
import personService from "./services/persons.js"

const App = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        personService
            .getAll()
            .then(data => {setPersons(data)})
        ;
    }, [])
    const [filter, setFilter] = useState("")
    const [addMessage, setAddMessage] = useState("")
    return (
        <div>
            <h2>Phonebook</h2>
            <AddPerson addMessage={addMessage} />
            <Filter filter={filter} setFilter={setFilter} />
            <h3>Add a new</h3>
            <PersonForm setAddMessage={setAddMessage} persons={persons} setPersons={setPersons} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} setPersons={setPersons} />
        </div>
    )
}

export default App