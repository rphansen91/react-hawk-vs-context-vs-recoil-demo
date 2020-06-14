import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import React, { ReactNode } from "react";

export interface ITodoListProps {
  title: string;
  action?: ReactNode
  children?: ReactNode
  footer?: ReactNode
}

export default ({
  title,
  action,
  children,
  footer
}: ITodoListProps) => {
  return (
    <Paper style={{ width: '100%' }}>
      <CardHeader
        title={title}
        action={action}
      />
      <Divider />
      <List>
        {children}
      </List>
      <Divider />
      <CardActions style={{ justifyContent: 'flex-end' }}>
        {footer}
      </CardActions>
    </Paper>
  );
};
