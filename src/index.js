import React from 'react';
import ReactDOM from 'react-dom/client';
import Cab from './Cabinet';
import "./Cabinet.css";
import Reg from './regest/Regest';
import Reges from './regest/Regest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Cab/> */}
    <Reges/>
  </React.StrictMode>
);

