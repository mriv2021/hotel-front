import React, { useState } from "react";
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import fondo from "../../../../images/auth/fondo.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  container: {
    opacity: "0.8",
    height: "100%",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down(400 + theme.spacing(2) + 1)]: {
      marginTop: 0,
      width: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const AuthRegister = () => {
  const [body, setBody] = useState({
    nombre: "",
    usuario: "",
    password: "",
    repitepassword: "",
    email: "",
    telefono: "",
  });
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (e) => {
    console.log("e", e.target.name);
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    // history.push("/login");
    console.log(body);
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        alert("no se pudo registrar al usuario, intentalo denuevo");
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Únete a nosotros
          </Typography>
          <form className={classes.form}>
            <TextField
              requiered
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Usuario"
              name="usuario"
              value={body.usuario}
              onChange={handleChange}
            />
            <TextField
              requiered
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Nombres"
              name="nombre"
              value={body.nombre}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              value={body.password}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="repite Password"
              name="repite/naved"
              value={body.repitePassword}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Email"
              name="email"
              value={body.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Teléfono"
              name="telefono"
              value={body.telefono}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => onSubmit()}
            >
              Regístrese
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};
export { AuthRegister };

/*  export function AuthRegister() {
    return <div className="auth-login">ACA IRA EL REGISTRO</div>;
  }
  */
/* export function AuthRegister() {
    return <div className="auth-login">ACA IRA EL REGISTRO</div>;
  }
   */
