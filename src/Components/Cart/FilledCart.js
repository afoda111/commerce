import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyle from './CartStyles'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
function FilledCart({cart, emptyCart, removeFromCart, updateCart}) {
    const style = useStyle();
    return (
        <div>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem cart={item} 
                        emptyCart={emptyCart} 
                        removeFromCart={removeFromCart} 
                        updateCart={updateCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={style.cardDetails}>
                <Typography className={style.price} variant='h4'>subTotal : {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button size='large' className={style.emptyButton} variant='contained' type='button' color='secondary' onClick={emptyCart} >Empty your cart</Button>
                    <Button size='large' className={style.checkoutButton} variant='contained' type='button' color='primary' component={Link} to='/shoppingcart/checkout' >CheckOut</Button>
                </div>
            </div>
        </div>
    )
}

export default FilledCart
