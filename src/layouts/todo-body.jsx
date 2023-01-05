import React, { useContext } from 'react'
import TaskAddForm from '../components/new-task-form'
import SearchForm from '../components/search-form'
import ToDoList from "../components/to-do-list"
import { ToDoContext } from "../contexts/to-do-context"
const ToDoBody = () => {
    const { loading, error, postData} = useContext(ToDoContext)
    return (
        <div className="container">
            <div className="todo-hearder-wrap">
                <TaskAddForm/>
                <SearchForm/>
            </div>
            <ul className='to-do-list-nav'>
                {error && <p className="text-center mt-10">Data is Missing</p>}
                {loading ? "Loading..." : postData?.map((item) => {
                    return (
                        <ToDoList 
                            key={item.id} 
                            id={item.id} 
                            title={item.text} 
                            date={item?.date}
                            time={item?.time}
                        />
                    )
                }) }
                
            </ul>
        </div>
    )
}
export default ToDoBody