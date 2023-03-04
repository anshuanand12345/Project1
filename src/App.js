import { useState } from 'react';
import './App.css';

function App() {

  const[ number, setNumber ] = useState(0);
  let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);


  const count = () => {
    setNumber(number+1);
    let aquamarine = '#7FFFD4';
    setBgColor(aquamarine);
  };
  return (
    <>
      <div className="page">
       <div className='center'>
         <div className="square">
            <div className="circle" style={{ background: bgColor }}>
              <h1> {number} </h1>
           </div>
         </div>

         <div>
          <button onClick={count}> Change Color</button>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
