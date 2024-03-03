
import { createSlice } from "@reduxjs/toolkit";
const initialState={
  task:[],
  taskData:"",
  myIndexno:null,
};
var myidx= null;

const todoSlice=createSlice({
  name:"todo",
  initialState:initialState,
  reducers:{
    addItem:(state, action)=>{
      state.task.push({id:Date.now(),work:action.payload ,status:false});
    },
    removeItem:(state, action)=>{
      state.task=state.task.filter(item=>item.id!=action.payload)
    },
    statusChange:(state, action)=>{
           
      for(var i=0; i<state.task.length; i++)
      {
         if(state.task[i].id==action.payload)
         {
          myidx=i;
         }
      }
        state.task[myidx].status=true; 
    },
    statusChange2:(state, action)=>{
           
      for(var i=0; i<state.task.length; i++)
      {
         if(state.task[i].id==action.payload)
         {
          myidx=i;
         }
      }
        state.task[myidx].status=false; 
    },
    statusEdit:(state,action)=>{
      for(var i=0; i<state.task.length; i++)
      {
         if(state.task[i].id==action.payload)
         {
          myidx=i;
          state.myIndexno=i;
         }
      }
       state.taskData= state.task[myidx].work;
    },
    savemyData:(state , action)=>{
      var mydata=action.payload.data;
      var myidx=action.payload.myidx;
      state.task[myidx].work=mydata;
    }
  }
})

export const {addItem, removeItem ,statusChange,statusEdit,statusChange2,savemyData}=todoSlice.actions;
export default todoSlice.reducer;