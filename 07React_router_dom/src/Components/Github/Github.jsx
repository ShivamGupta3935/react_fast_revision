import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
useLoaderData

function Github() {
 const data = useLoaderData()
//     const [data, setData] = useState({})

//    useEffect(()=> {
//       fetch("https://api.github.com/users/shivamgupta3935")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setData(data)        
//       })
//    },[])

  return (
      <div className='text-3xl p-3 font-semibold '>Github followers : {data.followers}
      <img src={data.avatar_url} alt="avatar image" className='w[250] h[250] bg-green-400' />
      </div>
      
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/shivamgupta3935")

    return response.json()
}
    
