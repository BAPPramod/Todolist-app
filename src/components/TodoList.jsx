import React, { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.description && todo.date) {
      setTodos([...todos, todo]);
      setTodo({ description: '', date: '' });
    }
  };

  const handleInputChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Simple Todolist</h2>
      <div style={{ textAlign: 'center' }}>
        <label>Description: </label>
        <input type="text" name="description" value={todo.description} onChange={handleInputChange} />
        <label>Date: </label>
        <input type="date" name="date" value={todo.date} onChange={handleInputChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
