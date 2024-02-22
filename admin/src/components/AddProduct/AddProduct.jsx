import React, { useState } from 'react'
import './AddProduct.css'
import upload_image from '../../assets/cloud.jpg'

const AddProduct = () => {
  const[image,setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
  })
  const imageHandler = (e)=>{
    setImage(e.target.files[0])
  }
  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }
 
  const Add_Product = async() =>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    
    let formData = new FormData();
    formData.append('product', image);
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers: {
        Accept: 'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData = data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product)
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'appliaction/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{data.success?alert("product added"):alert("product failed")})
    }
  };
  return (
    <div className='add-product'>
      <div className='add-1'>
        <p>Product Title</p>
        <input type='text' value={productDetails.name} onChange={changeHandler} name='name' placeholder='Type here'/>
      </div>
      <div className='add-2'>
        <p>Price</p>
        <input type='text' value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here'/>
      </div>
      <div className='add-3'>
        <p>Offer Price</p>
        <input type='text' value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here'/>
      </div>
      <div className='addproduct-field'>
        <p>Product Category</p>
        <select name='category' value={productDetails.category} onChange={changeHandler} className='field'>
          <option value="womens">Womens</option>
          <option value="mens">Mens</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className='upload-image'>
        <label htmlFor='input-image'>
          <img src={image ? URL.createObjectURL(image) : upload_image} alt=''/>
        </label>
        <input onChange={imageHandler} type='file' name='image' id='input-image' hidden/>
        <p>Upload image</p>
      </div>
      <button onClick={()=>{Add_Product()}}>ADD</button>
    </div>
  )
}

export default AddProduct