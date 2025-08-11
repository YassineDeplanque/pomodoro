import { useState, useEffect } from "react";

function App() {

const [seconde, setSeconde] = useState(59);
const [minute, setMinute] = useState(25);
const [work, setWork] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setSeconde(seconde - 1);
    if(seconde == 0){
      setMinute(minute - 1);
      setSeconde(59);
    }
    if(seconde == 0 && minute == 0 && work == true){
      setMinute(5);
      setSeconde(59);
      setWork(false)
    } else if(seconde == 0 && minute == 0 && work == false) {
      setMinute(25);
      setSeconde(59);
      setWork(true)
    }
  }, 1000);
  return () => clearInterval(interval);
})

  return (
    <div>
      <h1>{minute} : {seconde}</h1>
    </div>
  );
}

export default App;
