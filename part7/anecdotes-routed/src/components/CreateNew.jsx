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
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0
        })
        setNotification(content.value)
        navigate("/")
    }

    const handelClear = (e) => {
        e.preventDefault()
        content.clear()
        author.clear()
        info.clear()
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input name={content.name} value={content.value} onChange={content.onChange} />
                </div>
                <div>
                    author
                    <input name={author.name} value={author.value} onChange={author.onChange} />
                </div>
                <div>
                    url for more info
                    <input name={info.name} value={info.value} onChange={info.onChange} />
                </div>
                <button type="submit" >create</button>
                <button type='button' onClick={handelClear} >reset</button>
            </form>
        </div>
    )
}

export default CreateNew