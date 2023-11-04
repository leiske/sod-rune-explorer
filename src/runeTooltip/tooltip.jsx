import React from 'react';

export function Tooltip({ rune }) {
    const { name, desc, icon } = rune;

    return (
        <div className="tooltip">
            <p className="tooltip-name">{ name }</p>
            <img className="tooltip-icon" src={icon}/>
            <p className="tooltip-desc">{ desc }</p>
        </div>
    );
}
