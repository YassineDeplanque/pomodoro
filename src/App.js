import { useState, useEffect } from "react";
import "./App.css";

function App() {

const [seconde, setSeconde] = useState(0);
const [minute, setMinute] = useState(25);
const [work, setWork] = useState(true);
const [cycle, setCycle] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setSeconde(seconde - 1);
    if(seconde == 0){
      setMinute(minute - 1);
      setSeconde(59);
    }
    if(seconde == 0 && minute == 0 && work == true && cycle%4 == 0){
      setMinute(15);
      setSeconde(0);
      setWork(false)
    }else if(seconde == 0 && minute == 0 && work == true && cycle%4 !== 0){
      setMinute(5);
      setSeconde(0);
      setWork(false)
    } else if(seconde == 0 && minute == 0 && work == false) {
      setMinute(25);
      setSeconde(0);
      setWork(true)
      setCycle(cycle + 1);
    }
  }, 1000);
  return () => clearInterval(interval);
})

  return (
    <div className="container">
    <h1 style={{
    width: '200px',
    height: '200px',
    border: '5px solid #ffffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  }}>{minute.toString().padStart(2, '0')} : {seconde.toString().padStart(2, '0')}
  </h1>
      <h3>{work ? 'Working time.' : 'Rest time !'}</h3>
      <h3>{cycle%4==0 && work==false ? 'Take a longer break.' : ""}</h3>
      <h3>Cycle number {cycle}</h3>
    </div>
  );
}

export default App;
