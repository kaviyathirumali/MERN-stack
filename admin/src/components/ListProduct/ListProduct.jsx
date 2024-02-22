import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import remove from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts]= useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
    console.log(allproducts)
  }
  useEffect(()=>{
    fetchInfo()
  },[])
  const remove_product = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'appliaction/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>ALL PRODUCT LIST</h1>
      <p>TOTAL :</p>
      <div className="listproduct-head">
        <p>PRODUCT</p>
        <p>TITTLE</p>
        <p>OLD PRICE</p>
        <p>NEW PRICE</p>
        <p>CATEGORY</p>
        <p>REMOVE</p>
      </div>
      <hr/>
      <div className='item-map'>
        {allproducts.map((item,i)=>(
          <div className="listproduct-inner" key={i}>
                <img src={item.image} alt='' className='item-images' />
                <p>{item.name}</p>
                <p>{item.old_price}</p>
                <p>{item.new_price}</p>
                <p>{item.category}</p>
                <img onClick={()=>{remove_product(item.id)}} src={remove} alt=''/>
            </div>    
            ))}
            </div>
    </div>
  )
}

export default ListProduct