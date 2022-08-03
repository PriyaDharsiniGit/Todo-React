import React from 'react';
import { List } from './List';


export const Todolist = ({ data, index, deleteTodos, editTodos }) => {
  return (
    <div id="Todo_List">
      <List name={data} />
     
      
    </div>
  );
};