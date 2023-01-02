import React, { useState } from 'react';
import './App.scss';
import {Todo} from"./models/models"
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([])

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
  }

  if(todo){
    setTodos([...todos, {id: Date.now(),todo, isDone:false}]);
    setTodo("");
  }
  console.log(todos);
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList/>
        
    </div>
  );
}

export default App;
