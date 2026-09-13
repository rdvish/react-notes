import React from 'react';
import Todo from './Todo';
function Todos(props) {
  return (
    <div className="container" >
      <h3 className=" " >Todos List</h3>
      <div className="  overflow-auto d-block" style={{maxHeight: "400px"}}>
        {props.todos.length===0? "No Todos to display":
      props.todos.map((todo) => (
        <Todo  key={todo.sno} todo={todo} onComplete={props.onComplete} onDelete={props.onDelete}/>
      ))}
      </div>
      
    </div>
  );
}

export default Todos;

