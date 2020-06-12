import {
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
} from "./atoms";

export const useSetPage = () => {
  const setPage = useSetRecoilState(pageState);
  return setPage
}
export const useSetPerPage = () => {
  const setPerPage = useSetRecoilState(perPageState);
  return setPerPage
}

export const useSetCreateText = () => {
  const setCreateText = useSetRecoilState(createTextState);
  return setCreateText
}

export const useCreateTodo = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const setCreateText = useSetRecoilState(createTextState);
  const setCreate = useSetRecoilState(createState);
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
  const setUpdateText = useSetRecoilState(updateTextState);
  return setUpdateText
}

export const useSaveTodo = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const setUpdating = useSetRecoilState(updatingState);
  const setSave = useSetRecoilState(saveState);
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
  const setTodoList = useSetRecoilState(todoListState);
  const removeTodo = (todo: ITodo) => {
    setTodoList((list) => list.filter((_todo) => todo !== _todo));
    return todo;
  };
  return removeTodo;
};

export const useToggleTodo = () => {
  const setTodoList = useSetRecoilState(todoListState);
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
  const setUpdateText = useSetRecoilState(updateTextState);
  const setUpdating = useSetRecoilState(updatingState);
  const updateTodo = (todo: ITodo) => {
    setUpdateText(todo.text);
    setUpdating(todo);
  }
  return updateTodo
};

export const useCloseUpdate = () => {
  const setUpdating = useSetRecoilState(updatingState);
  const closeUpdate = () => {
    setUpdating(null);
  }
  return closeUpdate
};