import { FC } from 'react';
import { SkillGroup } from '../models/SkillGroup';
import { SkillBranch } from './SkillBranch';

interface SkillTreeProps {
    skillGroups : SkillGroup[]
}

export const SkillTree:FC<SkillTreeProps> = ({ skillGroups }) => {
    const orderedSkillGroups = skillGroups.sort((skillGroupA, skillGroupB) => skillGroupA.order - skillGroupB.order)
    
    return (
       <div className='row'>
        {orderedSkillGroups.map(skillGroup => <div key={skillGroup.id} className="col-md-4"><SkillBranch skillGroup={skillGroup} /></div>)}
       </div>
    )
}