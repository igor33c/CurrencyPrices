import React, { useState, useEffect } from 'react'
import CurrencyRatesAPI from './CurrencyRatesAPI'

function Currency() {
  const [unitDol, setUnitDol] = useState(1)
  const [brlDol, setBrlDol] = useState()
  const [unitEur, setUnitEur] = useState(1)
  const [brlEur, setBrlEur] = useState()
  const [unitBtc, setUnitBtc] = useState(1)
  const [brlBtc, setBrlBtc] =useState() 
  //
  //function updateValue(test){ 
  //  setValue1 = test + value1
  //}
  const changingDol = (event) => {
    setUnitDol(Number(event.target.value))//atualiza primeiro input
  }
  const changingBrlDol = (event) => {
    const brToDol = Number(event.target.value)// pega o segundo input
    const newUnitDol = brToDol / dolRate // faz a conversao brl para dolar
    setBrlDol(brToDol) //estabelece novo valor para brl
    setUnitDol(newUnitDol) //atualiza valor dolar de acordo com conversao
  }

  const changingEur = (event) => {
    setUnitEur(Number(event.target.value))
  }

  const changingBrlEur = (event) => {
    const brToEur = Number(event.target.value)
    const newUnitEur = brToEur / eurRate
    setBrlEur(brToEur)
    setUnitEur(newUnitEur)
  }

  const changingBtc = (event) => {
    setUnitBtc(Number(event.target.value))
  }

  const changingBrlBtc = (event) => {
    const brToBtc = Number(event.target.value)
    const newUnitBtc = brToBtc / btcRate
    setBrlBtc(brToBtc)
    setUnitBtc(newUnitBtc)
  }
  
  const rates = CurrencyRatesAPI()  

  if (!rates) {
    return <p>...</p>
  }

  const dolRate = rates['USDBRL'].bid
  const eurRate = rates['EURBRL'].bid
  const btcRate = rates['BTCBRL'].bid
  
  return (
    <div>
      <h1 className="text-red-600">Cotações Moedas</h1>
      <ul className="max-w-md space-y-1 text-red-700 list-disc">
        <li className="flex items-center">
          <input type="number" value={unitDol.toFixed(2)} id="exchanger" onChange={changingDol}></input>
          <input type="number" value={(dolRate * unitDol).toFixed(2)} id="exchanged" onChange={changingBrlDol}></input>
        </li>
        <li className="flex items-center">
          <input type="number" value={unitEur.toFixed(2)} id="exchanger" onChange={changingEur}></input>
          <input type="number" value={(eurRate * unitEur).toFixed(2)} id="exchanged" onChange={changingBrlEur}></input>
        </li>
        <li className="flex items-center">
          <input type="number" value={unitBtc.toFixed(4)} id="exchanger" onChange={changingBtc}></input>
          <input type="number" value={(btcRate * unitBtc).toFixed(2)} id="exchanged" onChange={changingBrlBtc}></input> 
        </li>
      </ul>
          
    </div>
  );
}

export default Currency;