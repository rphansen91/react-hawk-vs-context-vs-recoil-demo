import React, { FC } from "react";
import { useRecoilValue } from "recoil";
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
} from "./atoms";
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

const RecoilList = () => {
  const page = useRecoilValue(pageState);
  const createText = useRecoilValue(createTextState);
  const create = useRecoilValue(createState);
  const pageCount = useRecoilValue(pagedTodoCountState);
  const pagedTodoList = useRecoilValue(pagedTodoListState);
  const setPage = useSetPage();
  const setCreateText = useSetCreateText();
  const createTodo = useCreateTodo();
  const updateTodo = useUpdateTodo();
  const toggleTodo = useToggleTodo();
  const removeTodo = useRemoveTodo();
  return (
    <TodoList
      title="Recoil"
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

const RecoilUpdate = () => {
  const updating = useRecoilValue(updatingState);
  const updateText = useRecoilValue(updateTextState);
  const save = useRecoilValue(saveState);
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

export const RecoilTodoList: FC = () => {
  return (
    <>
      <RecoilList />
      <RecoilUpdate />
    </>
  );
};

export default RecoilTodoList;
