import React from 'react';
//import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import ButtonBases from '../components/buttons'
import '../styles/HomePage.css'
import approved from'../images/approved.jpg';
import bank from '../images/bank.jpg'
import visa from '../images/visa.jpg'
import Box from '@mui/material/Box';
import { useState } from 'react';

const HomePage=()=>{
    const [paymentChoosing, setPaymentChoosing]=useState("")
   
    return(
    <div className='homePageMainDiv'>
        <div className='divMethodsOfPayment'>
        <label className='labelChoosePayment'>
        Choose a form of payment
        </label>
        <br/>
        {/* <FormControl className='formControl'> */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        <ButtonBases  url= {visa}
        id='creditCard'
          title='Credit Card'
          width= '33%' />
        <ButtonBases url= {approved}
        id='directDebitAuthorization'
          title= 'Direct debit authorization'
          width= '33%'/>
        <ButtonBases url= {bank}
        id='bankTransfer'
          title= 'Bank transfer'
          width='33%' />

        </Box>
        </div>
        {/* </FormControl> */}
    </div>
    )
}
export default HomePage;