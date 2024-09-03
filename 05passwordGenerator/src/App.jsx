import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState("");
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "1234567890";
    if (charAllowed) str += "!@#%%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllowed, setPassword]);

//useRef hook
const passwordRef = useRef(null)

//fn copy password text
const copyTextToClipboard = useCallback(() => {
      passwordRef.current?.select(100)  //for effective ui selected portion show
      window.navigator.clipboard.writeText(password) // copy the text which we want
}, [password])



  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500  ">
        <h1 className="text-3xl font-bold mb-18px text-center mb-4">
          password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            placeholder="password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 
        text-white px-3 py-0.5 shrink-0"
         onClick={copyTextToClipboard}
          >
            {" "}
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllow}
              onChange={(e) => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="character"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
