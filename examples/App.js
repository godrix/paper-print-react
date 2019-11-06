import React from 'react';
import { A4, NoPrint } from 'paper-print-react';

function App() {
  return (
      <A4>
        <h1>Page A4</h1>
        <NoPrint>
        <b>
         This content will not print thanks to the &#60;Notprinted /&gt; component.
         </b>
        </NoPrint>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorem praesentium corporis quis ad, illo temporibus magni amet esse quia sunt rem pariatur alias id harum expedita consectetur! Quaerat, natus?
      </A4>
  );
}

export default App;
