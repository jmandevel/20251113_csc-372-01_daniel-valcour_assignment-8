import { useState } from 'react';
import './style.css';
import ComputerThrow from './computer-throw';
import PlayerThrow from './player-throw';
import ResultDisplay from './result-display';
import ResetButton from './reset-button';

function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(0);

  function getResult(player, computer) {
    if (player === computer) {
      return 'Tie';
    }
    if (
      player === 'rock' && computer === 'scissors' ||
      player === 'paper' && computer === 'rock' ||
      player == 'scissors' && computer === 'paper') {
      return 'Win';
    }
    return 'Lose';
  }

  function handlePlayerSelect(choice) {
    setPlayerThrow(choice);
    setComputerThrow(null);
    setResult('');
    setRound(round => round + 1);
  }

  function handleComputerResult(computerChoice) {
    setComputerThrow(computerChoice);
    const outcome = getResult(playerThrow, computerChoice);
    setResult(outcome);
  }

  function resetGame() {
    setRound(round => round = 0);
    setPlayerThrow(null);
    setComputerThrow(null);
    setResult('');
  }

  return (
    <main>
      <h1>Rock, Paper, Scissors!</h1>
      <PlayerThrow onSelect={handlePlayerSelect} selected={playerThrow} />
      <ComputerThrow round={round} playerThrow={playerThrow} onResult={handleComputerResult} result={result} />
      <ResultDisplay result={result} />
      <ResetButton onReset={resetGame} />
    </main>
  );
}

export default App;
