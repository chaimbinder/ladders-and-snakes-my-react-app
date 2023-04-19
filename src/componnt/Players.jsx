import { useEffect, useState } from "react"
import UtilAxios from "../Util/axios";
import Dice1 from "./Dice1";
import Dice2 from "./Dice2";

const Players = (props) => {
  const [r1 , setR1] = useState();
  const [r2 , setR2] = useState();
   
  async function moove() {
    let Turn1 = await UtilAxios.Get("http://localhost:3010/Geme/GetTurn1")
    let Turn2 = await UtilAxios.Get("http://localhost:3010/Geme/GetTurn2")

    if (Turn1.GetIt) {
      let Score1 = await Dice1().then((Score1) =>{ 
        UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
          "name1": "Player2",
          "Turn": true
        })
        UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
          "name1": "Player1",
          "ScoreGeme": Score1,
          "Turn": false
        })
        const roundomDice1 = localStorage.getItem('roundomDice1');
        setR2(" ")
        setR1(roundomDice1)
        props.setCurrent1(Score1);
      
      })
    }

    if (Turn2.GetIt) {
      let Score2 = await Dice2().then((Score2) =>{
         UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
          "name1": "Player1",
          "Turn": true
        })
        UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
          "name1": "Player2",
          "ScoreGeme": Score2,
          "Turn": false
        })
        const roundomDice2 = localStorage.getItem('roundomDice2');
        setR1(" ")
        setR2(roundomDice2)
        props.setCurrent2(Score2);
        
        })
    }
  }
  
    useEffect(() => {
      UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
        "name1": "Player1",
        "ScoreGeme": 1,
        "Turn": true
      })
      UtilAxios.Post("http://localhost:3010/Geme/ChangePlayerScore", {
        "name1": "Player2",
        "ScoreGeme": 1,
        "Turn": false
      })
    }, [])
  
    return (
      <>
        <button onClick={moove}>dice{r1}{r2}</button>
  
      </>
    );
}
export default Players;