import React from 'react';

export function Tooltip({ rune }) {
    const { name, desc, icon, bullets, } = rune;

    return (
        <div className="tooltip">
            <h3 className="tooltip-name">{ name }</h3>
            <img className="tooltip-icon" src={icon}/>
            <p className="tooltip-desc">{ desc }</p>
            <ComboPoints rune={rune} />
            {bullets && bullets.map(bullet => <p className="tooltip-bullet" key={bullet}>{bullet}</p>)}
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
