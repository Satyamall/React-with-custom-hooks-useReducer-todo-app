import { useState } from "react"


export default function TodoInput({onAdd}){

    const [text,setText]=useState("");

    const handleClick =(e)=>{
        e.preventDefault();
        onAdd(text);
        setText("");
    }
    return(
        <div>
            <input type="text" placeholder="Add Something" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}