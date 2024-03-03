
/*
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";
const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:10000
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>
                <div className="btn-style">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>
        </>
    );
};

export default App;
*/
/*
import React from 'react'
import { useState } from 'react'
import TodoLists from './TodoLists';
const App = () => {
    const [inputList,setInputList]=useState("");
    const [Items, setItems]=useState([]);
    const itemEvent =(event)=>{
       setInputList(event.target.value);
    }
    const listOfItems=()=>{
       setItems((oldItems)=>{
        return[...oldItems, inputList];
       })
       setInputList("");
    }
    const deleteItems=(id)=>{
        console.log("deleted");
        setItems((oldItems)=>{
           return oldItems.filter((arrElem, index)=>{
              return index !== id;
           })
        })
      }
  return (
    <>
      <div className='main_div'>
        <div className='cemter_div'>
            <br />
            <h1>TODO LIST</h1>
             <br/>
            <input type='text' placeholder='Add a Ttems' onChange={itemEvent} value={inputList}/>
            <button className='btn' onClick={listOfItems}>+</button>
            <br/>
            <ol>
                {Items.map((itemval,index)=>{
                  return <TodoLists 
                  key={index} 
                  id ={index}
                  text={itemval}
                  onSelect={deleteItems}
                  />
                    })}
            </ol>
        </div>
      </div>
    </>
  )
}
export default App
*/

/*
const id = 1;
const data = [
  {
  Id: 1,
  Name: 'Santosh'
}, {
  Id: 2,
  Name: 'Deepak'
}, {
  Id: 3,
  Name: 'Ashish'
}
, {
  Id: 4,
  Name: 'Manish'
}
, {
  Id: 5,
  Name: 'Shekhar'
}
];
const index = data.map(x => {
  return x.Id;
}).indexOf(id);

data.splice(index, 1);
console.log(data);
*/

import React from 'react';
import Todo from './todo';

const App = () => {
  return (
    <Todo/>
  )
}

export default App;

