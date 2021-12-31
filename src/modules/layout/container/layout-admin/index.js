import { useState } from "react";
import { Navbar } from "../../component/header-admin";
import { Main } from "../../component/main-admin";
import theme from "../../../../temaConfig";
import { Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";

const estilos = makeStyles(them => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export function LayoutAdmin(props) {
  const classes = estilos();
  const [abrir, setAbrir] = useState(false);

  const accionAbrir = () => {
    setAbrir(!abrir)
  };

  return (
    <div className="layout-admin">
      <div className={classes.root}>
        <Navbar accionAbrir={accionAbrir} />
        <Hidden xsDown>
          <Main variant="permanent" open={true} />
        </Hidden>
        <Hidden smUp>
          <Main variant="temporary" open={abrir} onClose={accionAbrir} />
        </Hidden>
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
