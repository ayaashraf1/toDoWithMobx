import React ,{ useEffect } from "react";
import "./ToDoListing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { observer } from "mobx-react";
import store from "../../state/store";

function ToDoListing() {
  // const editThisToDo = (e) =>{
  //   const todoId = Number(e.currentTarget.parentElement.parentElement.getAttribute('id'));
  //   console.log(todoId);
  //   //to do should convert div to input to can edit and save it in state.
  // }
  useEffect(() => {
    store.loadToDos();
  }, []);
  return (
    <>
      {store.todos.map((todo) => {
        return (
          <div 
          onClick={()=>{todo.done = !todo.done}}
          key={todo.id} 
          id={todo.id} 
          className={'toDo-item' + (todo.done=== true ? " done-status" : "")}>

            <input type="text" value={todo.text} readOnly={true} />
            <div className="toDo-item-actions">
            <span 
               onClick={()=>{store.removeToDoById(todo.id)}} id={todo.id}>
              <FontAwesomeIcon icon={faTrashCan} />
              </span>
            {/* <span onClick={editThisToDo} id={todo.id}><FontAwesomeIcon icon={faPenSquare} /></span> */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default observer(ToDoListing);
