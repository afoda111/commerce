import React, {useState} from 'react'
import {Grid,  Typography}from '@material-ui/core'
import {FormProvider, useForm} from 'react-hook-form'
import  InputField  from './InputField';
function AddressForm() {
    const methods = useForm();
   const submit = ()=>{

   }
    return (
        <>
            <Typography variant='h6'>shipping address</Typography>
            <FormProvider {...methods}>
                <form noValidate onSubmit={submit}>
                    <Grid container spacing={3}>
                         <InputField required name='first name' label='First name' />
                         <InputField required name='last name' label='last name' />
                         <InputField required name='address' label='address' />
                         <InputField required name='city' label='city' />
                         <InputField required name='country' label='country' />

                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm