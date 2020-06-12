import React from "react";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogTitle, { DialogTitleProps } from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

export interface IUpdateTodoProps {
  open: boolean;
  onClose: () => any;
  text: string;
  setText: (v: string) => any;
  saveText: (v: string) => any;
  loading: boolean;
  error: string;
}

export default ({
  open,
  text,
  setText,
  saveText,
  onClose,
  loading,
  error,
}: IUpdateTodoProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Update item
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            saveText(text);
          }}
        >
          <TextField
            variant="outlined"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
            helperText={error}
            error={Boolean(error)}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>

        <Box ml={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => saveText(text)}
            style={{ position: "relative" }}
            disabled={loading}
          >
            {loading ? (
              <LinearProgress
                variant="indeterminate"
                style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              />
            ) : null}
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
