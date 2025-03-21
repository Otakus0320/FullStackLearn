import {useState} from "react";

const useField = (name) => {
    const [value, setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        fieldProps:{
            name,
            value,
            onChange
        },
        reset,
    }
}
export default useField