const Course = ({course}) => {
    const name = course.name
    const parts = course.parts
    console.log(parts);

    return (
        <div>
            <h2>{name}</h2>
            {parts.map(part => (<p key={part.id}>{part.name} {part.exercises}</p>))}
        </div>
    )
}
export default Course