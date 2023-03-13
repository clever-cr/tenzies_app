import logo from './logo.svg';
import './App.css';
import Die from './components/Die';
import { useState } from 'react';
function App() {
  // const [dice, setDice] = useState(allNewDice)
  const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor((Math.random() * 6) + 1))

    }
    return newDice

  }
  console.log(allNewDice())

  return (
    <div>
      <main >

        <div className=' grid grid-rows-2 grid-cols-5 gap-2 px-9 py-36'>

          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>

      </main>
    </div>
  );
}

export default App;
