import { FC } from 'react';
import { SkillGroup } from '../models/SkillGroup';

export const SkillBranch:FC<SkillGroup> = ({ name, skills }) => {
    const orderedSkills = skills.sort((skillA, skillB) => skillA.order - skillB.order)
    
    return (
       <>
        <h2>{name}</h2>
        <ul>
            {orderedSkills.map(skill => <li key={skill.name}>{skill.name}</li>)}
        </ul>
       </>
    )
}