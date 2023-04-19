import "./App.css";
import Board from "./componnt/Board";
import Players from "./componnt/Players"; 
import { useEffect, useState } from "react"
import imgssssss from "../src/immmmchaimbinder/sulamot.jpg"
import io from "socket.io-client";

const App = () => {

  const [current1 , setCurrent1] = useState(1);
  const [current2 , setCurrent2] = useState(1);
 
  const socketIOClient = io("http://localhost:3010"); 

  function init(obj) {
    setCurrent1(obj.current1);
    setCurrent2(obj.current2);
  }
  useEffect(() => {
     {console.log(current1)}
    socketIOClient.on(
      "live On React",
       (data)=>{
        console.log(data);
        init(data)
        
       }
          );   
  },[socketIOClient]);

async function load() {
  console.log("welcome"); 
  let data = {current1 , current2}
   socketIOClient.emit( 
      "live On",
      { data }
    );
    
    //console.log(data);
  
}

 return(
  <>

    <img className="imgB" alt="" src={imgssssss}></img>
  <Board current1={current1} current2={current2}></Board>
  <Players current1 ={current1} setCurrent1={setCurrent1} current2 ={current2} setCurrent2={setCurrent2} ></Players>
<button onClick={()=>{
  load();
}}>click</button>
  </>
 )
};

export default App;
