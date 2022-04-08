import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';


const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1,
        backgroundColor: 'rgba(29,34,220,1)'
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    }));

function Navbar() {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                       Dashboard Hospital
                    </Typography>

                    <IconButton color="inherit">
                            <img src={require('../assets/img/logo.png')} className={classes.imagen}/>
                    </IconButton>
                </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default Navbar;