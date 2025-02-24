const AddPerson = ({addMessage}) => {
    if (addMessage === "") {
        return null
    }else {
        return(
            <div className="success">
                {addMessage}
            </div>
        )
    }
}
export default AddPerson