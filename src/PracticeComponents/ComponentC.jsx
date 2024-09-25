import { useRef, useState } from "react";

const ComponentC = () => {
    const inputReference = useRef("");
    const [input, setInput] = useState("");

    const change = (event) => {
        setInput(event.target.value);
    }

    const enableInputField = () => {
        inputReference.current.disabled = false;
    }

    const focusInputField = () => {
        inputReference.current.focus();
    }

    const disableInputField = () => {
        inputReference.current.disabled = true;
    }

    return(
        <>
            <input ref={inputReference} name="inputField" value={input} onChange={change} disabled />
            <br/><br/>
            <button onClick={enableInputField}>Enable Input Field</button> &nbsp;
            <button onClick={focusInputField}>Focus Input Field</button> &nbsp;
            <button onClick={disableInputField}>Disable Input Field</button>
        </>
    )
}

export default ComponentC;