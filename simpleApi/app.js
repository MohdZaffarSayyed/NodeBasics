import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const[data, setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/data").then((result)=>{
      result.json().then((resp)=>{
        setData(resp);
      })
    })
  },[])

  console.warn(data);
  return (
    <div className="App">
    <h1>Get API Call </h1>
    <table border="1">
     <tbody>
     <tr>
        <td>Name</td>
        <td>Email</td>
      </tr>
      {
        data.map((item,i)=>
          <tr key={i}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        </tr>
        )
      }
     </tbody>
    </table>
  </div>
  );
}

export default App;
