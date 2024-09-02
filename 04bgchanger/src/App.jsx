import { useState } from "react";

function App() {
  const [color, setColor] = useState("#807146");

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10  flex flex-wrap justify-center items-center p-2 bg-white rounded-md  gap-10">
      
          <button className="outline-none py-1 px-3 bg-blue-500 rounded-md" onClick={() => setColor("blue")}>blue</button>
       
          <button className="outline-none py-1 px-3 bg-yellow-400 rounded-md" onClick={() => setColor("yellow")}>yellow</button>
       
          <button className="outline-none py-1 px-3 rounded-md bg-fuchsia-500" onClick={() => setColor("fuchsia")}>fuchsia</button>
       
          <button className="outline-none py-1 rounded-md px-3 bg-pink-400" onClick={() => setColor("pink")}>pink</button>
       
          <button className="outline-none py-1 px-3 rounded-md bg-rose-400" onClick={() => setColor("orange")}>orange</button>
       
          <button className="outline-none py-1 px-3 bg-teal-400 rounded-md" onClick={() => setColor("teal")}>teal</button>
     
          <button className="outline-none py-1 px-3 rounded-md bg-green-400" onClick={() => setColor("green")}>green</button>
     
          <button className="outline-none bg-amber-600 py-1 rounded-md px-3" onClick={() => setColor("#975840")}>amber</button>
      </div>
    </div>
  );
}

export default App;
