import { hawk, hawkeye, useHawkSetState, useHawkState } from './store'
import { ITodo, initialTodoList } from "../todoUtils";

interface Async<V> {
  loading: boolean;
  data: V | null;
  error: string;
}

export const createTextState = hawk<string>({
  key: "createText",
  default: "",
});

export const createState = hawk<Async<ITodo>>({
  key: "create",
  default: {
    loading: false,
    data: null,
    error: "",
  },
});

export const updateTextState = hawk<string>({
  key: "updateText",
  default: "",
});

export const saveState = hawk<Async<ITodo>>({
  key: "save",
  default: {
    loading: false,
    data: null,
    error: "",
  },
});

export const updatingState = hawk<null | ITodo>({
  key: "updating",
  default: null,
});

export const todoListState = hawk<ITodo[]>({
  key: "todoList",
  default: initialTodoList,
});

export const pageState = hawk<number>({
  key: "page",
  default: 1,
});

export const perPageState = hawk<number>({
  key: "perPage",
  default: 10,
});

export const pagedTodoCountState = hawkeye<number>({
  key: "pagedTodoCountState",
  get: ({ get }) => {
    const perPage = get(perPageState);
    const list = get(todoListState);
    return Math.ceil(list.length / perPage);
  },
});

export const pagedTodoListState = hawkeye<ITodo[]>({
  key: "pagedTodoListState",
  get: ({ get }) => {
    const page = get(pageState);
    const perPage = get(perPageState);
    const list = get(todoListState);
    return list.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
  },
});