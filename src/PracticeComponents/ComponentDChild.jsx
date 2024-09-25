import { memo } from "react";

const ComponentDChild = ({todos, addTodos}) => {
    console.log("Child Rendered");
    return(
        <>
            <button onClick={addTodos}>Add Todo</button>
            {todos.map((todo, index) => {
                return(
                    <p key={index}>{todo}</p>
                )
            })}
        </>
    )
}

export default memo(ComponentDChild);