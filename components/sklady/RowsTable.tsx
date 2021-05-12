import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import theme from "../../src/theme";

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
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell className={classes.tableheadtext}>
                Dessert (100g serving)
              </TableCell>
              <TableCell className={classes.tableheadtext} align="right">
                Calories
              </TableCell>
              <TableCell className={classes.tableheadtext} align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell className={classes.tableheadtext} align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell className={classes.tableheadtext} align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
