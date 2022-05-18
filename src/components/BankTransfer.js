import React, { useState } from "react";
import '../styles/BankTransfer.css'
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
const BankTransfer=()=>{
    const banks=['poalim','pagi','leumi','discont','markantil']
    const [bank,setBank]=useState("");
    const [name,setName]=useState("");
    const [branch,setBranch]=useState("");
    const [accountNum,setAccountNum]=useState("");
    const [files,setFiles]=useState([]);
    const [image,setImage]=useState("");

    const [showUpload,setShowUpload]= useState(false)
    const handleChange = (event) => {
        setShowUpload(true)
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          
            setImage(URL.createObjectURL(img))
            console.log(image)
      
        }
        // let a=[];
        // console.log(event.target.files[0])
        // a=[...event.target.files];
        // //setFiles(a);
        // const formData = new FormData();
        //   formData.append(
        // "myFile",
        // a[0]
       //files[0].name
      // );
      // Details of the uploaded file
      // console.log(a);
      // console.log("form data",formData)
    };

    const handleChangeFields = (event, setFunction) => {
        setFunction(event.target.value);
        console.log("name: " , name, "bank: ", bank, "branch: ", branch, "account number: ", accountNum)
      };
    return(
        
    <div>            
      <div>Bank Transfer</div> 
      <br/>
      <div className="accountDetails">
        <br/>
        <h1>University account details</h1>
        <h2>name: Bar Ilan</h2>
        <h2>account number: 1234567</h2> 
        <h2>bank: hapoalim</h2>
        <h2>branch: 12</h2>
      </div>
      <br/>
      <div className="divUploadFile"> 
        <input
        type="file"
        accept=".png"
        style={{ display: 'none' }}
        id="contained-button-file"
        onChange={handleChange}
        />
      <label htmlFor="contained-button-file" >
        <Button className="buttonUploadFile" component="span">
        Upload reference photo<span style={{ "fontSize": "1.5rem" }}></span>
        </Button>
      </label>
      {showUpload&&<div><img src={image} /><label>files uploaded!</label></div>}
      </div>  
    </div>
    )
}
export default BankTransfer;