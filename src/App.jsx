import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="Player1" symbol="X" />
          <Player intialName="Player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
