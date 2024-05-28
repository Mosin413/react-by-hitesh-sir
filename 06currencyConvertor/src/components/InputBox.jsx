// Do not call useId to generate keys in a list. Keys should be generated from your data


import React , {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],   // bydefault empty array
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputId = useId()  // unique id mil gyi
                                   // ab usse bind kr do label me (htmlFor)

    return (

        <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className='w-1/2'>

                <label
                    htmlFor= {amountInputId}   // ab usse input me bhi bind kro
                    // htmlFor='myAmt'
                    className='text-black/40 mb-2 inline-block'>

                    {label}   {/* Optimized way using useId hook */}

                </label>

                <input
                    id = {amountInputId}
                    // id='myAmt'
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}   //**IMP**// if onAmountChange exist then only call it
                                                                                                // e.target.value => it is in string format, so that we use Number()
                />

            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>

                <p className='text-black/40 mb-2 w-full'>Currency Type</p>

                <select 
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >

                    <option value="usd">
                        usd
                    </option>

                    {currencyOptions.map((currency) => (
                        <option key={currency} 
                                value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>

            </div>

        </div>
    )
}

export default InputBox