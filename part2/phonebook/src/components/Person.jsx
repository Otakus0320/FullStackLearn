import DeleteButton from './DeleteButton'

const Person = ({persons, name, phone, id, setPersons}) => {
    return (
        <div>
            <p style={{display: 'inline'}}>{name} {phone} </p>
            <DeleteButton persons={persons} id={id} setPersons={setPersons} />
        </div>
    )
}
export default Person