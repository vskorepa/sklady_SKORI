import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Row } from "../types";
import {
  useDeleteSingleRowMutation,
  useEditCountMutation,
} from "../../__generated__/lib/singleRow.graphql";
import { useMultipleRowsQuery } from "../../lib/multipleRows.graphql";
import { SingleRow } from "./SingleRow";
import { RowHead } from "./TableHead";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  content: {
    paddingTop: "74px",
    margin: "0px 10px 10px 10px",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});

export const BasicTable: React.FC = () => {
  const classes = useStyles();
  const [deleteRow] = useDeleteSingleRowMutation();
  const [editCount] = useEditCountMutation();

  const { loading, error, data, refetch } = useMultipleRowsQuery({
    variables: { storage: "rows" },
  });

  const deleteItem = async (id: number) => {
    await deleteRow({
      variables: {
        id: id,
      },
    });
    refetch();
  };

  const plusCount = async (id: number, count: number) => {
    await editCount({
      variables: {
        id: id,
        count: count + 1,
      },
    });
    return count + 1;
  };
  const minusCount = async (id: number, count: number) => {
    await editCount({
      variables: {
        id: id,
        count: count !== 0 ? count - 1 : count,
      },
    });
    return count - 1;
  };

  if (loading) {
    return (
      <div className={classes.content}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.content}>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else {
    return (
      <div className={classes.content}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <RowHead />
            <TableBody>
              {data.multipleRows
                .filter((x: Row) => !!x)
                .map((item: Row) => (
                  <SingleRow
                    key={item.id}
                    {...item}
                    editItem={deleteItem}
                    deleteItem={deleteItem}
                    pluscount={plusCount}
                    minuscount={minusCount}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};
