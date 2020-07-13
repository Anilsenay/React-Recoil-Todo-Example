import React from 'react'

import TodoItem from './todo-item';

import { todoListSelector } from "../state/selector";
import { useRecoilValue } from "recoil";


export default function TodoList() {

  const todos = useRecoilValue(todoListSelector);

    return (
        <div>
            {todos.map((item, index) => (
                <TodoItem key={item.name} item={item} index={index} />
            ))}
        </div>
    )
}
