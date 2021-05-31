import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AddRow } from "./AddRow";
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
type RowHeadProps = {
  nextId: number;
  storage: String;
};
export const RowHead: React.FC<RowHeadProps> = ({ nextId, storage }) => {
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
          <AddRow key={nextId} nextId={nextId} storage={storage} />
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
