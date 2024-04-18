import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [clr, setClr] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: clr,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div className="flex flex-wrap justify-center px-2 bottom-20 inset">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2 ">
            <button 
            onClick={()=>setClr("red")}
            className="px-4 py-1 rounded-full" style={{backgroundColor:'red',color:'aliceblue'}}>Red</button>
            <button onClick={()=>setClr("yellow")}className="px-4 py-1 rounded-full" style={{backgroundColor:'yellow',color:'black'}}>yellow</button>
            <button onClick={()=>setClr("blue")} className="px-4 py-1 rounded-full" style={{backgroundColor:'blue',color:'aliceblue'}}>blue</button>
            <button onClick={()=>setClr("Green")} className="px-4 py-1 rounded-full" style={{backgroundColor:'Green',color:'aliceblue'}}>Green</button>
            <button onClick={()=>setClr("Purple")} className="px-4 py-1 rounded-full" style={{backgroundColor:'Purple',color:'aliceblue'}}>Purple</button>
            <button onClick={()=>setClr("Orange")} className="px-4 py-1 rounded-full" style={{backgroundColor:'Orange',color:'aliceblue'}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
