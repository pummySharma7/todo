import {ADD_TODO,DELETE_TODO,TOGGLE_TODO,MARK_TODO,GET_TODO} from "./actionType";

export const addTodo=(payload)=>({
    type : ADD_TODO,
    payload:payload
})

export const deleteTodo=(id)=>({
    type : DELETE_TODO,
    payload:id
})

export const toggleTodo=(id)=>({
    type : TOGGLE_TODO,
    payload:id
})

export const markTodo=(payload)=>({
    type:MARK_TODO,
    payload :payload
})

export const getTodo=(payload)=>({
    type:GET_TODO,
    payload:payload
})