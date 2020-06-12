import React from "react";
import DataHocTodoControls from "./controls";
import TodoList from "../Components/Todos/List";
import TodoItem from "../Components/Todos/Item";
import TodoCreate from "../Components/Todos/Create";
import TodoUpdate from "../Components/Todos/Update";
import Pagination from "@material-ui/lab/Pagination";

export const DataHocTodoList = () => {
  return (
    <DataHocTodoControls.Provider>
      <DataHocTodoControls.Context.Consumer>
        {(controls) =>
          controls ? (
            <>
              <TodoList
                title="Context"
                action={
                  <TodoCreate
                    text={controls.createText}
                    setText={controls.setCreateText}
                    createTodo={controls.createTodo}
                    loading={controls.create.loading}
                    error={controls.create.error}
                  />
                }
                footer={
                  <Pagination
                    page={controls.page}
                    count={controls.pagedTodoCount}
                    onChange={(ev, nextPage) => controls.setPage(nextPage)}
                  />
                }
              >
                {controls.pagedTodoList.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={controls.toggleTodo}
                    updateTodo={controls.updateTodo}
                    removeTodo={controls.removeTodo}
                  />
                ))}
              </TodoList>
              <TodoUpdate
                open={Boolean(controls.updating)}
                text={controls.updateText}
                setText={controls.setUpdateText}
                saveText={(text) =>
                  controls.saveTodo(controls.updating, { text })
                }
                onClose={controls.closeUpdate}
                loading={controls.save.loading}
                error={controls.save.error}
              />
            </>
          ) : null
        }
      </DataHocTodoControls.Context.Consumer>
    </DataHocTodoControls.Provider>
  );
};
