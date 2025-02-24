import {useState} from "react"
import personService from "../services/persons.js"

const PersonForm = ({setAddMessage, persons, setPersons}) => {
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
                .then(data => {setPersons([...persons, data])})
                .then(() => {setAddMessage(`Added ${newName}`)})
            setTimeout(() => setAddMessage(""), 2000)
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
            <table>
                <tbody>
                <tr>
                    <td>name:</td><td><input value={newName} onChange={handelNewName} /></td>
                </tr>
                <tr>
                    <td>number:</td><td><input value={newPhone} onChange={handelNewPhone} /></td>
                </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm