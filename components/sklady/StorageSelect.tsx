import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    Select: {
      color: "white",
    },
  })
);

type StorageSelectProps = {
  Updatestorage: (storage: string) => string;
};

export const StorageSelect: React.FC<StorageSelectProps> = ({
  Updatestorage,
}) => {
  const classes = useStyles();
  const [storage, changeStorage] = React.useState<string>("Dusejov");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeStorage(event.target.value as string);
    Updatestorage(storage);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Sklad v:</InputLabel>
        <Select
          className={classes.Select}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={storage}
          onChange={handleChange}
        >
          <MenuItem value="Dusejov">Dusejov</MenuItem>
          <MenuItem value="Hradec">Hradec</MenuItem>
          <MenuItem value="Esatrans">Esatrans</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
