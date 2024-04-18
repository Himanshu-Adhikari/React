import { useState, useCallback, useEffect ,useRef} from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [length, setLength] = useState(8);
  const [nA, setNA] = useState(false);
  const [cA, setCA] = useState(false);
  const [pass, setPass] = useState();
  const PassRef= useRef(null);
  const passGenerator = useCallback(() => {
    let generatedPass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nA) characters += "0123456789";
    if (cA) characters += "!@#$%^&*()_";

    for (let i = 0; i < length; i++) {
      let id = Math.floor(Math.random() * characters.length);
      generatedPass += characters.charAt(id);
    }

    setPass(generatedPass);
  }, [length, nA, cA, setPass]);
  const copyPassWord=useCallback(()=>{
    PassRef.current?.select();
    // PassRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(pass);
  },[pass]);
  useEffect(() => {
    passGenerator();
  }, [length, nA, cA, passGenerator]);

  return (
    <div className="container mx-auto rounded-lg shadow-md bg-gray-800 overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-t-lg">
        <span className="mr-2 text-xl bg-transparent">Generate Password</span>
        <button
          onClick={passGenerator}
          className="rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-gray-100 px-3 py-1 text-black"
        >
          button
        </button>
      </div>
      <div className="flex items-center px-4 py-2 bg-gray-700">
        <input
          type="text"
          value={pass}
          className="w-full py-1 px-3 bg-gray-700 outline-none text-white"
          placeholder="Generated Password"
          readOnly
          ref={PassRef}
        />
        <button className="bg-blue-700 text-white rounded-xl px-5 py-1" onClick={copyPassWord}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 bg-white">
        <div className="flex items-center gap-x-1 bg-white">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="bg-white">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1 bg-transparent">
          <input
            type="checkbox"
            defaultChecked={nA}
            id="numberinput"
            onChange={() => {
              setNA((prev) => !prev), passGenerator();
            }}
          />
          <label htmlFor="numberinput" className="bg-transparent">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1 bg-transparent">
          <input
            type="checkbox"
            defaultChecked={cA}
            id="charinput"
            onChange={() => {
              setCA((prev) => !prev), passGenerator();
            }}
          />
          <label htmlFor="numberinput" className="bg-transparent">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
