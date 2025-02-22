import {useEffect, useState} from 'react'
import axios from 'axios'
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3001/persons")
            .then(response => {setPersons(response.data)})
        ;
    }, [])
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