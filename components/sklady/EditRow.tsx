import React from "react";
import Button from "@material-ui/core/Button";
import { Row } from "../types";
import { useAddSingleRowMutation } from "../../__generated__/lib/singleRow.graphql";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EditButton } from "../atomic/Buttons";
import { createStyles, makeStyles, Theme, FormControl, TextField, Grid   } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { MultipleRowsDocument } from "../../lib/multipleRows.graphql";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "fit-content",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  })
);

export const EditRow: React.FC<Row> = ({
  id,
  code,
  description,
  count,
  name,
  storage,
}) => {
  const [addRow] = useAddSingleRowMutation();

  const { register, handleSubmit } = useForm<Row>();
  const onSubmit = (data: Row) => {
    addItem(data);
    handleClose();
  };
  const addItem = async (item: Row) => {
    await addRow({
      variables: {
        id: item.id,
        name: item.name,
        code: item.code,
        description: item.description,
        count: item.count,
        storage: storage,
      },
      refetchQueries: [{ query: MultipleRowsDocument, variables: { storage } }],
    });
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditButton event={handleClickOpen} />
      <Dialog
        maxWidth={"md"}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="DialogTitle"
      >
        <DialogTitle id="DialogTitle">ÚPRAVA POLOŽKY</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}  onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Grid item xs={12} sm={6}>
          <TextField fullWidth autoFocus={true} label="Název"  id="nazev"  defaultValue={name} type="text" {...register("name")} />

          </Grid>
          <Grid item xs={12} sm={6}>            <TextField fullWidth label="Kód" id="kod" defaultValue={code} type="text" {...register("code")} />
</Grid>
            <Grid item xs={12} sm={6}>            <TextField fullWidth
            label="Popis"
            id="popis"
              defaultValue={description ?? ""}
              type="text"
              {...register("description")}
            />
</Grid>

                      <Grid item xs={12} sm={6}>            <TextField
            fullWidth
            label="Počet"
            id="pocet"
              defaultValue={count}
              type="number"
              min={0}
              {...register("count", { valueAsNumber: true })}
            />
</Grid>

            <input
              hidden
              defaultValue={id}
              {...register("id", { valueAsNumber: true })}
            />
            <Button color={"primary"} type="submit">
              Upravit
            </Button>
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
