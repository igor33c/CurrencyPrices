import React, { useState, useEffect } from 'react'
import CurrencyRatesAPI from '../api/CurrencyRatesAPI'
import Display from './DisplayCurrency'

function Currency(props) {
  const [unitDol, setUnitDol] = useState("1.00")
  const [dolPrice, setDolPrice] = useState()    
  const [unitEur, setUnitEur] = useState("1.00")
  const [eurPrice, setEurPrice] = useState()
  const [unitCad, setUnitCad] = useState("1.00")
  const [brlToCad, setBrlToCad] = useState()
  const [unitBtc, setUnitBtc] = useState("1.00")
  const [brlToBtc, setBrlToBtc] =useState()
  const [unitEth, setUnitEth] = useState("1.00")
  const [brlToEth, setBrlToEth] = useState()
 

  const rates = CurrencyRatesAPI()///chamando api  
  console.log(rates)
  if (!rates) {
    return( 
      <p>
        Sorry, due to an unexpected error it wasn't possible to load rates
      </p>
    )
    // renderiza uma mensagem de erro ao usuario pois nao foi posssivel obter dados da api (criar uma tela de erro) 
  }
  const dolRate = rates['USDBRL'].bid//atribuicao de preço das cotacoes
  const eurRate = rates['EURBRL'].bid
  const cadRate = rates['CADBRL'].bid
  const btcRate = rates['BTCBRL'].bid
  const ethRate = rates['ETHBRL'].bid

  function changingDol(event) {
    const inputValue = Number(event.target.value);
    const roundedValue = Math.round(inputValue * 100) / 100; // Rounds to two decimal places
    setUnitDol(roundedValue)
    const roundedDol = Math.round((inputValue * dolRate)*100) / 100
    console.log(roundedDol)
    setDolPrice(roundedDol)    
  }
  function changingBrlToDol(event) {    
    const inputValue = Number(event.target.value)      
    const newUnitDol = inputValue / dolRate
    setDolPrice(inputValue)
    setUnitDol(newUnitDol)   
  }

  function changingEur(event){
    const inputValue = Number(event.target.value);
    const roundedValue = Math.round(inputValue * 100) / 100; // Rounds to two decimal places
    setUnitEur(roundedValue)
    const roundedEur = Math.round((inputValue * dolRate)*100) / 100
    console.log(roundedEur)
    setEurPrice(roundedEur) 
  }

  function changingBrlToEur(event){
    console.log('aqui')
    const inputValue = Number(event.target.value)      
    const newUnitEur = inputValue / eurRate
    setEurPrice(inputValue)
    setUnitEur(newUnitEur)
  }

  const changingCad = (event) => {
    const value = (Number(event.target.value))
    setUnitCad(value)
  }
  const changingBrlToCad = (event) => {
    const brToCad = (Number(event.target.value))
    const newUnitCad = brToCad / cadRate
    setBrlToCad(brToCad)
    if (brToCad.toString().replace(/[^0-9]/g, "").length >= 3) {
      setUnitCad(newUnitCad.toFixed(2)); // Arredonda o primeiro input para dois dígitos
    } else {
      setUnitCad(newUnitCad); // Caso contrário, mantém o valor não arredondado
    }
  }

  const changingBtc = (event) => {
    const inputValue = event.target.value
    const regex = /^\d+(\.\d{0,4})?$/
    if (regex.test(inputValue)) {      
      setUnitBtc(parseFloat(inputValue))
    }
  }

  const changingBrlToBtc = (event) => {
    const brToBtc = Number(event.target.value)
    const newUnitBtc = brToBtc / btcRate
    setBrlToBtc(brToBtc)
    if (unitBtc.toString().replace(/[^0-9]/g, "").length >= 4) {
      setUnitBtc(newUnitBtc.toFixed(3)); // Arredonda o primeiro input para dois dígitos
    } else {
      setUnitBtc(newUnitBtc); // Caso contrário, mantém o valor não arredondado
    }
  }

  const changingEth = (event) => {
    const inputValue = event.target.value
    const regex = /^\d+(\.\d{0,4})?$/
    if (regex.test(inputValue)) {      
      setUnitEth(parseFloat(inputValue))
    }
  }

  const changingBrlToEth = (event) => {
    const brToEth = Number(event.target.value)
    const newUnitEth = brToEth / ethRate
    setBrlToEth(brToEth)
    if (unitEth.toString().replace(/[^0-9]/g, "").length >= 4) {
      setUnitEth(newUnitEth.toFixed(3)); // Arredonda o primeiro input para dois dígitos
    } else {
      setUnitEth(newUnitEth); // Caso contrário, mantém o valor não arredondado
    }
  }
   
  
  
  console.log('etherem agora:', ethRate)

  //maior e menor preço do dia ou data de fechamento para euro e dolar, na sexta
  {/*
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
    */
  }
  
  return (
    /* passando dados para Display onde renderiza a tela para o usuario */
    <Display
      dolRate = {dolRate} 
      dolPrice = {dolPrice}     
      unitDol = {unitDol}          
      changingDol = {changingDol}
      changingBrlToDol = {changingBrlToDol}

      eurRate = {eurRate}
      unitEur = {unitEur}
      changingEur = {changingEur}
      changingBrlToEur = {changingBrlToEur}
      eurPrice = {eurPrice}

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