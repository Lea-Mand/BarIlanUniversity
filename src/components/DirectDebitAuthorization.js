import React , { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/DirectDebitAuthorization.css'
import { Button } from '@mui/material';
import bankPoalim from'../files/poalim.pdf'
import bankYahav from '../files/yahav.pdf'
import bankMizrahi from '../files/mizrahi.pdf'
import bankLeumi from '../files/leumi.pdf'
const DirectDebitAuthorization=()=>{

    const banks=['poalim','leumi','mizrahi','yahav']
  const [files,setFiles]=useState("");
    const [bank,setBank]=useState("");
    const [showUpload,setShowUpload]= useState(false)
    let array=[];
    const fileToDataURL=(file) =>{
      var reader = new FileReader()
      return new Promise(function (resolve, reject) {
        reader.onload = function (event) {
          resolve(event.target.result)
        }
        reader.readAsDataURL(file)
      })
    }  
    
    const handleChange1 = (e) => { 
      setShowUpload(true)
      if (e.target.files.length > 0) 
       { 
        console.log(Promise.all([...e.target.files].map(fileToDataURL)))
        return Promise.all([...e.target.files].map(fileToDataURL))

        //  e.target.files.map(function(item,i){
        //    const file = URL.createObjectURL(item);
        //    setFiles([...files,file]);
        //   console.log(file)
        //  })
      
      }       

    };

  
    const handleChange = (event) => {
      setBank(event.target.value);
    };
  
    return(
        
        <div className='divAll'>
        <div>Direct Debit Authorization</div>
       <div>
         <h2>Tutorials for setting up debit authorization:</h2>         
         <a href={bankPoalim} target="_blank">bank Hapoalim</a>
         <br/>
         <a href={bankYahav} target="_blank">bank Yahav</a>
         <br/>
         <a href={bankMizrahi} target="_blank">bank Mizrhahi</a>
         <br/>
         <a href={bankLeumi} target="_blank">bank Leumi</a>
        
       </div>
         <br/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:'40%'}}>
        <InputLabel id="demo-simple-select-label" >Choose Bank</InputLabel>
        <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={bank}
  label="Bank"
  onChange={handleChange}
>
  {banks.map(function(item, i){
  return <MenuItem value={item}>{item}</MenuItem>

})}
</Select>
      </FormControl>
    </Box>
    <div className="divUploadFile"> 
        <input multiple
        type="file"
        accept=".pdf,.JPG,.GIF"
        style={{ display: 'none' }}
        id="contained-button-file"
        onChange={handleChange1}
      />
      <br/>
      <label htmlFor="contained-button-file" >
        <Button className="buttonUploadFile" component="span">
        Upload authorization documents<span style={{ "fontSize": "1.5rem" }}></span>
        </Button>
      </label>
      {showUpload&&<label>files uploaded!</label>}
      </div>  
      {showUpload&&<div>{array.map(function(a){return<div><a href={a}>fgh</a></div>})}</div>}
    </div>
    )
}
export default DirectDebitAuthorization;