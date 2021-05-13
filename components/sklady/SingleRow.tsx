import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Row } from "../types";
import { EditButton, DeleteButton, EditCountButtons } from "../atomic/Buttons";

const useStyles = makeStyles({
  TableText: {
    fontSize: "19px",
    fontWeight: 500,
  },
});

type RowProps = Row & {
  deleteItem: (id: number) => void;
  pluscount: (id: number, count: number) => void;
  minuscount: (id: number, count: number) => void;
};

export const SingleRow: React.FC<RowProps> = ({
  id,
  code,
  count,
  name,
  deleteItem,
  pluscount,
  minuscount,
}) => {
  const classes = useStyles();

  return (
    <TableRow key={id}>
      <TableCell className={classes.TableText} component="th" scope="row">
        {code}
      </TableCell>
      <TableCell className={classes.TableText} align="center">
        {name}
      </TableCell>
      <TableCell className={classes.TableText} align="right">
        {count}
      </TableCell>
      <TableCell className={classes.TableText} align="left">
        <EditCountButtons
          pluscount={() => pluscount(id, count)}
          minuscount={() => minuscount(id, count)}
        />
      </TableCell>

      <TableCell className={classes.TableText} align="right">
        <EditButton />
      </TableCell>
      <TableCell className={classes.TableText} align="right">
        <DeleteButton event={() => deleteItem(id)} />
      </TableCell>
    </TableRow>
  );
};
