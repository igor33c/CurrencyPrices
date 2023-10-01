import React, { useState } from 'react'
import CurrencyRatesAPI from '../api/CurrencyRatesAPI'
import Display from './DisplayCurrency'

function Currency(props) {
  const [unitDol, setUnitDol] = useState("1.00")
  const [dolPrice, setDolPrice] = useState()    
  const [unitEur, setUnitEur] = useState("1.00")
  const [eurPrice, setEurPrice] = useState("1.00")
  const [unitCad, setUnitCad] = useState("1.00")
  const [cadPrice, setCadPrice] = useState()
  const [unitBtc, setUnitBtc] = useState("1.00")
  const [btcPrice, setBtcPrice] = useState()
  const [unitEth, setUnitEth] = useState("1.00")
  const [ethPrice, setEthPrice] = useState()
 

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
    const inputValue = Number(event.target.value)      
    const newUnitEur = inputValue / eurRate
    setEurPrice(inputValue)
    setUnitEur(newUnitEur)
  }
  function changingCad(event){
    const inputValue = Number(event.target.value);
    const roundedValue = Math.round(inputValue * 100) / 100; // Rounds to two decimal places
    setUnitCad(roundedValue)
    const roundedCad = Math.round((inputValue * cadRate)*100) / 100
    console.log(roundedCad)
    setCadPrice(roundedCad) 
  }

  function changingBrlToCad(event){
    
    const inputValue = Number(event.target.value)      
    const newUnitCad = inputValue / cadRate
    setCadPrice(inputValue)
    setUnitCad(newUnitCad)
  }
  

  function changingBtc(event){
    const inputValue = Number(event.target.value);
    const roundedValue = Math.round(inputValue * 100) / 100; // Rounds to two decimal places
    setUnitBtc(roundedValue)
    const roundedBtc = Math.round((inputValue * btcRate)*100) / 100
    console.log(roundedBtc)
    setBtcPrice(roundedBtc) 
  }

  function changingBrlToBtc(event){
    
    const inputValue = Number(event.target.value)      
    const newUnitBtc = inputValue / btcRate
    setBtcPrice(inputValue)
    setUnitBtc(newUnitBtc)
  }

  function changingEth(event){
    const inputValue = Number(event.target.value);
    const roundedValue = Math.round(inputValue * 100) / 100; // Rounds to two decimal places
    setUnitEth(roundedValue)
    const roundedEth = Math.round((inputValue * ethRate)*100) / 100
    console.log(roundedEth)
    setEthPrice(roundedEth) 
  }

  function changingBrlToEth(event){    
    const inputValue = Number(event.target.value)      
    const newUnitEth= inputValue / ethRate
    setEthPrice(inputValue)
    setUnitEth(newUnitEth)  
  }
   
  
  
  console.log('etherem agora:', ethRate)

  //maior e menor preço do dia ou data de fechamento para euro e dolar, na sexta
  /*
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

      cadRate = {cadRate}
      unitCad = {unitCad}
      changingCad = {changingCad}
      changingBrlToCad = {changingBrlToCad}      
      cadPrice = {cadPrice}

      btcRate = {btcRate}
      unitBtc = {unitBtc}
      changingBtc = {changingBtc}
      changingBrlToBtc = {changingBrlToBtc}
      btcPrice = {btcPrice}

      ethRate = {ethRate}
      unitEth = {unitEth}
      changingEth = {changingEth}
      changingBrlToEth = {changingBrlToEth}
      ethPrice = {ethPrice}
     
    />          
  )
}
export default Currency