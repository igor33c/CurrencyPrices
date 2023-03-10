import React, { useState, useEffect } from 'react';
import CurrencyRatesAPI from './CurrencyRatesAPI';

function Currency() {
  const [unitDol, setUnitDol] = useState(1)
  const [brlDol, setBrlDol] = useState()
  const [unitEur, setUnitEur] = useState(1)
  const [unitBtc, setUnitBtc] = useState(1)
  //
  //function updateValue(test){ 
  //  setValue1 = test + value1
  //}
  const changingDol = (event) => {
    setUnitDol(Number(event.target.value));
  };
  const changingBrlDol = (event) => {
    setBrlDol(Number(event.target.value));
    console.log('R$', brlDol)
  };

  const changingEur = (event) => {
    setUnitEur(Number(event.target.value));
  };
  const changingBtc = (event) => {
    setUnitBtc(Number(event.target.value));
  };
  
  
  const rates = CurrencyRatesAPI()  

  if (!rates) {
    return <p>...</p>;
  }

  const dolRate = rates['USDBRL'].bid;
  const eurRate = rates['EURBRL'].bid;
  const btcRate = rates['BTCBRL'].bid;
  
  return (
    <div>
      <h1 className="text-red-600">Cotações Moedas</h1>
      <ul className="max-w-md space-y-1 text-red-700 list-disc">
        <li className="flex items-center">
          <input type="number" value={unitDol} id="exchanger" onChange={changingDol}></input>
          <input type="number" value={(dolRate * unitDol).toFixed(2)} id="exchanged" onChange={changingBrlDol}></input>
        </li>
        <li className="flex items-center">
          <input type="number" value={unitEur} id="exchanger" onChange={changingEur}></input>
          <input type="number" value={(eurRate * unitEur).toFixed(2)} id="exchanged"></input>
        </li>
        <li className="flex items-center">
          <input type="number" value={unitBtc} id="exchanger" onChange={changingBtc}></input>
          <input type="number" value={(btcRate * unitBtc).toFixed(2)} id="exchanged"></input> 
        </li>
      </ul>
          
    </div>
  );
}

export default Currency;