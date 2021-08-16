import React from 'react'
import useStyle from './CartStyles'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import EmptyCart from './EmptyCart'
import FilledCart from './FilledCart'
import {CircularProgress} from '@material-ui/core'

function Cart({ cart, emptyCart, updateCart, removeFromCart }) {
    const style = useStyle();
    if(!cart.line_items) return <CircularProgress/>
    return (
        <Container>
            <div className={style.toolbar}>
                <Typography  variant="h4" className={style.title} > Your shopping cart </Typography>
                {!cart.line_items.length ? <EmptyCart/> : <FilledCart cart={cart} 
                emptyCart={emptyCart} 
                updateCart={updateCart} 
                removeFromCart={removeFromCart} />}
            </div>
        </Container>
    )
}

export default Cart
