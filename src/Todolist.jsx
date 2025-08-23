import { useState } from 'react';

export default function Todolist() {
  let [todo, settodo] = useState([]);

  let updatetask = () => {
    settodo(todo);
  };
  return (
    <>
      <div>
        <input type="text" placeholder="Enter the task" />
        <br />
        <br />
        <button onClick={updatetask}>Add Task</button>
        <br />
        <br />
        <hr />
        <h4>Todo List</h4>
        <ul>
          {todo.map((todo) => {
            <li>{todo}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
