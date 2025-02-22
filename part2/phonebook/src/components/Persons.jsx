import Person from "./Person.jsx";

const Persons = ({persons, filter}) => {
    persons = filter ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())) : persons
    return (
        <div>
            {persons.map(({name, phone}) => (<Person key={name} name={name} phone={phone} />))}
        </div>
    )
}
export default Persons