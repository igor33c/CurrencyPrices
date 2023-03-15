import React, { useState, useEffect } from 'react'
import CurrencyRatesAPI from '../api/CurrencyRatesAPI'
import Display from './DisplayCurrency'

function Currency(props) {
  const [unitDol, setUnitDol] = useState(1)
  const [formattedDol, setFormattedDol] = useState("1.00")
  const [brlToDol, setBrlToDol] = useState()
  const [unitEur, setUnitEur] = useState(1)
  const [brlToEur, setBrlToEur] = useState()
  const [unitCad, setUnitCad] = useState(1)
  const [brlToCad, setBrlToCad] = useState()
  const [unitBtc, setUnitBtc] = useState(1)
  const [brlToBtc, setBrlToBtc] =useState()
  const [unitEth, setUnitEth] = useState(1)
  const [brlToEth, setBrlToEth] = useState(1) 
  
  //teste
  //function updateValue(test){ 
  //  setValue1 = test + value1
  //}
  const changingDol = (event) => {
    const value = (Number(event.target.value))
    setUnitDol(value)     
    setFormattedDol(value.toFixed(2))  
    //atualiza primeiro input    
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

  const changingCad = (event) => {
    setUnitCad(Number(event.target.value))
  }
  const changingBrlToCad = (event) => {
    const brToCad = (Number(event.target.value))
    const newUnitCad = brToCad / cadRate
    setBrlToCad(brToCad)
    setUnitCad(newUnitCad)
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

  const changingEth = (event) => {
    setUnitEth(Number(event.target.value))
  }

  const changingBrlToEth = (event) => {
    const brToEth = Number(event.target.value)
    const newUnitEth = brToEth / ethRate
    setBrlToEth(brToEth)
    setUnitEth(newUnitEth)
  }
   
  const rates = CurrencyRatesAPI()///chamando api  
  console.log(rates)

  if (!rates) {
    return <p>...</p>
    // renderiza uma mensagem de erro ao usuario pois nao foi posssivel obter dados da api (criar uma tela de erro) 
  }

  const dolRate = rates['USDBRL'].bid//atribuicao de preço das cotacoes
  const eurRate = rates['EURBRL'].bid
  const cadRate = rates['CADBRL'].bid
  const btcRate = rates['BTCBRL'].bid
  const ethRate = rates['ETHBRL'].bid
  
  console.log('etherem agora:', ethRate)

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
    /* passando dados para Display onde renderiza a tela para o usuario */
    <Display
        dolRate = {dolRate}
        unitDol = {unitDol}
        formattedDol = {formattedDol}
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
        ethRate = {ethRate}
        unitEth = {unitEth}
        changingEth = {changingEth}
        changingBrlToEth = {changingBrlToEth}
        cadRate = {cadRate}
        unitCad = {unitCad}
        changingCad = {changingCad}
        changingBrlToCad = {changingBrlToCad}
      />          
  )
}
export default Currency