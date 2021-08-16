import './App.css';
import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import Products from './Components/Products';
import NavBar from '../src/Components/NavBar'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const getProducts = async () =>{
      const { data } = await commerce.products.list();
      setProducts(data)
  }

  const getCart = async () =>{
    const res = await commerce.cart.retrieve();
    setCart(res)
  }

  const addToCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const updateCart = async (productId,quantity)=>{
    const {cart} = await commerce.cart.update(productId, { quantity })
    setCart(cart)
    console.log(cart)
  }
  const removeFromCart = async (productId)=>{
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const emptyCart = async ()=>{
    const {cart} = await commerce.cart.empty();

    setCart(cart)
  }

  useEffect(()=>{
    getProducts();
    getCart();
  },[])
 
  return (
    <Router>
      <div>
      <NavBar totalItems={cart.total_items}/>
      <Switch>
        <Route path='/' exact component={()=> <Products product={products} addItemsToCart = {addToCart} />} />
        <Route path='/Shoppingcart' exact component={()=><Cart cart={cart} 
        updateCart={updateCart} 
        removeFromCart={removeFromCart}
        emptyCart={emptyCart} />}/>
        <Route path='/shoppingcart/checkout' exact component={()=> <Checkout/>}/>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
