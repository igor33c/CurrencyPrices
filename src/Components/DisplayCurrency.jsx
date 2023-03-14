import bitcoinIcon from '../icons/bitcoin.png'
import euroIcon from '../icons/european-union.png'
import dolarIcon from '../icons/dolar.png'
import realIcon from '../icons/brazil.png'

function Display(props){
    return (
        <div className="flex flex-col items-center">   
            <h1 className="text-red-200 font-bold text-3xl mt-2 mb-5">Cotações Moedas</h1>
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
                                value={props.unitDol.toFixed(2)}
                                step="0.01"
                                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                                id="exchanger"
                                onChange={props.changingDol}
                            />
                        </div>
                        <div className="flex items-center">
                            <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
                            <input
                                type="number"
                                pattern="[0-9]*[.,]?[0-9]+"
                                value={(props.dolRate * props.unitDol).toFixed(2)}
                                step="0.01"
                                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                                id="exchanged"
                                onChange={props.changingBrlToDol}
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
                                value={props.unitEur.toFixed(2)}
                                step="0.01"
                                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                                id="exchanger"
                                onChange={props.changingEur}
                            />
                        </div>
                        <div className="flex items-center">
                            <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
                            <input
                                type="number"
                                pattern="[0-9]*[.,]?[0-9]+"
                                value={(props.eurRate * props.unitEur).toFixed(2)}
                                step="0.01"
                                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                                id="exchanged"
                                onChange={props.changingBrlToEur}
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
                            value={props.unitBtc.toFixed(3)}
                            step="0.01"
                            className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                            id="exchanger"
                            onChange={props.changingBtc}
                        />
                        </div>
                        <div className="flex items-center">
                        <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
                        <input
                            type="number"
                            pattern="[0-9]*[.,]?[0-9]+"
                            value={(props.btcRate * props.unitBtc).toFixed(2)}
                            step="1"
                            className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                            id="exchanged"
                            onChange={props.changingBrlToBtc}
                        />
                        </div>
                    </div>
                </li>  
        </ul>
      </div>
)}
//## Attribution

//Icons made by [Flaticon](https://www.flaticon.com/) from [www.flaticon.com](https://www.flaticon.com/).
export default Display
