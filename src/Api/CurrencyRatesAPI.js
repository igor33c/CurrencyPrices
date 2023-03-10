import { useState, useEffect } from 'react';

function CurrencyRatesAPI() {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
      const data = await response.json();
      setRates(data);
    }
    fetchRates();
  }, [ ]);

  return rates;
}

export default CurrencyRatesAPI;