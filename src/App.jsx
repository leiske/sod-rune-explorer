import './App.css'
import { hunter } from '../runes/hunter.json';
import { druid } from '../runes/druid.json';
import { Tooltip } from './runeTooltip/tooltip';
import { useState } from 'react';

function App() {
  const classes = [
      hunter,
      druid,
  ];

  const params = new URLSearchParams(window.location.search);
  const selectedClassName = params.get("curr");

  function setSelectedClass(className) {
    let newClassName = className;
    if (!className || !classes.map(({ name }) => name).includes(className)) {
      newClassName = 'hunter';
    }

    if (className === selectedClassName) {
      // already on this one, don't redirect
      return;
    }

    params.set('curr', newClassName);

    const url = new URL(window.location.href);
    url.search = params.toString();

    window.location.assign(url.href);
  }

  // just validate and it won't redirect if it's a good class name
  setSelectedClass(selectedClassName);

  const selectedClass = classes.find(({ name }) => name === selectedClassName);
  return (
    <>
        <div className="class-nav-container">
            {classes.map((sodClass) =>
                    <img 
                        src={sodClass.iconSrc} 
                        key={sodClass.iconSrc} 
                        onClick={() => setSelectedClass(sodClass.name)}
                        className={`class-icon ${sodClass.iconSrc === selectedClass.iconSrc ? 'class-icon-selected' : ''}`}
                    />)}
        </div>

        <div className="rune-category-container">
            <div className="rune-category">
                <h1>Chest Runes</h1>
                {selectedClass.runes.chest.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
            <div className="rune-category">
                <h1>Gloves Runes</h1>
                {selectedClass.runes.glove.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
            <div className="rune-category">
                <h1>Leg Runes</h1>
                {selectedClass.runes.leg.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
        </div>
    </>
  )
}

export default App
