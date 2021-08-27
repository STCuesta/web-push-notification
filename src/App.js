
import './App.css';
import {_uuid} from './components/PushNotifications'
import React,{useState} from 'react';

function App() {
  const [seconds, setSeconds] = useState(5)
  const [text, setText] = useState("")

  const sendNotification = ()=>{
    const message = {
      sender:"John Doe",
      text:text
    }
  console.log(message)
    return fetch(`${process.env.REACT_APP_API_URL}/message/0/${_uuid}`,{
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }})
  }
  return (
    <div className="App">
     <div>
       <input type="type" placeholder="Message" onChange={(e)=>setText(e.target.value)}/>
       <input type="number" placeholder="5" value={seconds} onChange={setSeconds}/>
       <button onClick={()=>{
         setTimeout(()=>{
          sendNotification()
         },seconds*1000)
       }}>Send</button>
     </div>
    </div>
  );
}

export default App;
