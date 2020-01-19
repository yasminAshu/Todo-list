
import {apiClient} from './api-client'

export const addTodo = (todo) => (dispatch) => {
    let todos = { name: todo }
         apiClient.createTodo(todos).then(res => {
            dispatch({
                    type:"CREATE_TODO_SUCCESS",
                    payload:{name: todo , id: res.payload.id}
                })
        }).catch((error)=>{
            dispatch({
                    type:"CREATE_TODO_ERROR",
                    payload:error
                })
        })
    }


    export const getTodos = () => (dispatch) => {
             apiClient.getAllTodos().then(res => {
                dispatch({
                        type:"GETALL_TODO_SUCCESS",
                        payload:res.payload
                    })
            }).catch((error)=>{
                dispatch({
                        type:"GETALL_TODO_ERROR",
                        payload:error
                    })
            })
        }


        export const deleteTodo = (id) => (dispatch) => {
            apiClient.deleteTodo(id).then(res => {
                console.log("response=======.",res)
               dispatch({
                       type:"DELETE_TODO_SUCCESS",
                       payload:id
                   })
           }).catch((error)=>{
               dispatch({
                       type:"DELETE_TODO_ERROR",
                       payload:error
                   })
           })
       }