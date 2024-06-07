import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Product() {
    const[data , setData] = useState([])
    useEffect(()=>{
        async function fetchingData(){
            let res = await fetch('https://fakestoreapi.com/products')
            let result = await res.json()
            console.log(result)
            
            setData(result)
                }
                fetchingData()
    },[])
  return (
    <div>
      {
        data.map((el)=>(
            <h1 key={el.id}>{el.title}</h1>
        ))
      }
    </div>
  )
}

export default Product
