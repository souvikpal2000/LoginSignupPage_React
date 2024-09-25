import { useEffect, useRef, useState } from "react";

const ComponentA = () => {
    const [value, setValue] = useState(0);
    const previousValue = useRef(0);

    useEffect(() => {
        previousValue.current = value;
    }, [value]);

    const increment = () => {
        setValue((preValue) => {
            return (
                ++preValue
            )
        })
    }

    const decrement = () => {
        setValue((preValue) => {
            if(preValue == 0){
                return 0;
            }
            return(
                --preValue
            )
        })
    }

    return(
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>Initial value : {value}</h1> 
            <h1>Previous Value : {previousValue.current}</h1>
        </>
    )
}

export default ComponentA;