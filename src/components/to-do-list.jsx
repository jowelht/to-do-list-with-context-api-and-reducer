import React, { useContext, useState } from 'react'
import Button from './button'
import { ToDoContext } from "../contexts/to-do-context"

const ToDoList = ({title, date, id, time}) => {
    const { deletePostHandeler, editHander } = useContext(ToDoContext)
    const [editInput, setEditInput] = useState(title)
    const [show, setShow] = useState(false)
    const showEditHandel = () => {
        setShow((prevState) => !prevState)
    }
    return (
        <li>
            <div className="list-wrap">
                <div className="left-side">
                    <h4 className="title">{editInput}</h4>
                    {date && <p>Date:- {date} - Time:- {time}</p>}
                </div>
                <div className="right-side">
                    <Button classNames="btn" onClick={showEditHandel}>Edit</Button>
                    <Button classNames="btn delete" onClick={() => deletePostHandeler(id)}>Delete</Button>
                </div>
            </div>
            {show && 
                <div className="hidden popup-list">
                    <div className="left-side">
                        <input type="text" value={editInput} onChange={(e)=> setEditInput(e.target.value) } />
                        {/* <input type="text" value={title} onChange={(e)=> setEditInput(e.target.value)} /> */}
                    </div>
                    <div className="right-side">
                        <button className="btn save" onClick={()=> {
                            editHander(id, editInput)
                            setShow((prevState) => !prevState)
                        }}>Update</button>
                    </div>
                </div> 
            }
        </li>
    )
}
export default ToDoList