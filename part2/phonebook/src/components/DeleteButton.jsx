import personService from '../services/persons.js'
const DeleteButton = ({persons, id, setPersons}) => {
    const deletePerson = () => {
        if(window.confirm("Are you sure you want to delete this person?")){
            personService
                .remove(id)
                .then(() => setPersons(persons.filter(person => person.id !== id)))
        }
    }
    return (
        <button style={{display: 'inline'}} onClick={deletePerson} type="button">delete</button>
    )
}

export default DeleteButton