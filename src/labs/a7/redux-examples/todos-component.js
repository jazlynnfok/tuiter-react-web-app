import React, {useState} from "react"; //import useState to work with local state
import {useSelector, useDispatch} from "react-redux"; //import useSelector, useDispatch hook to call reducers
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer"; //import reducer function exported by todos-reducer

const Todos = () => {
const todos
    = useSelector(state => state.todos); //retrieve todos from reducer state and assign to local todos constant
const [todo, setTodo] = useState({do: ''}); //create todo local state variable
const dispatch = useDispatch(); //get dispatcher to invoke reducer functions
const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
  }
 
const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
}
const createTodoClickHandler = () => { //handle click event of button
    dispatch(addTodo(todo)); //call reducer function passing new todo as the payload in the action object
}
const todoChangeHandler = (event) => { //handle keystroke changes in input field
    const doValue = event.target.value; //get data from input field
    const newTodo = { //create new todo object instance
        do: doValue //setting the todo's do property
    };
    setTodo(newTodo); //change local state todo variable
}
 return(
   <>
     <h3>Todos</h3>
     <ul className="list-group">
        <li className="list-group-item"> {/* add a new line item at the top */}
        <button onClick={createTodoClickHandler}
               className="btn btn-primary w-25 
                          float-end">
         Create</button>
        <input 
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"/>
        </li>
       {
         todos.map((todo, index) =>
           <li key={todo._id} className="list-group-item"> {/*iterate over todos array and render line item element fro each todo object */}
            <button onClick={() => 
            deleteTodoClickHandler(index)}
            className="btn btn-danger 
                        float-end ms-2">
            Delete
            </button>
            <input type="checkbox"
            checked={todo.done}
            onChange={() => 
             toggleTodoDone(todo)}
            className="me-2"/>
             {todo.do} {/*display do property containing todo text */}
           </li>
         )
       }
     </ul>
   </>
 );
};
export default Todos;

