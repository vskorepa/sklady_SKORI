import React from "react";
import Button from "@material-ui/core/Button";
import { Row } from "../types";
import { useAddSingleRowMutation } from "../../__generated__/lib/singleRow.graphql";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { EditButton } from "../atomic/Buttons";
import {
  createStyles,
  makeStyles,
  Theme,
  TextField,
  Slider,
  Grid,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { MultipleRowsDocument } from "../../lib/multipleRows.graphql";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      minHeight: "30vh",
      margin: "auto",
    },
    input: {
      margin: "10px",
      width: "100%"
    },
    grid:{
      margin: "10px",
      alignSelf: "center",
      width: "80%"
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    modal:{
      height: 100,
      color: "red"
      
    }
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

  const {register, handleSubmit,control } = useForm<Row>();
  const onSubmit = (data: Row) => {
    console.log(data)
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
          >
            <Grid className={classes.grid}>
            <Controller
              name="name"
              control={control}
              defaultValue={name}
              rules={{required: "Název je povinný"}}
              render={({field: {onChange, value},fieldState: { error }})=>(
                <TextField
                label="Název"
                className={classes.input}
                value={value}
                type="text"
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
              )}
              />
            </Grid>
            <Grid className={classes.grid}>
            <Controller
              name="code"
              control={control}
              defaultValue={code}
              rules={{required: "Kód je povinný"}}
              render={({field: {onChange, value}, fieldState: { error }})=>(
                <TextField
                label="Kód"
                className={classes.input}
                value={value}
                type="text"
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
              )}
              />
            </Grid>

            <Grid className={classes.grid}>
            <Controller
              name="description"
              control={control}
              defaultValue={description}
              render={({field: {onChange, value}, fieldState: { error }})=>(
                <TextField
                label="Popis"
                className={classes.input}
                value={value}
                type="text"
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
              )}
              />
            </Grid> 

            <Grid className={classes.grid}>
            <input
                type="number"
                className={classes.input}
                defaultValue={count}
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
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};


