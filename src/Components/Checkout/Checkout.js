import React, {useState} from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useStyle from './CheckoutStyle'
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm'
function Checkout() {
    const style = useStyle();
    const [activeStep, setActiveStep] = useState(0)
    const steps = ['Shipping address', 'Payment details'];

    const Form = () => (activeStep === 0 
        ? <AddressForm/> 
        : <PaymentForm/>
    )
    const Confirmation = () =>(
        <div>
            confirmation
        </div>
    )

    return (
        <>
            <div className={style.toolbar}/>
            <main className={style.layout}>
                <Paper className={style.paper}>
                    <Typography variant='h4' align='center' >Checkout</Typography>
                        <Stepper className={style.stepper} activeStep={activeStep}>
                            {steps.map((step)=>(
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation/> : <Form/>}
                </Paper>
            </main>
          
        </>
    )
}

export default Checkout
