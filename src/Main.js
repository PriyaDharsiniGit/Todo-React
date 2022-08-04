
import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { Todolist } from "./Todolist";
// import './App.css'

export const Main = () => {
  const [todo, setTodo] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({});

  const ascending=()=>{
      const ascendingorder =todo .sort((a,b)=>
      a.name > b.name ? 1 : -1

      );
      setTodo([...ascendingorder])

  }
  const decending=()=>{
    const decendingorder =todo .sort((a,b)=>
    a.name < b.name ? 1 : -1

    );
    setTodo([...ascendingorder])

}
  const TodoItems = (name) => {
    const newTodo = [...todo, { name, id: todo.length }];
    setTodo(newTodo);
  };
  const updateTodoList = (value) => {
    let updatedTodo = [...todo];
    updatedTodo.splice(value.id, 1);
    updatedTodo.push(value);
    updatedTodo.sort((a, b) => a.id - b.id);
    setTodo(updatedTodo);
    setUpdateTodo({});
  };
  const deleteTodos = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const editTodos = (index) => {
    setUpdateTodo(todo[index]);
  };

  return (
    <div id="heading">
      <h1>Todo List</h1>
      Create Your Task
      <Todoinput
        TodoItems={TodoItems}
        updateTodoList={updateTodoList}
        updateTodo={updateTodo}
      />
      <table style={{textAlign:'center'}}>
          <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Action</th>
              
          </tr>
          <button onClick={ascending}>asc</button>
          <button onClick={decending}>dsc</button>
      
      {todo.map((data, index) => (
          <tr>
              <td>{data.id}</td>
              <td>
            <Todolist
            key={index}
            index={index}
            data={data} 
            />
        </td>
        <td>
        <button onClick={() => deleteTodos(index)}>Delete</button>
        <button onClick={() => editTodos(index)}>Edit</button>
        </td>
        </tr>
      ))}
       </table>
      
    
    </div>
  );
};