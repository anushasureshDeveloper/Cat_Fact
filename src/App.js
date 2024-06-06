import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [catfact,setCatFact]=useState("")

  const fetchData=async()=>{
    const {data}=await axios.get("https://catfact.ninja/fact")
    setCatFact(data.fact)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="flex flex-col justify-center items-center text-blue-300  bg-black font-bold text-xl min-h-screen py-24">
    <button onClick={fetchData} className="flex bg-yellow-500 text-black px-9 py-3 rounded-md mb-3" >Genarate Cat fact</button>
{catfact}
    </div>
  );
}

export default App;
