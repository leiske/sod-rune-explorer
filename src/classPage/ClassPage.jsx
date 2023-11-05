import { Tooltip } from '../runeTooltip/tooltip';
import { Skills } from '../skills/Skills';

export function ClassPage({ sodClass }) {
  const { name, skills, runes } = sodClass;

  return (
    <div className="page-container">
        {skills && (
            <>
                <h1 className="class-title">{name} Skills at 25</h1>
                <Skills skills={skills} />
            </>
        )}

        <h1 className="class-title">{name} Season of Discovery Runes</h1>
        <div className="rune-category-container">
            <div className="rune-category">
                <h1>Chest Runes</h1>
                {runes.chest.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
            <div className="rune-category">
                <h1>Gloves Runes</h1>
                {runes.glove.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
            <div className="rune-category">
                <h1>Leg Runes</h1>
                {runes.leg.map(rune => <Tooltip key={rune.name} rune={rune} />)}
            </div>
        </div>
    </div>
  );
}
