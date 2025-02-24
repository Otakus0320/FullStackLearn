import DeleteButton from './DeleteButton'

const Person = ({persons, name, phone, id, setPersons}) => {
    return (
            <tr>
                <td>{name}</td>
                <td> {phone} </td>
                <td><DeleteButton persons={persons} id={id} setPersons={setPersons} /></td>
            </tr>
    )
}
export default Person