import './App.css'
import { hunter } from '../runes/hunter.json';
import { druid } from '../runes/druid.json';
import { rogue } from '../runes/rogue.json';
import { mage } from '../runes/mage.json';
import { priest } from '../runes/priest.json';
import { warlock } from '../runes/warlock.json';
import { warrior } from '../runes/warrior.json';
import { paladin } from '../runes/paladin.json';
import { shaman } from '../runes/shaman.json';
import { Tooltip } from './runeTooltip/tooltip';
import { Skills } from './skills/Skills';

function App() {
  const classes = [
      hunter,
      druid,
      rogue,
      mage,
      priest,
      warlock,
      warrior,
      paladin,
      shaman,
  ];

  const defaultClassName = hunter.name;

  const params = new URLSearchParams(window.location.search);
  const selectedClassName = params.get("curr");

  function isValidClass(className) {
    return className && classes.map(({ name }) => name).includes(className);
  }

  function setSelectedClass(className) {
    const newClassName = isValidClass(className) ? className : defaultClassName;
    if (newClassName === selectedClassName) {
      // already on this one, don't redirect
      return;
    }

    params.set('curr', newClassName);

    const url = new URL(window.location.href);
    url.search = params.toString();

    window.location.assign(url.href);
  }


  if(!isValidClass(selectedClassName)) {
    setSelectedClass(defaultClassName);
  }

  const selectedClass = classes.find(({ name }) => name === selectedClassName);
  const selectedIcon = "https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg";
    console.log(selectedClass);

  // <a href="https://www.wowhead.com/classic/spell=75/auto-shot">foo</a>
  return (
    <div className="page-container">
        <div className="class-nav-container">
            {classes.map((sodClass) =>
                    <div
                        className="class-icon-container"
                        onClick={() => setSelectedClass(sodClass.name)}
                        key={sodClass.name}
                    >
                        <img 
                            width="56"
                            height="56"
                            src={sodClass.iconSrc === selectedClass.iconSrc ? selectedIcon : sodClass.iconSrc} 
                            className="class-icon"
                        />
                        <img className={`${sodClass.iconSrc === selectedClass.iconSrc ? 'class-icon-selected' : '' } class-icon-highlight`} src="https://wow.zamimg.com/images/Icon/large/hilite/default.png" />
                    </div>
                )}
        </div>

        { selectedClass.skills && (
            <>
                <h1 className="class-title">{selectedClassName} Skills at 25</h1>
                <Skills skills={selectedClass.skills} />
            </>
        )}

        <h1 className="class-title">{selectedClassName} Season of Discovery Runes</h1>
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
    </div>
  )
}

export default App
