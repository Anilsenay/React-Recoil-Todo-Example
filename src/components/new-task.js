import React, {useState} from 'react'
import '../App.css';

export default function NewTask() {
  const [newTodo, setNewTodo] = useState("");
    return (
        <div className="new-todo-area">
        <input className="add-new-todo" value = { newTodo } onChange={ (e) => setNewTodo(e.target.value) } placeholder="New Task"/>
        <div className="add-new-todo-button" onClick={() => {}}>Add</div>
      </div>
    )
}
