
import { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, statusChange,statusEdit,statusChange2,savemyData } from './todoSlice';


const Todo = () => {
  var a=0;
  const [val, setVal]=useState("");
  const [flag, setFlag]=useState(0);
  const [btnflag, setBtnFlag]=useState(false);
  const dispatch=useDispatch();
  const myTask=useSelector((state)=>state.todo.task);
  const myTaskData=useSelector((state)=>state.todo.taskData);
  const myIndex=useSelector((state)=>state.todo.myIndexno);
  const submitTask=()=>{
    dispatch(addItem(val));
    setVal("")
  }
  // const savemyData=()=>{
  //   setVal("")
  // }
  const  itemDel=(myid)=>{
   dispatch(removeItem(myid));
  }
  const itemComp=(myid)=>{
    dispatch(statusChange(myid))
  }
  const itemEdit=(myid)=>{
    dispatch(statusEdit(myid));
    setFlag(flag+1);
    setBtnFlag(true);
  }
   useEffect(()=>{
    setVal(myTaskData);
   },[flag]);

  const openTask=(myid)=>{
    dispatch(statusChange2(myid))
  }

  console.log(myTask);
  const mydata=myTask.map((key)=>{
    a++;
    return(
      <>
        <tr>
         <td>{a}</td>
         <td>
          {key.status ? <span style={{textDecoration:"line-through",color:"red"}}>{key.work}</span> : key.work}
         </td>
         <td>
          <button onClick={()=>{itemComp(key.id)}}>Complate</button>
         </td>
         <td>
          <button onClick={()=>{openTask(key.id)}}>ReOpen</button>
         </td>
         <td>
          <button onClick={()=>{itemDel(key.id)}}>Delete</button>
         </td>
         <td>
          <button onClick={()=>{itemEdit(key.id)}}>Edit</button>
         </td>
        </tr>
      </>
    )
  })

  return (
   <>
   <center>
      <h1>MY TODO LIST</h1>
      <input type='text' placeholder='Enter Your Work' value={val} onChange={(e)=>{setVal(e.target.value)}}/>

      {btnflag?<button onClick={()=>{dispatch(savemyData({data:val,myidx:myIndex}))}}>Edit Save</button> :<button onClick={submitTask}> ADD</button>}
      <br/>
      <br/>
      <table width="600" bgcolor='lightblue' border="2">
        <tr bgcolor="pink">
          <td>S.No</td>
          <td>MY TASK</td>
          <td>Complate</td>
          <td>ReOpen</td>
          <td>DELETE</td>
          <td>Edit</td>
        </tr>
        {mydata}
      </table>
   </center>
   </>
  )
}
export default Todo;