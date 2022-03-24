import {ADD_TODO,DELETE_TODO,TOGGLE_TODO,MARK_TODO,GET_TODO} from "./actionType";

const init={
    todo:[],
}

export const reducer = (state=init, {type,payload}) =>{
    switch(type){
        case ADD_TODO:{
            return {
                ...state,todo:[...state.todo,payload]
            }
        }
        case TOGGLE_TODO:{
            return {
                ...state,todo:state.todo.map((e)=>e.id===payload?{...e,status:!e.status}:e)
            }
        }
        case DELETE_TODO:{
            let a={...state,todo:state.todo.filter((e)=>e.id!==payload)};
            console.log(a);
            return {
                ...state,todo:state.todo.filter((e)=>e.id!==payload)
            }
        }
        case MARK_TODO:{
            return {
                ...state,todo:state.todo.map((e)=>e.id===payload?{...e,mark:!e.mark}:e)
            }
        }
        case GET_TODO:{
            return {
                ...state,todo:state.todo=payload
            }
        }
        default:
            return state
    }
}