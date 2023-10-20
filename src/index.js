import React from 'react';
import ReactDOM from 'react-dom/client';
import Cab from './Cabinet';
import "./Cabinet.css";
import Reg from './regest/Regest';
import Log from './regest/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Cab/> */}
    {/* <Log/> */}
    <Log/>
  </React.StrictMode>
);

