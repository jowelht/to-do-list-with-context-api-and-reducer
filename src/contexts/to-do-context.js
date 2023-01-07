import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
const ToDoContext = createContext()
const apiEndPoint = "http://localhost:3000/user"

const initialState = {
    isLoading: true,
    post: [],
    error: "",
    inputValue: "",
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SUCCESS":
            return {
                post: action.payload,
                isLoading: false,
                error: "",
            }
        case "ERROR": 
            return {
                isLoading: false,
                post: [],
                error: "There is Error"
            }
        case "NEW_TASK_Value": 
            return {
                ...state,
                inputValue : action.value
            }
        case "SUBMIT": 
            return {
                ...state,
                inputValue : action.submit,
            }
        // case "SEARCH_RESULT": 
        //     return {
        //         ...state,
        //         post : action.searchReasult,
        //     }
        default:
            return state
    }
}


function ToDoProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // ==============================
    // All Post Data Get
    // ==============================
    useEffect(() => {
        fatchData()
    }, [])

    const fatchData = async () => {
        try {
            const { data } = await axios.get(apiEndPoint)
            dispatch({type: "SUCCESS", payload: data})
        } catch (err) {
            dispatch({type: "ERROR"})
        }
    }

    // ==============================
    // New Task Added
    // ==============================




    const createNewPost = async (newPost) => {
        try {
            await axios.post(apiEndPoint, newPost, {
                headers: { 
                    'Content-Type': 'application/json;charset=UTF-8', 
                    "Access-Control-Allow-Origin": "*", 
                    "Accept": "application/json" 
                }
            })
            dispatch({type: "SUCCESS", payload: [...state.post, newPost]})
            
        } catch(err) {
            dispatch({type: "ERROR"})
        }
    }

    const newTaskInputHandler = (e) => {
        dispatch({type: "NEW_TASK_Value", value: e.target.value})
    }

    const currentDate = new Date().toLocaleDateString()
    const currentTime = new Date().toLocaleTimeString()

    const submitHandler = (e) => {
        e.preventDefault();
        if(state.inputValue === "" ) return;
        const post = {
            id: uuidv4(),
            text: state.inputValue,
            date: currentDate,
            time: currentTime
        }
        dispatch(
            {
                type: "SUBMIT", 
                submit: createNewPost(post)
            }
        )
        dispatch({type: "NEW_TASK_Value", value: ""})
    }

    // ==============================
    // Task Delete
    // ==============================
    const deletePostHandeler = async (id) => {
        await axios.delete(`${apiEndPoint}/${id}`)
        dispatch({type: "SUCCESS", payload: state.post.filter((item)=> item.id !== id)})
    }

    // ==============================
    // Task Update
    // ==============================

    const editHander = async (id, updateValue) => {
        await axios.put(`${apiEndPoint}/${id}`, {
            text: updateValue,
            date: currentDate,
            time: currentTime
        })
    }

    // ==============================
    // Searching To do Task
    // ==============================

    const searchHandler = (e) => {
        const serachInput =  e.target.value;
        const searchData = async () => {
            const apiData = await axios.get(`${apiEndPoint}?q=${serachInput}`)
            
            dispatch({type: "SUCCESS", payload: apiData.data})
        }
       searchData()
    }


    // ==============================
    // Provider All Value 
    // ==============================
    const value = {
        loading: state.isLoading,
        error: state.error,
        postData: state.post,
        inputValue: state.inputValue,
        newTaskInputHandler,
        submitHandler,
        deletePostHandeler,
        editHander,
        searchHandler
    }

    return (
        <ToDoContext.Provider value={value}>
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext }

export default ToDoProvider