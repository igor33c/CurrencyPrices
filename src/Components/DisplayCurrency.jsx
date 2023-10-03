import bitcoinIcon from '../icons/bitcoin.png'
import euroIcon from '../icons/european-union.png'
import dolarIcon from '../icons/dolar.png'
import realIcon from '../icons/brazil.png'
import ethereumIcon from '../icons/ethereum.png'
import canadaIcon from '../icons/canada.png'


function Display(props){
    const roundedUnitDol = Math.round(props.unitDol * 100) / 100
    let roundedBrlToDol
    if (typeof props.dolPrice === 'number') {
        roundedBrlToDol = Math.round(props.dolPrice * 100) / 100
    } else {
        roundedBrlToDol = Math.round(props.dolRate * 100) / 100
    }

    const roundedUnitEur = Math.round(props.unitEur * 100) / 100
    let roundedBrltoEur
    if (typeof props.eurPrice === 'number') {
        roundedBrltoEur = Math.round(props.eurPrice * 100) / 100
    } else {
        roundedBrltoEur = Math.round(props.eurRate * 100) / 100
    }

    const roundedUnitCad = Math.round(props.unitCad * 100) / 100
    let roundedBrlToCad
    if (typeof props.cadPrice === 'number') {
        roundedBrlToCad = Math.round(props.cadPrice * 100) / 100
    } else {
        roundedBrlToCad = Math.round(props.cadRate * 100) / 100
    }

    const roundedUnitBtc = Math.round(props.unitBtc * 100) / 100
    let roundedBrlToBtc
    if (typeof props.btcPrice === 'number') {
        roundedBrlToBtc = Math.round(props.btcPrice * 100) / 100
    } else {
        roundedBrlToBtc = Math.round(props.btcRate * 100) / 100
    }

    const roundedUnitEth = Math.round(props.unitEth * 100) / 100
    let roundedBrlToEth
    if (typeof props.ethPrice === 'number') {
        roundedBrlToEth = Math.round(props.ethPrice * 100) / 100
    } else {
        roundedBrlToEth = Math.round(props.ethRate * 100) / 100
    }  
    //const roundedBrlToDol = Math.round(props.dolPrice * 100) / 100
     
    return (
        <div className="pl-1 flex flex-col items-center">   
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
                                pattern="^[0-9,\.]*$"
                                value={roundedUnitDol}
                                step="1"
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
                                value={roundedBrlToDol}
                                step="1"
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
                                type="number" // Use text type instead of number
                                value={roundedUnitEur}
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
                                value={roundedBrltoEur}
                                step="1"
                                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                                id="exchanged"
                                onChange={props.changingBrlToEur}
                            />
                        </div>
                    </div>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                    {/* Dolár Canadense*/}
                    <span className="mr-4 font-bold text-2xl text-gray-800 mb-2">Dólar Can.</span>
                    <div className="flex items-center flex-wrap">
                        <div className="flex items-center mb-2">
                            <img src={canadaIcon} width="26" height="26" alt="failCad" className="mr-1" />
                            <input
                                type="number"
                                pattern="[0-9]*[.,]?[0-9]+"
                                value={roundedUnitCad}
                                step="0.1"
                                className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                                id="exchanger"
                                onChange={props.changingCad}
                            />
                        </div>
                        <div className="flex items-center">
                            <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
                            <input
                                type="number"
                                pattern="[0-9]*[.,]?[0-9]+"
                                value={roundedBrlToCad}
                                step="0.01"
                                className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                                id="exchanged"
                                onChange={props.changingBrlToCad}
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
                            value={roundedUnitBtc}
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
                            value={roundedBrlToBtc}
                            step="500"
                            className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                            id="exchanged"
                            onChange={props.changingBrlToBtc}
                        />
                        </div>
                    </div>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                    {/* Ethereum*/}
                    <span className="mr-4 font-bold text-2xl text-gray-800 mb-2">Ethereum</span>
                    <div className="flex items-center flex-wrap">
                        <div className="flex items-center mb-2">
                        <img src={ethereumIcon} width="26" height="26" alt="failBitcoin" className="mr-1" />
                        <input
                            type="number"
                            pattern="[0-9]*[.,]?[0-9]+"
                            value={roundedUnitEth}
                            step="0.02"
                            className="w-24 h-10 px-2 py-1 text-lg text-center border rounded-md mr-2"
                            id="exchanger"
                            onChange={props.changingEth}
                        />
                        </div>
                        <div className="flex items-center">
                        <img src={realIcon} width="26" height="26" alt="failReal" className="mr-1" />
                        <input
                            type="number"
                            pattern="[0-9]*[.,]?[0-9]+"
                            step="250"
                            value={roundedBrlToEth}
                            className="w-36 h-10 px-2 py-1 text-lg text-center border rounded-md"
                            id="exchanged"
                            onChange={props.changingBrlToEth}
                        />
                        </div>
                    </div>
                </li>  
        </ul>
      </div>
)}
//## Attribution

//Icons made by [Flaticon](https://www.flaticon.com/) from [www.flaticon.com](https://www.flaticon.com/).
//<a href="https://www.flaticon.com/free-icons/ethereum" title="ethereum icons">Ethereum icons created by YI-PIN - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/canada" title="canada icons">Canada icons created by Freepik - Flaticon</a>
export default Display
