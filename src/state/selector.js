import { selector } from "recoil";
import { todoListAtom } from "./atom";

const todoListSelector = selector({
    key: "todoListSelector",
    get: ({ get }) => {
      const list = get(todoListAtom);
  
      return list;
    },
});

export { todoListSelector };