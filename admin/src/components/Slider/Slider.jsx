import React from 'react'
import './Slider.css'
import { Link } from 'react-router-dom'
import addProduct from '../../assets/cart_icon.png'
import listProduct from '../../assets/star_icon.png'

const Slider = () => {
  return (
    <div className='slider'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className='addproduct'>
                <img src={addProduct} alt=''/>
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className='listproduct'>
                <img src={listProduct} alt=''/>
                <p>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Slider