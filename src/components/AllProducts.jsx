import React from 'react'
import { useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import Styles from "./app.module.css"


const AllProducts = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
       
    fetch("http://localhost:8080/products")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setdata(res)
    })
  
  }, [])
  
  return (
    <div>
       
     <h2>AllProducts:</h2>
    <table className={Styles.tab}>

       <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
       </thead>
       
      <tbody>
      {data.map((elem)=>(
        <tr key={elem.id}>
          <td>{elem.id}</td>
          <td>{elem.name}</td>
          <td>{elem.price}</td>
          <td><Link to={`/products/${elem.id}`}>More Details</Link></td>
        </tr>
         
      ))    
      }
      </tbody>
      
    </table>
      
        
    </div>
  )
}

export default AllProducts