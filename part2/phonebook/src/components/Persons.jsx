import Person from "./Person.jsx"

const Persons = ({persons, filter, setPersons}) => {
    persons = filter ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())) : persons
    return (
        <div>
            {persons.map(({name, phone, id}) => (<Person key={name} persons={persons} name={name} phone={phone} id={id} setPersons={setPersons} />))}
        </div>
    )
}
export default Persons