import Person from "./Person.jsx"

const Persons = ({persons, filter, setPersons}) => {
    persons = filter ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())) : persons
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
            </thead>
            {persons.map(({name, phone, id}) => (<Person key={name} persons={persons} name={name} phone={phone} id={id} setPersons={setPersons} />))}
        </table>
    )
}
export default Persons