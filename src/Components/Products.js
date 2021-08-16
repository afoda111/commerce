import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/product'
import UseStyles from './productsStyles'

function Products({product, addItemsToCart}) {
    const classes = UseStyles();
    return (
       <main className={classes.content}>
           <div className={classes.toolbar}/>
           <Grid container justify="center" spacing={3}>
                {product.map((product)=>(<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} addItemsToCart={addItemsToCart} />
                </Grid>))}
           </Grid>
       </main>
    )
}

export default Products

