import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Styles from "./app.module.css"

const Navbar = () => {

    const nevigate = useNavigate()

  return (
    <div className={Styles.navbar}>Navbar:
        <Link to="/"><button>Home</button> </Link>
        <Link to="/products"><button>All Products</button></Link>
        <Link to="/products/:id"><button>Product details</button></Link>
    </div>
  )
}

export default Navbar