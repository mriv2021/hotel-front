import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios' ;
import {Modal, TextField, Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { style } from '@mui/system';

const columnas=[
    {
        title: 'Habitacion',
        field: 'habitacion'
    },
    {
        title: 'Fecha',
        field: 'fecha',
    },
    {
        title: 'Precio',
        field: 'precio',
        type: 'numeric',
    },
    {
        title: 'Cliente',
        field: 'cliente',
    },
    {
        title: 'Tipo de Pago',
        field: 'pago',
       
    },
    {
        title: 'Estatus',
        field: 'estatus',
    },
];

const baseUrl="http://localhost:3000/listbooking1";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'adsolute', 
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(150%, 50%)'
    },
    iconos:{
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    }

}));

function ListBooking() {
    const styles= useStyles();
    const [data, setData]= useState([]);
    const [modalInsertar, setModalInsertar]= useState(false);
    const [modalEditar, setModalEditar]= useState(false);
    const [modalEliminar, setModalEliminar]= useState(false);
    const [reservaSeleccionada, SetReservaSeleccionada]=useState({
        cliente: "",
        estatus: "",
        fecha: "",
        habitacion: "",
        id: "",
        pago: "",
        precio: ""        
    })

    const handleChange=e=>{
        const{name, value}=e.target;
        SetReservaSeleccionada(prevState=>({
            ...prevState,
            [name]: value
        }));
        
    }

    const peticionGet=async()=>{
        await axios.get(baseUrl)
         .then(response=>{
             setData(response.data);             
         }).catch(error=>{
            console.log(error);
        })
    }

    const peticionPost=async()=>{
        await axios.post(baseUrl, reservaSeleccionada)
        .then(response=>{
            setData(data.concat(response.data));
            abrirCerrarModalInsertar();
        }).catch(error=>{
            console.log(error);
        })
    }

    const peticionPut=async()=>{
        await axios.put(baseUrl+"/"+reservaSeleccionada.id, reservaSeleccionada)
        .then(response=>{
            var dataNueva= data;
            dataNueva.map(reservacion=>{
                if(reservacion.id===reservaSeleccionada.id){
                    reservacion.habitacion=reservaSeleccionada.habitacion;
                    reservacion.fecha=reservaSeleccionada.fecha;
                    reservacion.precio=reservaSeleccionada.precio;
                    reservacion.cliente=reservaSeleccionada.cliente;
                    reservacion.pago=reservaSeleccionada.pago;
                    reservacion.estatus=reservaSeleccionada.estatus;
                }
            });
            setData(dataNueva);
            abrirCerrarModalEditar();
        }).catch(error=>{
            console.log(error);
        })
    }
    
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+"/"+reservaSeleccionada.id)
        .then(response=>{
            setData(data.filter(reserva=>reserva.id!==reservaSeleccionada.id));
            abrirCerrarModalEliminar();
        }).catch(error=>{
            console.log(error);
        })
    }

    const seleccionarReserva =(habitacion, caso)=>{
        SetReservaSeleccionada(habitacion);
        (caso==="Editar")?abrirCerrarModalEditar()
        :
        abrirCerrarModalEliminar()
    }

    const abrirCerrarModalInsertar=()=>{
        setModalInsertar(!modalInsertar);
    }

    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar);
    }

    const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
    }

    useEffect(()=>{
        peticionGet();
    }, [])

    const bodyInsertar=(
        <div className={styles.modal}>
            <h3 align="center">Agregar Nueva Reservacion</h3>
                <TextField className={styles.inputMaterial} label="Habitacion" name="habitacion" onChange={handleChange}/>               
               <br /><br />
               <TextField className={styles.inputMaterial} label="Fecha" name="fecha" onChange={handleChange} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Precio" name="precio" onChange={handleChange} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Cliente" name="cliente" onChange={handleChange} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Tipo de pago" name="pago" onChange={handleChange} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Estatus" name="estatus" onChange={handleChange}  />
                    
            
            <br /><br />
            <div align="right">                
                <Button color="secondary" onClick={()=>peticionPost()}>Insertar</Button>
                
                <Button color="secondary" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>               
            </div>
        </div>
    )

    const bodyEditar=(
        <div className={styles.modal}>
            <h3 align="center">Editar Reservacion</h3>
                <TextField className={styles.inputMaterial} label="Habitacion" name="habitacion" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.habitacion} />               
               <br /><br />
               <TextField className={styles.inputMaterial} label="Fecha" name="fecha" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.fecha} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Precio" name="precio" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.precio} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Cliente" name="cliente" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.cliente} />
               <br /><br />
               <TextField className={styles.inputMaterial} label="Tipo de pago" name="pago" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.pago}/>
               <br /><br />
               <TextField className={styles.inputMaterial} label="Estatus" name="estatus" onChange={handleChange} value={reservaSeleccionada&&reservaSeleccionada.estatus} />
                    
            
            <br /><br />
            <div align="right">                
                <Button color="secondary" onClick={()=>peticionPut()}>Editar</Button>                
                <Button color="secondary" onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>               
            </div>
        </div>
    )

    const bodyEliminar=(
        <div className={styles.modal}>
            <p>Estas Seguro de Eliminar la Reservacion de <b>{reservaSeleccionada && reservaSeleccionada.cliente}</b>? </p>
            <div align="right">
                <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
                <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
            </div>
        </div>

    )

    return (
        <div>
            <br />
            <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar Reserva</Button>
            <br /><br />
            <MaterialTable

                columns={columnas}
                data={data}
                title="Lista de Reservas"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'editar cuarto',
                        onClick: (event, rowData)=> seleccionarReserva(rowData, "Editar")
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Eliminar Reservacion',
                        onClick: (event, rowData)=> seleccionarReserva(rowData,"Eliminar")
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header:{
                        actions: 'Acciones'
                    }
                }}
            />

                <Modal
                    open={modalInsertar}
                    onClose={abrirCerrarModalInsertar}>
                    {bodyInsertar}    
                </Modal>

                <Modal
                    open={modalEditar}
                    onClose={abrirCerrarModalInsertar}>
                    {bodyEditar}    
                </Modal>

                <Modal
                    open={modalEliminar}
                    onClose={abrirCerrarModalEliminar}>
                    {bodyEliminar}    
                </Modal>


        </div>
    );

}

export default ListBooking;