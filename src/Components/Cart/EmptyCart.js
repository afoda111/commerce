import React from 'react'
import {Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyle from './CartStyles'
function EmptyCart() {
    const style = useStyle();
    return (
        <div className={style.center}>
             <Typography variant = "h4" className={style.empty} component={Link} to='/' >Click here to start adding items to your cart</Typography>
        </div>
    )
}

export default EmptyCart
