import * as React from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListSubheader,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HotelIcon from "@mui/icons-material/Hotel";
import Collapse from "@mui/material/Collapse";
import LogoutIcon from "@mui/icons-material/Logout";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const Listas = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Bienvenido(a)
          </ListSubheader>
        }
      >
        <Link to="/admin" style={{ color: "inherit", textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              <DonutSmallIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
          </ListItemButton>
        </Link>

        <Link
          to="/admin/listBooking"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Reservaciones" />
          </ListItemButton>
        </Link>

        <ListItemButton>
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>
          <ListItemText primary="Reservas" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <HotelIcon />
          </ListItemIcon>
          <ListItemText primary="Habitaciones" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link
              to="/admin/user"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Registrar" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Listas;

