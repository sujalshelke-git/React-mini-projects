import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// useloaderData for fast loading 

function Github() {

  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => setData(data))
  // },[])
  return (
    <div className='bg-gray-500 text-white m-5 p-4 text-3xl'>
      Github Followers:{data?.followers} <img  src={data?.avatar_url} alt="git pic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
  
} 