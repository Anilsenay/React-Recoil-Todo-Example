import React, {useState} from 'react'
import '../App.css';

import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../state/atom";


export default function NewTask() {
  const [newTodo, setNewTodo] = useState("");
  const setTodoList = useSetRecoilState(todoListAtom);

    return (
        <div className="new-todo-area">
        <input className="add-new-todo" value = { newTodo } onChange={ (e) => setNewTodo(e.target.value) } placeholder="New Task"/>
        <div className="add-new-todo-button" onClick={() => setTodoList((todos) => [...todos, newTodo])}>Add</div>
      </div>
    )
}
