import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AddButton } from "../atomic/Buttons";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: "20px",
    fontWeight: 100,
  },
  tableheadtext: {
    fontSize: "19px",
    fontWeight: 600,
    color: "white",
  },
  tablehead: {
    backgroundColor: "#ff1f1f",
  },
  content: {
    paddingTop: "74px",
    margin: "0px 10px 10px 10px",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  SelectWraper: {
    fontSize: "19px",
    fontWeight: 600,
    color: "white",
    backgroundColor: "white",
    borderRadius: "10px",
  },
});

export const RowHead: React.FC = () => {
  const classes = useStyles();
  return (
    <TableHead className={classes.tablehead}>
      <TableRow>
        <TableCell className={classes.tableheadtext}>Kód</TableCell>
        <TableCell className={classes.tableheadtext} align="center">
          Název
        </TableCell>
        <TableCell className={classes.tableheadtext} align="right">
          Počet
        </TableCell>
        <TableCell className={classes.tableheadtext} align="center"></TableCell>

        <TableCell className={classes.tableheadtext} align="right">
          <AddButton />
        </TableCell>
        <TableCell
          className={classes.tableheadtext}
          align="center"
          width="70px"
        ></TableCell>
      </TableRow>
    </TableHead>
  );
};
