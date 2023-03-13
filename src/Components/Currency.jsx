import React, { useState, useEffect } from 'react'
import CurrencyRatesAPI from '../api/CurrencyRatesAPI'
import Display from './DisplayCurrency'

function Currency(props) {
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
  console.log(rates)

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
  const highEthRate = rates['ETHBRL'].high 
  console.log('o maior preço do ethereum hoje foi: R$', highEthRate)
  const lowEthRate = rates['ETHBRL'].low 
  console.log('o menor preço do ethereum hoje foi: R$', lowEthRate)
  
  return (
    <div className="flex flex-col items-center">   
      <h1 className="text-red-500 font-bold text-3xl mt-2 mb-5">Cotações Moedas</h1>
      <Display
        dolRate = {dolRate}
        unitDol = {unitDol}
        changingDol = {changingDol}
        changingBrlToDol = {changingBrlToDol}
        eurRate = {eurRate}
        unitEur = {unitEur}
        changingEur = {changingEur}
        changingBrlToEur = {changingBrlToEur}
        btcRate = {btcRate}
        unitBtc = {unitBtc}
        changingBtc = {changingBtc}
        changingBrlToBtc = {changingBrlToBtc}
      />      
    </div>
  )
}
export default Currency