import { useEffect, useRef, useState } from "react"

const ComponentB = () => {
    const [input, setInput] = useState("");
    const componentRendered = useRef(0);

    useEffect(() => {
        componentRendered.current = componentRendered.current + 1;
    });

    const valueChange = (event) => {
        setInput(event.target.value);
    }

    return(
        <>
            <input name="inputField" id="inputField" value={input} onChange={valueChange} />
            <h1>Component Rendered : {componentRendered.current}</h1>
        </>
    )
}

export default ComponentB;