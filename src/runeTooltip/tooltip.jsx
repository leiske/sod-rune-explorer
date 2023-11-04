import React from 'react';

export function Tooltip({ rune }) {
    const { name, desc, icon, bullets } = rune;

    return (
        <div className="tooltip">
            <h3 className="tooltip-name">{ name }</h3>
            <img className="tooltip-icon" src={icon}/>
            <p className="tooltip-desc">{ desc }</p>
            {bullets && bullets.map(bullet => <p className="tooltip-bullet" key={bullet}>{bullet}</p>)}
        </div>
    );
}
