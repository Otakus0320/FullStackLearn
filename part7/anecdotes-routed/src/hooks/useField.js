import {useState} from "react";

const useField = (name) => {
    const [value, setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        name,
        value,
        onChange,
    }
}
export default useField