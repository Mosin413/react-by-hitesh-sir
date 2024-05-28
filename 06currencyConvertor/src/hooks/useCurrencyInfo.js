// hooks mainly in javascript => so that, write .js not .jsx

// custom hook is just a function
// custom hooks will return array of two...
// custom hooks can use built-in hooks as well


import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({})  // empty object {}
    useEffect(() => {


        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())   // then => ke andar callback milta hai //.json() or JSON.parse() [check syntax]
        .then((res) => setData(res[currency]))  // in javascript => obj access karne ke two ways
                                                                // 1) obj.propertyName
                                                                // 2) obj["propertyName"]
        console.log(data);

    }, [currency])  // jab bhi currency ke andr change ho tab hum wapas api call karenge
                    // bcz, for every currency => api is different
    
    return data
}

export default useCurrencyInfo;