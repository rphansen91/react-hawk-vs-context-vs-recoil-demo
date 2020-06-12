import { atom, selector } from "recoil";
import { ITodo, initialTodoList } from "../todoUtils";

interface Async<V> {
  loading: boolean;
  data: V | null;
  error: string;
}

export const createTextState = atom<string>({
  key: "createText",
  default: "",
});

export const createState = atom<Async<ITodo>>({
  key: "create",
  default: {
    loading: false,
    data: null,
    error: "",
  },
});

export const updateTextState = atom<string>({
  key: "updateText",
  default: "",
});

export const saveState = atom<Async<ITodo>>({
  key: "save",
  default: {
    loading: false,
    data: null,
    error: "",
  },
});

export const updatingState = atom<null | ITodo>({
  key: "updating",
  default: null,
});

export const todoListState = atom<ITodo[]>({
  key: "todoList",
  default: initialTodoList,
});

export const pageState = atom<number>({
  key: "page",
  default: 1,
});

export const perPageState = atom<number>({
  key: "perPage",
  default: 10,
});

export const pagedTodoCountState = selector({
  key: "pagedTodoCountState",
  get: ({ get }) => {
    const perPage = get(perPageState);
    const list = get(todoListState);
    return Math.ceil(list.length / perPage);
  },
});

export const pagedTodoListState = selector({
  key: "pagedTodoListState",
  get: ({ get }) => {
    const page = get(pageState);
    const perPage = get(perPageState);
    const list = get(todoListState);
    return list.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
  },
});
