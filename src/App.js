import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './store/counter';
import {addTodo, removeTodo, updateTodo} from './store/todos';

function App() {
  
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const count = useSelector(state => state.counterReducer.count)
  const {todos} = useSelector(state => state.todoReducer);
  console.log(count)

  const addNewTodo = () => {
    dispatch(addTodo({
      id: Date.now(),
      text: inputValue
    }))
    setInputValue("")
  }

  //if (!todos.length) return null

  return (
    <div>

    <p>New todo</p>
    <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
    <button onClick={addNewTodo}>add</button>

    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
        </li>
      ))}
    </ul>

    <div>Number of todo: {todos.length}</div>
    
    
    
    </div>
  );
}

export default App;
