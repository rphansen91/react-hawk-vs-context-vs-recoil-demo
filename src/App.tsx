import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { ContextCounter, CounterProvider } from "./ContextCounter";
import { DataHocTodoList } from "./DataHocTodos";
import { RecoilTodoList } from "./RecoilTodos";
import { RecoilCounter } from "./RecoilCounter";
import { HawkTodoList } from "./HawkTodos";
import { HawkCounter } from "./HawkCounter";
import { RecoilRoot } from "recoil";
import { Typography } from "@material-ui/core";

const background =
  "linear-gradient(rgba(245, 0, 87, 0.8), rgba(63, 81, 181, 0.8))";

function App() {
  return (
    <>
      <a href="https://github.com/rphansen91/react-hawk" style={{ position: 'absolute', top: 0, right: 0 }}>
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
      <Box
        width="100%"
        style={{
          padding: "4em 2em",
          background,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxSizing: 'border-box'
        }}
      >
        <Typography variant="h2" style={{ color: "#fff" }}>
          Todo List
        </Typography>
        <Typography variant="h4" style={{ color: "#fff" }}>
          Context vs Recoil vs Hawk
        </Typography>
      </Box>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <DataHocTodoList />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecoilRoot>
              <RecoilTodoList />
            </RecoilRoot>
          </Grid>
          <Grid item xs={12} md={4}>
            <RecoilRoot>
              <HawkTodoList />
            </RecoilRoot>
          </Grid>
          <Grid item xs={12} md={4}>
            <CounterProvider>
              <ContextCounter />
            </CounterProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <RecoilRoot>
              <RecoilCounter />
            </RecoilRoot>
          </Grid>
          <Grid item xs={12} md={4}>
            <HawkCounter />
          </Grid>
        </Grid>
      </Box>
      <Box width="100%" style={{ paddingTop: "20%", background }} />
    </>
  );
}

export default App;
