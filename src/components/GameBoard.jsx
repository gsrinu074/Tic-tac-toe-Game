const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return <ol id="game-board">{intialGameBoard}</ol>;
}
