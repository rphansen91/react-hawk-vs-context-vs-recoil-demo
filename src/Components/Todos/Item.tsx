import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { ITodo } from "../../todoUtils";

export interface ITodoItemProps {
  todo: ITodo;
  updateTodo: (todo: ITodo) => any;
  removeTodo: (todo: ITodo) => any;
  toggleTodo: (todo: ITodo) => any;
}

export default ({ todo, toggleTodo, updateTodo, removeTodo }: ITodoItemProps) => {
  return (
    <ListItem button onClick={() => toggleTodo(todo)} key={todo.id}>
      <Checkbox checked={todo.complete} onChange={() => toggleTodo(todo)} />
      <ListItemText
        primary={todo.text}
        primaryTypographyProps={
          todo.complete
            ? { color: "secondary", style: { textDecoration: "line-through" } }
            : {}
        }
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => updateTodo(todo)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(todo)}>
          <CancelIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
