import {
  useHawkState,
  useHawkSetState,
} from "react-hawk";
import { ITodo, wait, buildTodo } from "../todoUtils";
import {
  todoListState,
  createState,
  createTextState,
  saveState,
  updateTextState,
  updatingState,
  pageState,
  perPageState,
} from "./state";

export const useSetPage = () => {
  const setPage = useHawkSetState(pageState);
  return setPage
}
export const useSetPerPage = () => {
  const setPerPage = useHawkSetState(perPageState);
  return setPerPage
}

export const useSetCreateText = () => {
  const setCreateText = useHawkSetState(createTextState);
  return setCreateText
}

export const useCreateTodo = () => {
  const setTodoList = useHawkSetState(todoListState);
  const setCreateText = useHawkSetState(createTextState);
  const setCreate = useHawkSetState(createState);
  const createTodo = async (text: string) => {
    try {
      setCreate({ loading: true, data: null, error: '' })
      if (!text) {
        throw new Error("Text is required");
      }
      const newTodo = buildTodo(text)
      await wait(1000);
      setTodoList((list) => list.concat(newTodo));
      setCreateText("");
      setCreate({ loading: false, data: newTodo, error: '' })
      return newTodo;
    } catch (e) {
      setCreate({ loading: false, data: null, error: e.message })
    }
  };
  return createTodo;
};

export const useSetUpdateText = () => {
  const setUpdateText = useHawkSetState(updateTextState);
  return setUpdateText
}

export const useSaveTodo = () => {
  const todoList = useHawkState(todoListState);
  const setTodoList = useHawkSetState(todoListState);
  const setUpdating = useHawkSetState(updatingState);
  const setSave = useHawkSetState(saveState);
  const saveTodo = async (todo: ITodo | null, update: Partial<ITodo>) => {
    try {
      setSave({ loading: true, data: null, error: '' })
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
      setUpdating(null);
      setSave({ loading: false, data: newTodo, error: '' })
      return newTodo;
    } catch (e) {
      setSave({ loading: false, data: null, error: e.message })
    }
  };
  return saveTodo;
};

export const useRemoveTodo = () => {
  const setTodoList = useHawkSetState(todoListState);
  const removeTodo = (todo: ITodo) => {
    setTodoList((list) => list.filter((_todo) => todo !== _todo));
    return todo;
  };
  return removeTodo;
};

export const useToggleTodo = () => {
  const setTodoList = useHawkSetState(todoListState);
  const toggleTodo = (todo: ITodo) => {
    setTodoList((list) =>
      list
        .slice(0)
        .map((_todo) =>
          todo !== _todo ? _todo : { ..._todo, complete: !_todo.complete }
        )
    );
    return todo;
  };
  return toggleTodo;
};

export const useUpdateTodo = () => {
  const setUpdateText = useHawkSetState(updateTextState);
  const setUpdating = useHawkSetState(updatingState);
  const updateTodo = (todo: ITodo) => {
    setUpdateText(todo.text);
    setUpdating(todo);
  }
  return updateTodo
};

export const useCloseUpdate = () => {
  const setUpdating = useHawkSetState(updatingState);
  const closeUpdate = () => {
    setUpdating(null);
  }
  return closeUpdate
};