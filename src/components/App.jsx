import Die from './Die'
import { useState } from 'react'

export default function App() {

    function generateAllNewDice() {
        return Array.from({length: 10}, () => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(generateAllNewDice())
    console.log(dice)
    
    const diceElements = dice.map(num => <Die value={num} />)

    return <main>
        <div className='dice-container'>
            {diceElements}
        </div>
    </main>
}
