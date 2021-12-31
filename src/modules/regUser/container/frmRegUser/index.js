import React from "react";
import { Grid, MenuItem, Select, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const RegUser = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <h1 align="center">Registro de Usuarios</h1>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="DNI"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              fullWidth
            />
          </Grid>

        

          <Grid item xs={12} sm={6}>
            <InputLabel id="demo-simple-select-label">Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Area"
              fullWidth
            >
              <MenuItem value={1}>Recepcion</MenuItem>
              <MenuItem value={2}>Lavanderia</MenuItem>
              <MenuItem value={3}>Cocina</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Area"
              fullWidth
            >
              <MenuItem value={1}>Recepcionista</MenuItem>
              <MenuItem value={2}>Botones</MenuItem>
              <MenuItem value={3}>Mucama</MenuItem>
            </Select>
          </Grid>

          

          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained">
              Nuevo
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained">
              Guardar
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained">
              Actualizar
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained">
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RegUser;
