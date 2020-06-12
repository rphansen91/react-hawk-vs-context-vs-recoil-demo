import React, { FC } from "react";
import { useHawkState } from "react-hawk";
import {
  todoListState,
  createTextState,
  createState,
  saveState,
  updatingState,
  updateTextState,
  pageState,
  pagedTodoCountState,
  pagedTodoListState,
} from "./state";
import {
  useCreateTodo,
  useUpdateTodo,
  useRemoveTodo,
  useCloseUpdate,
  useSaveTodo,
  useToggleTodo,
  useSetUpdateText,
  useSetCreateText,
  useSetPage,
} from "./actions";
import TodoList from "../Components/Todos/List";
import TodoItem from "../Components/Todos/Item";
import TodoCreate from "../Components/Todos/Create";
import TodoUpdate from "../Components/Todos/Update";
import Pagination from "@material-ui/lab/Pagination";

const HawkList = () => {
  const page = useHawkState(pageState);
  const createText = useHawkState(createTextState);
  const create = useHawkState(createState);
  const pageCount = useHawkState(pagedTodoCountState);
  const pagedTodoList = useHawkState(pagedTodoListState);
  const setPage = useSetPage();
  const setCreateText = useSetCreateText();
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const toggleTodo = useToggleTodo();
  const removeTodo = useRemoveTodo();
  return (
    <TodoList
      title="Hawk"
      action={
        <TodoCreate
          text={createText}
          setText={setCreateText}
          createTodo={createTodo}
          loading={create.loading}
          error={create.error}
        />
      }
      footer={
        <Pagination
          page={page}
          count={pageCount}
          onChange={(ev, nextPage) => setPage(nextPage)}
        />
      }
    >
      {pagedTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </TodoList>
  );
};

const HawkUpdate = () => {
  const updating = useHawkState(updatingState);
  const updateText = useHawkState(updateTextState);
  const save = useHawkState(saveState);
  const setUpdateText = useSetUpdateText();
  const saveTodo = useSaveTodo();
  const closeUpdate = useCloseUpdate();
  return (
    <TodoUpdate
      open={Boolean(updating)}
      text={updateText}
      setText={setUpdateText}
      saveText={(text) => saveTodo(updating, { text })}
      onClose={closeUpdate}
      loading={save.loading}
      error={save.error}
    />
  );
};

export const HawkTodoList: FC = () => {
  return (
    <>
      <HawkList />
      <HawkUpdate />
    </>
  );
};

export default HawkTodoList;
