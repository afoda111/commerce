import React from 'react'
import {AppBar, Toolbar, Menu, MenuItem, IconButton, Typography, Badge} from '@material-ui/core';
import UseStyle from './navBarStyles'
import logo from '../images/logo.jpg'
import {ShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom'
function NavBar({totalItems}) {
    const classes = UseStyle();
    return (
        <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to='/' variant='h6' color='inherit' className={classes.title}>
                    <img src={logo}  alt='commerce logo' className={classes.image} height='25px'/>
                    E-Mega store    
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton component={Link} to='/shoppingcart' aria-label="show items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
