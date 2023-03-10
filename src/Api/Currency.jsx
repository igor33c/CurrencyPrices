import React, { useState, useEffect } from 'react';


function Currency() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
      const data = await response.json();
      setRates(data);
    }
    fetchRates();
  }, []);
  console.log(rates)
  if (!rates) {
    return <p>...</p>;
  }

  const dolRate = rates['USDBRL'].bid;
  const eurRate = rates['EURBRL'].bid;
  const btcRate = rates['BTCBRL'].bid;

  return (
    <div>
      <h1 className="text-red-600">Cotações Moedas</h1>
      <p>Dólar: {dolRate}</p>
      <p>Euro: {eurRate}</p>
      <p>Bitcoin: {btcRate}</p>
    </div>
  );
}

export default Currency;