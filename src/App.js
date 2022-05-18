
import BasicTable from './components/BasicTable'
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreditCard from './components/creditCardPayment';
import BankTransfer from './components/BankTransfer';
import DirectDebitAuthorization from './components/DirectDebitAuthorization';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BasicTable/>}>
          </Route>
          {/* <Route path="/" element={<A/>}>
          </Route> */}
          <Route path="/creditCard" element={<CreditCard/>}>
          </Route>
          <Route path="/directDebitAuthorization" element={<DirectDebitAuthorization/>}>
          </Route>
          <Route path="/bankTransfer" element={<BankTransfer/>}>
          </Route>
      </Routes>
    </BrowserRouter> 

    </div>
  );
}

export default App;

