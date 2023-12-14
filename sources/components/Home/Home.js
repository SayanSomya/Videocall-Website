import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [value,setvalue]=useState();
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate(`/room/${value}`)
    }

  return (
    <div>
    
      <input type='text' placeholder='Enter Room id' onChange={(e)=>setvalue(e.target.value)} />
      <button onClick={handleclick}>Join</button>
    </div>
  )
}

export default Home
