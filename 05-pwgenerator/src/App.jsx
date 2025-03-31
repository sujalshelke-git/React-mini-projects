import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [noAllowed, setNoAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null) 

  const passGenerator = useCallback(() => {
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noAllowed) str += "0123456789"
    if (charAllowed) str += "  ! @ # $ % ^ & * ( ) - _ = + \ | [  ] { } ; : / ? . >"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

     setPassword(pass)

  }, [length, noAllowed, charAllowed, setPassword ])

  const copyPwToClipboard = useCallback(() => { 
    passwordRef.current?.select()
    passwordRef.current?.setsSelectionRange(0,101)
    window.navigator.clipboard.writeText(Password)} ,[Password])

  useEffect(() => {passGenerator()}, [length, noAllowed, charAllowed, passGenerator ])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input
         type="text" 
         value={Password}
         className='outline-none w-full py-1 px-3 '
         placeholder='password'
         readOnly
         ref={passwordRef}
         />
         <button onClick={copyPwToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 '>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer '
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={noAllowed}
          id="numberInput"
          onChange={() => {
            setNoAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
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
