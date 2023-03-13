import React, { useState, useEffect } from 'react'
import CurrencyRatesAPI from './CurrencyRatesAPI'
import bitcoinIcon from '../icons/bitcoin.png'
import euroIcon from '../icons/european-union.png'
import dolarIcon from '../icons/dolar.png'
import realIcon from '../icons/brazil.png'

function Currency() {
  const [unitDol, setUnitDol] = useState(1)
  const [brlToDol, setBrlToDol] = useState()
  const [unitEur, setUnitEur] = useState(1)
  const [brlToEur, setBrlToEur] = useState()
  const [unitBtc, setUnitBtc] = useState(1)
  const [brlToBtc, setBrlToBtc] =useState() 
  
  //teste
  //function updateValue(test){ 
  //  setValue1 = test + value1
  //}
  const changingDol = (event) => {
    setUnitDol(Number(event.target.value))//atualiza primeiro input
  }
  const changingBrlToDol = (event) => {
    const brToDol = Number(event.target.value)// pega o segundo input
    const newUnitDol = brToDol / dolRate // faz a conversao brl para dolar
    setBrlToDol(brToDol) //estabelece novo valor para brl
    setUnitDol(newUnitDol) //atualiza valor dolar de acordo com conversao
  }

  const changingEur = (event) => {
    setUnitEur(Number(event.target.value))
  }

  const changingBrlToEur = (event) => {
    const brToEur = Number(event.target.value)
    const newUnitEur = brToEur / eurRate
    setBrlToEur(brToEur)
    setUnitEur(newUnitEur)
  }

  const changingBtc = (event) => {
    setUnitBtc(Number(event.target.value))
  }

  const changingBrlToBtc = (event) => {
    const brToBtc = Number(event.target.value)
    const newUnitBtc = brToBtc / btcRate
    setBrlToBtc(brToBtc)
    setUnitBtc(newUnitBtc)
  }
  
  const rates = CurrencyRatesAPI()///chamando api  

  if (!rates) {
    return <p>...</p>
  }

  const dolRate = rates['USDBRL'].bid//atribuicao de preço das cotacoes
  const eurRate = rates['EURBRL'].bid
  const btcRate = rates['BTCBRL'].bid

  //maior e menor preço do dia ou data de fechamento para euro e dolar, na sexta
  const highBtcRate = rates['BTCBRL'].high 
  console.log('o maior preço do bitcoin hoje foi: R$', highBtcRate)
  const lowBtcRate = rates['BTCBRL'].low 
  console.log('o menor preço do bitcoin hoje foi: R$', lowBtcRate)
  const highDolRate = rates['USDBRL'].high 
  console.log('o maior preço do dolar hoje foi: R$', highDolRate)
  const lowDolRate = rates['USDBRL'].low 
  console.log('o menor preço do dolar hoje foi: R$', lowDolRate)
  const highEurRate = rates['EURBRL'].high 
  console.log('o maior preço do euro hoje foi: R$', highEurRate)
  const lowEurRate = rates['EURBRL'].low 
  console.log('o menor preço do euro hoje foi: R$', lowEurRate)
  
  return (
    <div className="flex flex-col items-center">
      
      <h1 className="text-red-500 font-bold text-3xl mt-2 mb-5">Cotações Moedas</h1>
      <ul className="max-w-md space-y-1 list-disc pb-10">
        <li className="flex items-center justify-between flex-wrap">
          {/* Dolar*/}
          <span className="mr-4 font-bold text-2xl text-gray-800 mb-2">Dolar</span>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mb-2">
              <img src={dolarIcon} width="26" height="26" alt="failDolar  " className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={unitDol.toFixed(2)}
                step="0.01"
                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                id="exchanger"
                onChange={changingDol}
              />
            </div>
            <div className="flex items-center">
              <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={(dolRate * unitDol).toFixed(2)}
                step="0.01"
                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                id="exchanged"
                onChange={changingBrlToDol}
              />
            </div>
          </div>
        </li>
        <li className="flex items-center justify-between flex-wrap">
          {/* Euro*/}
          <span className="mr-4 font-bold text-2xl text-gray-800 mb-2">Euro</span>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mb-2">
              <img src={euroIcon} width="26" height="26" alt="failEuro" className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={unitEur.toFixed(2)}
                step="0.01"
                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                id="exchanger"
                onChange={changingEur}
              />
            </div>
            <div className="flex items-center">
              <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={(eurRate * unitEur).toFixed(2)}
                step="0.01"
                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                id="exchanged"
                onChange={changingBrlToEur}
              />
            </div>
          </div>
        </li>
        <li className="flex items-center justify-between flex-wrap">
          {/* Bitcoin*/}
          <span className="mr-4 font-bold text-2xl text-gray-800 mb-2">Bitcoin</span>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mb-2">
              <img src={bitcoinIcon} width="26" height="26" alt="failBitcoin" className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={unitBtc.toFixed(2)}
                step="0.01"
                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                id="exchanger"
                onChange={changingBtc}
              />
            </div>
            <div className="flex items-center">
              <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
              <input
                type="number"
                pattern="[0-9]*[.,]?[0-9]+"
                value={(btcRate * unitBtc).toFixed(2)}
                step="0.01"
                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                id="exchanged"
                onChange={changingBrlToBtc}
              />
            </div>
          </div>
        </li>  
      </ul>
    </div>
  );
}

//## Attribution

//Icons made by [Flaticon](https://www.flaticon.com/) from [www.flaticon.com](https://www.flaticon.com/).

export default Currency;