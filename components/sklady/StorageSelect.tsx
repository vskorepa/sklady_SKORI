import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CssBaseline, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      overflow: "auto",
      minWidth: "50%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  })
);

type StorageSelectProps = {
  storage: string;
  OnStorageChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

export const StorageSelect: React.FC<StorageSelectProps> = ({
  storage,
  OnStorageChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="storage">Sklad</InputLabel>{" "}
        <Select
          labelId="storage"
          value={storage}
          onChange={OnStorageChange}
          label="storage"
        >
          <MenuItem value="Dusejov">Dusejov</MenuItem>
          <MenuItem value="Hradec">Hradec</MenuItem>
          <MenuItem value="Esatrans">Esatrans</MenuItem>
          <MenuItem value="rows">rows</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
