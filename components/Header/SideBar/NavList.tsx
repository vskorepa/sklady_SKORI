import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListAltIcon from "@material-ui/icons/ListAlt";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import Link from "next/link";

export const ListLinks: React.FC = () => {
  return (
    <List>
      <div>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Přehled" />
          </ListItem>
        </Link>
        <Link href="sklady">
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Slady" />
          </ListItem>
        </Link>
        <Link href="reklamace">
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <KeyboardReturnIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Reklamace" />
          </ListItem>
        </Link>
        <Link href="todo">
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={4} color="primary">
                <AssignmentTurnedInIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="To do list" />
          </ListItem>
        </Link>
      </div>
    </List>
  );
};
