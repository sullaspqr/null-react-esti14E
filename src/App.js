import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="border">
      Dobozok - App
      <BoxComponent hatterSzin="green" kiindulo={2} />
      <BoxComponent hatterSzin="blue" kiindulo={3}/>
      <BoxComponent hatterSzin="red"  kiindulo={4}/>
    </div>
  );
}

function BoxComponent(props) {
  const [getSzamlalo, setSzamlalo] = useState(props.kiindulo);
  return (
    <div
      style={{ width: "200px",
        height: "200px",
        backgroundColor: props.hatterSzin,
      }}
    className="p-2 m-5 rounded"
        onClick={() => {
          setSzamlalo(getSzamlalo + 1);
        }}
      >
      <h1>{getSzamlalo}</h1>
    </div>
  );
}

export default App;
