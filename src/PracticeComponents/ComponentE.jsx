import { useMemo, useState } from "react"

const expensiveForLoop = (value) => {
    for(let i=1; i<=1000000000; i++){
        value = value + 1;
    }
    return value;
}

const ComponentE = () => {
    const [value, setValue] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = useMemo(() => expensiveForLoop(value), [value]);

    const changeValue = () => {
        setValue((preValue) => {
            return ++preValue;
        })
    }

    const addTodos = () => {
        setTodos((preValues) => {
            return[
                ...preValues,
                "New Todo"
            ]
        })
    }

    return(
        <>
            <h1>Value : {value}</h1>
            <button onClick={changeValue}>+</button>
            <br/><br/>

            <button onClick={addTodos}>Add Todo</button>
            {todos.map((todo) => {
                return(
                    <p>{todo}</p>
                )
            })}

            <br/><br/>

            <h1>Calculation : {calculation}</h1>
        </>
    )
}

export default ComponentE;