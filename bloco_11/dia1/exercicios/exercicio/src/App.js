import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos =['Acordar','levantar', 'escovar os dentes', 'comer', 'tomar banho', 'dormir'];

function App() {
  return (<ol className='lista'>{compromissos.map((item) => Task(item))}</ol> );
}

export default App;
