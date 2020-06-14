import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab, { FabProps } from "@material-ui/core/Fab";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import React, { FC } from "react";

export interface ITodoCreateProps {
  text: string;
  setText: (text: string) => void;
  createTodo: (text: string) => any;
  loading?: boolean;
  error?: string;
}

export default ({
  text,
  setText,
  createTodo,
  loading,
  error,
}: ITodoCreateProps) => {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        createTodo(text);
      }}
    >
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          label="Create new item"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          helperText={error}
          error={Boolean(error)}
          size="small"
        />
        <Box ml={1}>
          <LoadingFab type="submit" size="small" color="primary" loading={loading}>
            <AddIcon />
          </LoadingFab>
          {helperText ? <FormHelperText>&nbsp;</FormHelperText> : null}
        </Box>
      </Box>
    </form>
  );
};

const LoadingFab: FC<FabProps & { loading?: boolean }> = ({
  disabled,
  loading,
  style,
  children,
  ...props
}) => {
  return (
    <Fab
      {...props}
      disabled={disabled || loading}
      style={{ position: "relative", ...style }}
    >
      {loading ? (
        <CircularProgress
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
        />
      ) : null}
      {children}
    </Fab>
  );
};
