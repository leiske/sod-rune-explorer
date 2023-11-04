import './App.css'
import {runes} from '../runes/hunter.json';
import { Tooltip } from './runeTooltip/tooltip';

function App() {
    console.log({ runes });

  return (
    <>
            <Tooltip rune={runes.chest[0]} />
    </>
  )
}

export default App
