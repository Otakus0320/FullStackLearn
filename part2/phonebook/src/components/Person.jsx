import axios from "axios";

const DeleteButton = ({persons, id, setPersons}) => {
    const deletePerson = () => {
        axios
            .delete(`http://localhost:3001/persons/${id}`)
            .then(() => setPersons(persons.filter(person => person.id !== id)))
    }
    return (
        <button style={{display: 'inline'}} onClick={deletePerson} type="button">delete</button>
    )
}

const Person = ({persons, name, phone, id, setPersons}) => {
    return (
        <div>
            <p style={{display: 'inline'}}>{name} {phone} </p>
            <DeleteButton persons={persons} id={id} setPersons={setPersons} />
        </div>
    )
}
export default Person