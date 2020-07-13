import { atom } from "recoil";

const todoListAtom = atom({
    key: "todoList",
    default: [
        {todo: "A task not completed", isDone: false},
        {todo: "A task completed", isDone: true},
    ],
  });

  
export {todoListAtom}