import React,{useState} from 'react'
import './UserInput.css'
const UserInput=(props)=>{
   const [idValue,setIdValue]=useState('')
   const [priceValue,setPriceValue]=useState('')
   const [dishValue,setDishValue]=useState('')
   const [table,setTable]=useState('')
    const onEnteredPrice=(event)=>{
      setPriceValue(event.target.value)
    }
    const onEnteredDish=(event)=>{
        setDishValue(event.target.value)
    }
    const onEnteredTable=(event)=>{
        setTable(event.target.value)
    }
    const onEnteredId=(event)=>{
        setIdValue(event.target.value)
    }
    const onEnteredValues=(event)=>{
       event.preventDefault();
       const values={
        id:Math.random().toString(),
            price:priceValue,
            dish:dishValue,
             table:table
           
       }
       localStorage.setItem(values.id,JSON.stringify(values))
          props.onValueSubmit(values)
          setIdValue('')
          setDishValue('')
          setPriceValue('')
          setTable('')
    }
    //console.log(tableValues)
    return(
        <div className='user-input'>
            <div className='user-input__id'>
                <label>Unique Id</label>
                <input type='number' onChange={onEnteredId} value={idValue}/>
            </div>
            <div className='user-input__price'>
            <label>Choose price</label>
                <input type='number' onChange={onEnteredPrice} value={priceValue}/>
            </div>
            <div className='user-input__dish'>
            <label>Choose Dish</label>
                <input type='text' onChange={onEnteredDish} value={dishValue}/>
            </div>
            <div className='user-input__table'>
            <label>Select Table</label>
                <select onChange={onEnteredTable} value={table}>
                    <option value=''>Choose Table</option>
                    <option value='table1'>Table1</option>
                    <option value='table2'>Table2</option>
                    <option value='table3'>Table3</option>
                </select>
            </div>
            <div>
                <button onClick={onEnteredValues}>Add Bill</button>
            </div>
        </div>
    );
}
 export default UserInput