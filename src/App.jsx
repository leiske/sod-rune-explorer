import './App.css'
import {runes} from '../runes/hunter.json';
import { Tooltip } from './runeTooltip/tooltip';

function App() {
    console.log({ runes });

  return (
    <div className="rune-category-container">
        <div className="rune-category">
            <h1>Chest Runes</h1>
            {runes.chest.map(rune => <Tooltip rune={rune} />)}
        </div>
        <div className="rune-category">
            <h1>Gloves Runes</h1>
            {runes.glove.map(rune => <Tooltip rune={rune} />)}
        </div>
        <div className="rune-category">
            <h1>Leg Runes</h1>
            {runes.leg.map(rune => <Tooltip rune={rune} />)}
        </div>
    </div>
  )
}

export default App
