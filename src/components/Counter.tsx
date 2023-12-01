import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Vite n Jest</h1>
            <p>{count}</p>
            <button onClick={()=>setCount((value)=>value+1)}>Add Count</button>
        </>
    )
}