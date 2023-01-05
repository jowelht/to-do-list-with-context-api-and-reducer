
import React, { useContext } from "react";
import { ToDoContext } from "../contexts/to-do-context.js"


const TaskAddForm = () => {
    const {inputValue, newTaskInputHandler, submitHandler} = useContext(ToDoContext)
    return (
        <form className="input-box">
            <input type="text" value={inputValue} onChange={newTaskInputHandler} />
            <input type="submit" className="btn" onClick={submitHandler} />
        </form>
    );
};

export default TaskAddForm;
