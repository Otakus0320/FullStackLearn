const Filter = ({filter, setFilter}) => {
    const handleNerFilter = (event) => {
        setFilter(event.target.value);
    }
    return(
        <div>
            filter: <input value={filter} onChange={handleNerFilter} />
        </div>
    )
}
export default Filter