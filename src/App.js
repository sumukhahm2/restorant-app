import React,{useState} from 'react'
import UserInput from './components/UserInput';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
const App=()=>{
    const [table1,setDatas1]=useState([])
    const [table2,setDatas2]=useState([])
    const [table3,setDatas3]=useState([])

    const onSubmitHandler=(item)=>{
      if(item.table==='table1')
      {
        setDatas1((prevItem1)=>{
            return [item,...prevItem1]
         })
      }
      else if(item.table==='table2')
      {
        setDatas2((prevItem2)=>{
            return [item,...prevItem2]
         })
      }
      else
      {
        setDatas3((prevItem3)=>{
            return [item,...prevItem3]
         })
      }
       
    }
    const updateOrder=(item,table)=>{
        if(table==='table1')
           setDatas1(item)
        else if(table==='table2')
          setDatas2(item)
        else
           setDatas3(item)
    }
    


    
    
    return(
        <React.Fragment>
             <UserInput onValueSubmit={onSubmitHandler}></UserInput>
             <h1>Orders</h1>
             <Table1 table={table1} fun={updateOrder}></Table1>
             <Table2 table={table2} fun={updateOrder}></Table2>
             <Table3 table={table3} fun={updateOrder}></Table3>
        </React.Fragment>
           
      
    );
}
export default App