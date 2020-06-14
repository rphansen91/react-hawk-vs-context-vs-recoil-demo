import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Divider from "@material-ui/core/Divider";
import FormHelperText from "@material-ui/core/FormHelperText";
import { TextField } from "@material-ui/core";

interface CounterProps {
  title: string;
  value: number;
  helperText: string;
  onIncrease: () => any;
  onDecrease: () => any;
}

const Counter = ({
  title,
  value,
  helperText,
  onIncrease,
  onDecrease,
}: CounterProps) => {
  return (
    <Paper style={{ width: "100%" }}>
      <CardHeader title={title} />
      <Divider />
      <Box p={2} display="flex" alignItems="center">
        <Box mr={1}>
          <Fab onClick={onDecrease} size="small">
            <RemoveIcon />
          </Fab>
          <FormHelperText>&nbsp;</FormHelperText>
        </Box>
        <TextField
          variant="outlined"
          size="small"
          value={value}
          disabled
          helperText={helperText}
          fullWidth
        />
        <Box ml={1}>
          <Fab onClick={onIncrease} size="small">
            <AddIcon />
          </Fab>
          <FormHelperText>&nbsp;</FormHelperText>
        </Box>
      </Box>
    </Paper>
  );
};

export default Counter;
