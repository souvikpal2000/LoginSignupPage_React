import { useCallback, useState } from "react";
import ComponentDChild from "./ComponentDChild";

const ComponentD = () => {
    const [value, setValue] = useState(0);
    const [todos, setTodos] = useState([]);

    const incrementing = () => {
        setValue((preValue) => {
            return ++preValue;
        })
    }

    const addTodos = useCallback(() => {
        setTodos((preValues) => {
            return[
                ...preValues,
                "New Todo"
            ]
        })
    }, [todos]);

    return(
        <>
            <h1>Value : {value}</h1>
            <button onClick={incrementing}>+</button>
            <ComponentDChild todos={todos} addTodos={addTodos} />
        </>
    )
}

export default ComponentD;