import React from 'react'

const TodoLists = (props) => {
  

  return(
    <>
    <div className='todo_style'>
       <li>{props.text}</li>
       <i className="fa-regular fa-circle-xmark"aria-hidden="true" onClick={()=>{
           props.onSelect(props.id)
       }}
       />
       {/* <button className='btn-2'>Delete</button>        */}
    </div>
  </>
  )
}

export default TodoLists;