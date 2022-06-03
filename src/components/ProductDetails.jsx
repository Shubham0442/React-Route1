import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from "./app.module.css"


const ProductDetails = () => {

  const [data, setdata] = useState([])
  const {id} = useParams()
  useEffect(() => {
   
    if(id){

    
    fetch(`http://localhost:8080/products/${id}`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setdata(res)
    })

    }
  }, [id])
  return (
    <div>
      <h2>Product Details</h2>
      
      <table className={Styles.tab}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
       </thead> 
      <tbody>
        <tr> 
          <td>{data.name}</td>
          <td>{data.price}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default ProductDetails