import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppsIcon from "@material-ui/icons/Apps";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";

export const ListLinks: React.FC = () => {
  return (
    <List>
      <div>
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Slady" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={4} color="primary">
              <KeyboardReturnIcon />
            </Badge>
          </ListItemIcon>

          <ListItemText primary="Reklamace" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={4} color="primary">
              <AssignmentTurnedInIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="To do list" />
        </ListItem>
      </div>
    </List>
  );
};
