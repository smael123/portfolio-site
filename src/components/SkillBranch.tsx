import { FC } from 'react';
import { SkillGroup } from '../models/SkillGroup';

interface SkillBranchProps {
    skillGroup: SkillGroup
}

export const SkillBranch:FC<SkillBranchProps> = ({ skillGroup }) => {
    const { name, skills } = skillGroup;

    const orderedSkills = skills.sort((skillA, skillB) => skillA.order - skillB.order)
    
    return (
       <div className='card'>
        <div className="card-body">
            <h2 className='card-title'>{name}</h2>
            <div className='card-text'>
                <ul>
                    {orderedSkills.map(skill => <li key={skill.name}>{skill.name}</li>)}
                </ul>
            </div>
        </div>
       </div>
    )
}