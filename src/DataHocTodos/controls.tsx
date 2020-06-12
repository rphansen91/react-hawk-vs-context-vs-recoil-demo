import { useState } from "react";
import { contextControllerHOC, useAsyncState } from "data-hoc";
import { ITodo, wait, initialTodoList, buildTodo } from "../todoUtils";

export const DataHocTodoListControls = contextControllerHOC(useTodoListControls);
export default DataHocTodoListControls

export function useTodoListControls() {
  const [createText, setCreateText] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [create, createActions] = useAsyncState<ITodo>();
  const [save, saveActions] = useAsyncState<ITodo>();
  const [updating, setUpdating] = useState<ITodo | null>(null);
  const [todoList, setTodoList] = useState<ITodo[]>(initialTodoList);
  const pagedTodoCount = Math.ceil(todoList.length / perPage);
  const pagedTodoList = todoList.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
  const createTodo = async (text: string) => {
    try {
      createActions.setLoading();
      if (!text) {
        throw new Error("Text is required");
      }
      const newTodo = buildTodo(text)
      await wait(1000);
      setTodoList((list) => list.concat(newTodo));
      setCreateText("");
      createActions.setData(newTodo);
      return newTodo;
    } catch (e) {
      createActions.setError(e.message);
    }
  };
  const saveTodo = async (todo: ITodo | null, update: Partial<ITodo>) => {
    try {
      saveActions.setLoading();
      const todoIndex = todoList.findIndex(_todo => todo === _todo)
      if (todoIndex === -1) {
        throw new Error("Todo not found");
      }
      if (typeof update.text === 'string' && !update.text) {
        throw new Error("Text is required");
      }
      const newTodo = { ...todoList[todoIndex], ...update }
      const newList = todoList.slice(0)
      newList[todoIndex] = newTodo
      await wait(1000);
      setTodoList(newList);
      closeUpdate();
      saveActions.setData(newTodo);
      return newTodo;
    } catch (e) {
      saveActions.setError(e.message);
    }
  };
  const removeTodo = (todo: ITodo): ITodo => {
    setTodoList((list) => list.filter((_todo) => todo !== _todo));
    return todo;
  };
  const toggleTodo = (todo: ITodo): ITodo => {
    setTodoList((list) =>
      list
        .slice(0)
        .map((_todo) =>
          todo !== _todo ? _todo : { ..._todo, complete: !_todo.complete }
        )
    );
    return todo;
  };
  const updateTodo = (todo: ITodo) => {
    setUpdateText(todo.text);
    setUpdating(todo);
  };
  const closeUpdate = () => setUpdating(null);
  return {
    page,
    setPage,
    perPage,
    setPerPage,
    createText,
    setCreateText,
    updateText,
    setUpdateText,
    create,
    save,
    todoList,
    pagedTodoCount,
    pagedTodoList,
    updating,
    closeUpdate,
    updateTodo,
    createTodo,
    removeTodo,
    toggleTodo,
    saveTodo,
  };
}
