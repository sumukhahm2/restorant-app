import React from 'react'
  

const Table1=(props)=>{
    const deleteItem=(event)=>{
        const deleted=JSON.parse(localStorage.getItem(event.target.id))
       const afterdel=props.product.filter((item)=>{
        return item.id!==event.target.id
       })
       localStorage.removeItem(event.target.id)
       props.fun(afterdel,deleted.price)
    
    }
  return(
    <div>
       <ul>
        {props.product.map(item=><li key={item.id}>{item.price} - {item.product}   <button onClick={deleteItem} id={item.id}>Delete</button></li>)}
       </ul>
    </div>
  );
}
export default Table1