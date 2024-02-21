import React, { useRef } from "react";
import { addExp } from "../redux/expSlice"
import { useDispatch } from "react-redux";

function Expenditure() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()


    const addNewExp = () => {
        console.log(inputRef.current.value)
        const newExp = inputRef.current.value
        dispatch(addExp(newExp))
    }
    return (
        <div>
            <h1>Expenditure</h1>
            <input type="text" ref={inputRef} />
            <button onClick={addNewExp}>Add Exp</button>
        </div>
    );
}

export default Expenditure;
