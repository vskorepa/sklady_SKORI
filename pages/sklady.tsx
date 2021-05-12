import React from "react";
import NavBar from "../components/Header/TopNav";
import BasicTable from "../components/sklady/RowsTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <BasicTable></BasicTable>
    </div>
  );
}
export default App;
