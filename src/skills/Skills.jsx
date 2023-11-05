import React from 'react';
import './skills.css';

export function Skills({ skills }) {
    return (
        <div className="skills-container">
            {skills && skills.map(skill => 
            <a
                key={skill.id}
                href={`https://www.wowhead.com/classic/spell=${skill.id}`}
            >
                { `${skill.name} ${skill.rank ? `(${skill.rank})` : '' }` }
            </a>
            )}
        </div>
    );
}
