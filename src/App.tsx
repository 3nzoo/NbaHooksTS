import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetNbaPlayer } from './Actions/NbaActions';

function App() {

const dispatch = useDispatch()
const [playerName, setPlayerName] = useState("");


const playerState = useSelector((state:RootStore) => state.player);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
  setPlayerName(event.target.value);
}

const handleSumbit = () => {
  
  dispatch(GetNbaPlayer(playerName));
}

  return (
    <div className="App"> 
      <input type="text" onChange={handleChange}></input>
      <button className={"submit"} onClick={handleSumbit}> Check Player</button>
      {playerState.player && ( <div>
        {
          playerState.player.data.map(details => {
            return (<div key={details.id}> <h2 key={details.first_name}>{details.first_name} {details.last_name} - <strong style={{color:(details.team.conference === "East"? "blue":"red")}}>
              {details.team.conference} 
              </strong></h2> <h3 style={{color:"grey"}} key={details.team.full_name}>{details.team.full_name} </h3></div>)

          })
        }
      

      </div> 

      )
      
      }
     
    </div>
  );
}

export default App;
