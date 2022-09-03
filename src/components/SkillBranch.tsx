import { FC } from 'react';
import { SkillGroup } from '../models/SkillGroup';

interface SkillBranchProps {
    skillGroup: SkillGroup
}

export const SkillBranch:FC<SkillBranchProps> = ({ skillGroup }) => {
    const { name, skills } = skillGroup;

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