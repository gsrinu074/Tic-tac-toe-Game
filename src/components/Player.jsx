import { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);
  console.log(playerName);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //the parameter editing is simply the previous value of isEditing.
    //If editing was false, !editing is true.
    //If editing was true, !editing is false.
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setPlayerName(event.target.value); 
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName}  onChange={handleChange} /> //two way binding happens here
    ); // after edit popping inputfield to get playername
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
