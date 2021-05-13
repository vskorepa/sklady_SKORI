import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    editcount: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: "30px",
    },
    countarrow: {
      padding: "2px",
    },
  })
);

type ButtonsProps = {
  event: () => void;
};
type EditCountButtonsProps = {
  pluscount: () => void;
  minuscount: () => void;
};

export const DeleteButton: React.FC<ButtonsProps> = ({ event }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<DeleteIcon />}
      onClick={() => event()}
    >
      Smazat
    </Button>
  );
};

export const EditButton: React.FC<ButtonsProps> = ({ event }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<EditIcon />}
      onClick={() => event()}
    >
      Upravit
    </Button>
  );
};
export const AddButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<AddBoxOutlinedIcon />}
    >
      Přidat
    </Button>
  );
};

export const EditCountButtons: React.FC<EditCountButtonsProps> = ({
  pluscount,
  minuscount,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.editcount}>
      <IconButton className={classes.countarrow} onClick={() => pluscount()}>
        <KeyboardArrowUpOutlinedIcon />
      </IconButton>
      <IconButton className={classes.countarrow} onClick={() => minuscount()}>
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>
    </div>
  );
};
