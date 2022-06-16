import './App.css';
import React from 'react';
import DataTable from "./Function_Components/Table.js";
import NavBar from "./Function_Components/NavBar.js"

function App() {
  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
      <h1>Tables</h1>
      <p>DataTable is a third party plugin that is used to generate the demo table below.</p>
    <div className='ensemble'>
        <h3>DataTable Example </h3>
          <DataTable></DataTable>
    </div>
   </>
  );
}

export default App;
