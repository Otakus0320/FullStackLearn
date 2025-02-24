import {useState} from "react";
import axios from "axios"
import personService from "../services/persons.js"

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const person = {
            name: newName,
            phone: newPhone,
            id: String(persons.length + 1)
        }
        if (persons.some(({name}) => name === newName)){
            alert(`${newName} is already added to phone book!`)
        }else {
            personService
                .create(person)
                .then(data => {
                    setPersons([...persons, data])
                })
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
        <form onSubmit={addPerson}>
            <div>
                <div>name: <input value={newName} onChange={handelNewName} /></div>
                <div>number: <input value={newPhone} onChange={handelNewPhone} /></div>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm