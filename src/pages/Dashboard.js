import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import YouTubeIcon from '@material-ui/icons/LocalHospital';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center',
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));

const data = [
    {
      id:1,
      name:
        "Hospital #1",
      fecha: "Marzo-2-2022",
      visualizaciones: 32,
      imagen: require("../assets/img/hospital.png"),
    },
    {
      id:2,
        name:
          "Hospital #2",
        fecha: "Agosto-30-2022",
        visualizaciones: 31,
        imagen: require("../assets/img/hospital.png"),
      },
      {
      id:3,
        name:
          "Hospital #3",
        fecha: "Julio-7-2022",
        visualizaciones: 21,
        imagen: require("../assets/img/hospital.png"),
      },
      {
      id:4,
        name:
          "Hospital #4",
        fecha: "Mayo-12-2022",
        visualizaciones: 21,
        imagen: require("../assets/img/hospital.png"),
      },
      {
      id:5,
        name:
          "Hospital #5",
        fecha: "Abril-4-2022",
        visualizaciones: 21,
        imagen: require("../assets/img/hospital.png"),
      },
  ];

function Dashboard(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} >

                <Grid item xs={12} >
                    <Navbar/>
                </Grid>

                
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                   <CardsHeader icono={<YouTubeIcon className={classes.iconos}/>} titulo="Nombre del Hospital" texto='Hospital #1' color=" #C55042" font="white"/>
                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="Cantidad de cada insumo que hay en la bodega" texto="692"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="Cantidad total de insumos que se tiene en la bodega disponible para asignar" texto="111,092"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="Cantidad de insumos asignados a cada hospital" texto="2,504 horas"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="Cantidad de insumos entregados a cada hospital" texto="14.2%"/>
                    </Grid>

                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                        <Graphics />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <CardsHeader titulo="Casos Registrados (último mes)" texto='100' color=" rgba(29,34,220,1)" font="white"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <CardsHeader titulo="Cubrebocas necesarios" texto='300' color="rgba(29,34,220,1)" font="white"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <CardsHeader titulo="Mascarillas KN95 necesarias" texto='37' color="#E28E25" font="white"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <CardsHeader titulo="Caretas necesarias" texto='130' color="#E28E25" font="white"/>
                    </Grid>
                    <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data}/>
                    </Grid>


            </Grid>
        </div>
    );
}

export default Dashboard;