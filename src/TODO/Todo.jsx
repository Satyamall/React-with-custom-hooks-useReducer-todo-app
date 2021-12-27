
import TodoInput from "./TodoInput";
import {
    getTodosFailure,
    getTodosRequest,
    getTodosSuccess,
    addTodo
  } from "../Hooks/action";
import {v4 as uuid} from "uuid";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../Hooks/AppContextProvider";
import TodoList from "./TodoList";

export default function Todo(){
    const [dispatch]=useContext(AppContext);
    const handleAdd = (text) => {
        const action = addTodo({
          title: text,
          status: false,
          id: uuid()
        });
        const config = {
            url: "https://json-server-mocker-masai.herokuapp.com/tasks",
            method: "post",
            data: action.payload
        };
        // const requestAction = getTodosRequest();
        // dispatch(requestAction);
        // dispatch(action);
        return axios(config)
         .then((res)=>{
            const successAction = getTodosSuccess(res.data);
            dispatch(successAction);
         })
         .catch((res)=>{
            const failureAction = getTodosFailure();
            dispatch(failureAction);
         })
      };
    
    return(
        <div>
            <h1>TODO APP</h1>
            <TodoInput onAdd={handleAdd} />
            <TodoList/>
        </div>
    )
}