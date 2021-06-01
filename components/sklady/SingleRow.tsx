import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Row } from "../types";
import { DeleteButton, EditCountButtons } from "../atomic/Buttons";
import { EditRow } from "./EditRow";
const useStyles = makeStyles({
  TableText: {
    fontSize: "19px",
    fontWeight: 500,
  },
});

type RowProps = Row & {
  deleteItem: (id: number, storage: string) => void;
  pluscount: (id: number, count: number, storage: string) => void;
  minuscount: (id: number, count: number, storage: string) => void;
};

export const SingleRow: React.FC<RowProps> = ({
  id,
  code,
  count,
  name,
  deleteItem,
  pluscount,
  minuscount,
  description,
  storage,
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
          pluscount={() => pluscount(id, count, storage)}
          minuscount={() => minuscount(id, count, storage)}
        />
      </TableCell>

      <TableCell className={classes.TableText} align="right">
        <EditRow
          id={id}
          description={description}
          name={name}
          code={code}
          count={count}
          storage={storage}
        />
      </TableCell>
      <TableCell className={classes.TableText} align="right">
        <DeleteButton event={() => deleteItem(id, storage)} />
      </TableCell>
    </TableRow>
  );
};
