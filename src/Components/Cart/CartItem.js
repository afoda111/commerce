import React from 'react'
import {Card, CardActions, Typography, CardMedia, CardContent, Button} from '@material-ui/core';
import useStyle from './CartItemStyles'
function CartItem({cart, updateCart, removeFromCart}) {
    const style = useStyle();
    return (
        <Card >
          <CardMedia className={style.media} image={cart.media.source} alt={cart.name}/>
          <CardContent className={style.cardContent}>
              <Typography variant='h4'>{cart.name}</Typography>
              <Typography variant='h5'>{cart.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={style.cartActions}>
            <div className={style.buttons}>
                <Button size='small' type='button' onClick={()=> updateCart(cart.id,cart.quantity-1)} >-</Button>
                <Typography variant='h4'>{cart.quantity}</Typography>
                <Button size='small' type='button' onClick={()=> updateCart(cart.id,cart.quantity+1)} >+</Button>
            </div>
            <Button variant='contained' type='button' color='primary' onClick={()=>removeFromCart(cart.id)}>Remove</Button>
          </CardActions>
        </Card>
    )
}

export default CartItem
