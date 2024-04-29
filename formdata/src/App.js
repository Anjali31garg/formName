import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const[fName, setFName]= useState('');
  const[lName, setLName] = useState('');
  const[fullName,setFullName]= useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(fName && lName){
      setFullName(`${fName} ${lName}`);
    }
    
  } 

  return (
    <form onSubmit={handleSubmit}>
    
    <h1>Full Name Display</h1>
    <label>First Name:
      <input type="text" name="firstName" value={fName} onChange={(e)=>setFName(e.target.value)} required></input>
    </label>
    <br/>
    <label>
      Last Name:
      <input type="text" name="lastName" value={lName} onChange={(e)=>setLName(e.target.value)} required></input>
    </label>
    <br/>
    <button type="submit">Submit</button>
    <br/>
    {fullName && <p>Full Name: {fullName}</p>}
    </form>
  );
}

export default App;
