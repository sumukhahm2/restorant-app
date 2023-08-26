import React,{useState} from 'react'
import UserInput from './components/UserInput';
import Table1 from './components/Table1';
const App=()=>{
    
    const [products,setDatas1]=useState([])
    const [sum,setSum]=useState(0)

    const onSubmitHandler=(item)=>{
     setDatas1((prevState)=>{
        return [item,...prevState]
     })
     setSum((prevSum)=>{
        return parseInt(prevSum)+parseInt(item.price)
     })
       
    }
    const updateProduct=(item,deleted)=>{
       setDatas1(item)
      
       setSum((prevSum)=>{
        return parseInt(prevSum)-parseInt(deleted)
       })
       localStorage.removeItem(item.id)
    }
    

 
    
    
    return(
        <React.Fragment>
             <UserInput onValueSubmit={onSubmitHandler}></UserInput>
             <h1>Products</h1>
             <Table1 product={products} fun={updateProduct}></Table1>
             <h1>Total Worth of products:Rs {sum}</h1>
        </React.Fragment>
           
      
    );
}
export default App