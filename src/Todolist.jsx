import { useState } from 'react';

export default function Todolist() {
  let [todo, settodo] = useState([]);
  let [newtodo, setnewtodo] = useState('');

  let addnewtask = () => {
    settodo([...todo, newtodo]);
    setnewtodo('');
  };

  let updatetodovalue = (event) => {
    setnewtodo(event.target.value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          value={newtodo}
          onChange={updatetodovalue}
        />
        <br />
        <br />
        <button onClick={addnewtask}>Add Task</button>
        <br />
        <br />
        <hr />
        <h4>Todo List</h4>
        <ul>
          {todo.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
