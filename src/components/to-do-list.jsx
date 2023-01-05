import React, { useContext } from 'react'
import Button from './button'
import { ToDoContext } from "../contexts/to-do-context"

const ToDoList = ({title, date, id, time}) => {
    const { deletePostHandeler } = useContext(ToDoContext)


    return (
        <li>
            <div className="list-wrap">
                <div className="left-side">
                    <h4 className="title">{title}</h4>
                    {date && <p>Date:- {date} - Time:- {time}</p>}
                    
                    
                </div>
                <div className="right-side">
                    <Button classNames="btn" >Edit</Button>
                    <Button classNames="btn delete" onClick={() => deletePostHandeler(id)}>Delete</Button>
                </div>
            </div>
            {/* {show && 
                <div className="hidden popup-list">
                    <div className="left-side">
                        <input type="text" value={editInput} onChange={(e)=> setEditInput(e.target.value)} />
                    </div>
                    <div className="right-side">
                        <button className="btn save" onClick={()=> {
                            editHander(id, editInput)
                            setShow((prevState) => !prevState)
                        }}>Update</button>
                        
                    </div>
                </div> 
            } */}
        </li>
    )
}
export default ToDoList