import {useState, useCallback, useEffect, useRef} from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [showPassword, setShowPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  /*
  const copyPasswordToClipboard = useCallback(() => {


    window.navigator.clipboard.writeText(showPassword)

  }, [showPassword])
  */

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select()     // it will select the value when we will click on copy
    passwordRef.current?.setSelectionRange(0, 3)    // it will select the value in range given
    window.navigator.clipboard.writeText(showPassword)

  }, [showPassword])


  // const passwordGenerator = () => {}

  // useCallback(fn, dependencies)

  const passwordGenerator = useCallback(() => {        // here we talk about optimization

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){

      let charIndex = Math.floor(Math.random() * str.length + 1)        // +1 (bcz, zero na aa jaye isliye)

      let char = str.charAt(charIndex)

      pass += char
    }

    setShowPassword(pass)

  }, [length, numberAllowed, charAllowed, setShowPassword])

  // }, [length, numberAllowed, charAllowed])

  useEffect(() => {        // dependencies me kuch bhi chhed chhad ho to vapar run ho jaye
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input 
              type="text"
              value={showPassword}
              className = 'outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
          />

          <button
              onClick={copyPasswordToClipboard} 
              className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 active:bg-red-700 hover:scale-110 transition-all duration-200'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input 
                type="range"
                min={1}
                max={100}
                value={length}
                className=' cursor-pointer '
                onChange={(event) => {setLength(event.target.value)}}
            />
            <label>Length: {length}</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev)
                }}
            />   
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev)
                }}
            />
            <label htmlFor="characterInput">Characters</label>

          </div>

        </div>

      </div>
    </>

  )
}

export default App