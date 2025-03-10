import {useNavigate} from "react-router-dom";
import useField from "../hooks/useField.js";

const CreateNew = ({addNew, setNotification}) => {
    const content = useField("content")
    const author = useField("author")
    const info = useField("info")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addNew({
            content: content.fieldProps.value,
            author: author.fieldProps.value,
            info: info.fieldProps.value,
            votes: 0
        })
        setNotification(content.value)
        navigate("/")
    }

    const handelClear = (e) => {
        e.preventDefault()
        content.reset()
        author.reset()
        info.reset()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input {...content.fieldProps} />
                </div>
                <div>
                    author
                    <input {...author.fieldProps} />
                </div>
                <div>
                    url for more info
                    <input {...info.fieldProps} />
                </div>
                <button type="submit" >create</button>
                <button type='button' onClick={handelClear} >reset</button>
            </form>
        </div>
    )
}

export default CreateNew