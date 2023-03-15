
import './App.css';
import Die from './components/Die';
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'
const App = () => {
  const generateDice = () => {
    return {
      value: Math.floor((Math.random() * 6) + 1),
      isHeld: false,
      id: nanoid()
    }
  }
  const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice())

    }
    return newDice

  }
  const rollDice = () => {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
          die :
          generateDice()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }

  }
  const HoldDice = (id) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {
        ...die, isHeld: !die.isHeld
      } : die
    }))

  }

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const diceElements = dice.map(die => <Die key={die.id} value={die.value} onClick={() => HoldDice(die.id)} isHeld={die.isHeld} />)


  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }

  }, [dice])

  return (

    <main className='flex flex-col items-center'>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='grid grid-rows-2 grid-cols-5 gap-2 py-36'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>{!tenzies ? "roll" : "New Game"}</button>
      {tenzies && <Confetti />}
    </main>

  );
}

export default App;
