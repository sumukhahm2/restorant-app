import React,{useState} from 'react'
import './UserInput.css'
const UserInput=(props)=>{
   const [idValue,setIdValue]=useState('')
   const [priceValue,setPriceValue]=useState('')
   const [productName,setProductValue]=useState('')
    const onEnteredPrice=(event)=>{
      setPriceValue(event.target.value)
    }
    const onEnteredProduct=(event)=>{
        setProductValue(event.target.value)
    }
    const onEnteredId=(event)=>{
        setIdValue(event.target.value)
    }
    const onEnteredValues=(event)=>{
       event.preventDefault();
       const values={
        id:Math.random().toString(),
            price:priceValue,
            product:productName
           
       }
       localStorage.setItem(values.id,JSON.stringify(values))
          props.onValueSubmit(values)
          setIdValue('')
          setProductValue('')
          setPriceValue('')
    }
    //console.log(tableValues)
    return(
        <div className='user-input'>
            <div className='user-input__id'>
                <label>Product Id</label>
                <input type='number' onChange={onEnteredId} value={idValue}/>
            </div>
            <div className='user-input__price'>
            <label>Selling price</label>
                <input type='number' onChange={onEnteredPrice} value={priceValue}/>
            </div>
            <div className='user-input__dish'>
            <label>product Name</label>
                <input type='text' onChange={onEnteredProduct} value={productName}/>
            </div>
            <div>
                <button onClick={onEnteredValues}>Add Product</button>
            </div>
        </div>
    );
}
 export default UserInput