import React from 'react';
import Markdown from 'react-markdown';

export function Tooltip({ rune }) {
    const { name, desc, icon, bullets, } = rune;

    return (
        <div className="tooltip">
            <h3 className="tooltip-name">{ name }</h3>
            <img className="tooltip-icon" src={icon}/>
            <Markdown className="tooltip-desc">{ desc }</Markdown>
            <ComboPoints rune={rune} />
            {bullets && bullets.map(bullet => <Markdown className="tooltip-bullet" key={bullet}>{bullet}</Markdown>)}
            <SecondarySkill rune={rune} />
        </div>
    );
}

export function SecondarySkill({ rune }) {
    const { secondarySpells, name: parentName } = rune;

    if (!secondarySpells) {
        return null;
    }

    return (
        <div className="secondary-spell-container">
            {secondarySpells && secondarySpells.map(({ desc, icon, name }) => (
                <div className="secondary-spell" key={desc + parentName}>
                    { name && <p className="tooltip-desc">{ name }</p> }
                    <img className="tooltip-icon" src={icon}/>
                    <Markdown className="tooltip-desc">{ desc }</Markdown>
                </div>
            ))}
        </div>
    );
}

export function ComboPoints({ rune }) {
    const { comboPoints, name } = rune;

    if (!comboPoints) {
        return null;
    }

    return ( 
        <div className="tooltip-combo-point-container">
        {comboPoints.map((perPointDesc, idx) => 
            <p
                className="tooltip-combo-point" 
                key={perPointDesc}
            >
                {`${idx + 1} ${name === 'Envenom' ? 'dose' : 'point'}${idx + 1 > 1 ? 's' : ' '}: ${perPointDesc}`}
            </p>
        )}
        </div>
    )
}
