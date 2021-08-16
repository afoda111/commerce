import React from 'react'
import {Card, CardActions, Typography, CardMedia, CardContent, IconButton} from '@material-ui/core';
import UseStyles from './productStyles'
import {AddShoppingCart} from '@material-ui/icons'
function product({product, addItemsToCart}) {
    const classes = UseStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html : product.description}} varian="body2"  color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="add to cart" onClick={() => addItemsToCart(product.id, 1)} >
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default product
