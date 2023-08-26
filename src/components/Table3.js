import React from 'react'
  

const Table3=(props)=>{
    const deleteItem=(event)=>{
        const afterdel=props.table.filter((item)=>{
         return item.id!==event.target.id
        })
        localStorage.removeItem(event.target.id)
        props.fun(afterdel,'table3')
     
     }
  return(
    <div>
        <label><h2>Table3</h2></label>
       <ul>
       {props.table.map(item=><li key={item.id}>{item.price}-{item.table}-{item.dish}<button onClick={deleteItem} id={item.id}>Delete</button></li>)}
       </ul>
    </div>
  );
}
export default Table3