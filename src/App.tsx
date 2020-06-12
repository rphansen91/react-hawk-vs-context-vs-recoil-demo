import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { DataHocTodoList } from "./DataHocTodos";
import { RecoilTodoList } from "./RecoilTodos";
import { HawkTodoList } from "./HawkTodos";
import { RecoilRoot } from 'recoil';
import { Typography } from "@material-ui/core";

function App() {
  return (
    <>
    <Box width="100%" style={{ padding: '4em 2em', background: 'linear-gradient(#f50057, #3f51b5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h2" style={{ color: '#fff' }}>Todo List</Typography>
      <Typography variant="h4" style={{ color: '#fff' }}>Context vs Recoil vs Hawk</Typography>
    </Box>
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <DataHocTodoList />
        </Grid>
        <Grid item md={4}>
          <RecoilRoot>
            <RecoilTodoList />
          </RecoilRoot>
        </Grid>
        <Grid item md={4}>
          <RecoilRoot>
            <HawkTodoList />
          </RecoilRoot>
        </Grid>
      </Grid>
    </Box>
    <Box width="100%" style={{ paddingTop: '20%', background: 'linear-gradient(#f50057, #3f51b5)' }} />
    </>
  );
}

export default App;
